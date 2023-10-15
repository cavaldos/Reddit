const { UsernameValidator } = require('../validators/username');
const z = require('zod');
const db = require('../../config/database');
const { request } = require('http');

const userController = {
  changeUsername: async (req, res) => {
    try {

      const { name } = UsernameValidator.parse(req.body);
      const username = await db.user.findFirst({
        where: {
          username: name
        }
      });
      if (username) {
        return res.status(409).json({ message: "Username is taken" });
      }
      await db.user.update({
        where: {
          id: req.body.userId
        },
        data: {
          username: name
        }
      });
      res.status(200).json({ message: "Ok" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ message: 'Could not update username at this time. Please try later' });
    }
  },
  getUserInfo: async (req, res) => {
    try {
      
      const userId = req.params.id;
  
      
      if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
      }
  
      const userInfo = await db.user.findFirst({
        where:{
          id: userId
        },
        select:{
          name: true,
          email: true,
          username: true, 
          image: true
        }
      })
      
      res.status(200).json({ userInfo });
    } catch (error) {

      res.status(500).json({ error: error.message });
    }
  }



}
module.exports = userController;
