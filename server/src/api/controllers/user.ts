import { UsernameValidator } from "../validators/username";
import { z } from 'zod';
import { db } from '../../config/database';
const userController = {
  changeUsername: async (req, res) => {
    try {
      const body = await req.json();
      const { name } = UsernameValidator.parse(body);
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
      res.status(200).json({message: "Ok"});
    } catch (error) {
      if(error instanceof z.ZodError){
        return res.status(400).json({error: error.message});
      }
      res.status(500).json({message: 'Could not update username at this time. Please try later'});
    }
  }


}
module.exports = userController;
