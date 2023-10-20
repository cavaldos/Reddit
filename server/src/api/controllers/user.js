<<<<<<< HEAD
const { UsernameValidator } = require('../validators/username');
const z = require('zod');
const db = require('../../config/database');
const multer = require('../../config/upload');
const fs = require('fs');
const path = require('path');


const userController = {
  changeUsername: async (req, res) => {
    try {

      const { name } = UsernameValidator.parse(req.body);
      const username = await db.user.findFirst({
        where: {
          username: name
        }
=======
import { UsernameValidator } from "../validators/username.js";
import z from "zod";
import db from "../../config/database.js"
import multer from "../../config/upload.js";
import fs from "fs";
import path from "path";

import user from "../../models/user.model.js";

const userController = {
  getall: async (req, res) => {
    try {
      const User = await user.find();
      res.status(200).json(User);
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },

  changeUsername: async (req, res) => {
    try {
      const { name } = UsernameValidator.parse(req.body);
      const username = await db.user.findFirst({
        where: {
          username: name,
        },
>>>>>>> khanh
      });
      if (username) {
        return res.status(409).json({ message: "Username is taken" });
      }
      await db.user.update({
        where: {
<<<<<<< HEAD
          id: req.body.userId
        },
        data: {
          username: name
        }
=======
          id: req.body.userId,
        },
        data: {
          username: name,
        },
>>>>>>> khanh
      });
      res.status(200).json({ message: "Ok" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.message });
      }
<<<<<<< HEAD
      res.status(500).json({ message: 'Could not update username at this time. Please try later' });
=======
      res.status(500).json({
        message: "Could not update username at this time. Please try later",
      });
>>>>>>> khanh
    }
  },
  getUserInfo: async (req, res) => {
    try {
<<<<<<< HEAD

      const userId = req.params.id;


      if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
=======
      const userId = req.params.id;

      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
>>>>>>> khanh
      }

      const userInfo = await db.user.findFirst({
        where: {
<<<<<<< HEAD
          id: userId
        },
        select: {
          id:true,
          name: true,
          email: true,
          username: true,
          image: true
        }
      })

      res.status(200).json({ userInfo });
    } catch (error) {

=======
          id: userId,
        },
        select: {
          id: true,
          name: true,
          email: true,
          username: true,
          image: true,
        },
      });

      res.status(200).json({ userInfo });
    } catch (error) {
>>>>>>> khanh
      res.status(500).json({ error: error.message });
    }
  },
  uploadImage: async (req, res) => {
    try {
      const userId = req.body.userId;
      if (!userId) {
<<<<<<< HEAD
        return res.status(400).json({ error: 'User ID and image are required' });
      }
      
      const upload = multer.single('file');
=======
        return res
          .status(400)
          .json({ error: "User ID and image are required" });
      }

      const upload = multer.single("file");
>>>>>>> khanh

      upload(req, res, async function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
<<<<<<< HEAD
        }       
        const image = req.file;
        const user = await db.user.findFirst({
          where: {
            id: userId
          },
          select:{
            image: true
          }
        });
        if(user.image){
=======
        }
        const image = req.file;
        const user = await db.user.findFirst({
          where: {
            id: userId,
          },
          select: {
            image: true,
          },
        });
        if (user.image) {
>>>>>>> khanh
          fs.unlinkSync(user.image);
        }

        await db.user.update({
          where: {
<<<<<<< HEAD
            id: userId
          },
          data: {
            image: image.path
          }
=======
            id: userId,
          },
          data: {
            image: image.path,
          },
>>>>>>> khanh
        });

        res.status(200).json({ message: "Ok" });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  downloadImagine: async (req, res) => {
    try {
      const userId = req.params.id;

      if (!userId) {
<<<<<<< HEAD
        return res.status(400).json({ error: 'User ID is required' });
=======
        return res.status(400).json({ error: "User ID is required" });
>>>>>>> khanh
      }

      const user = await db.user.findFirst({
        where: {
<<<<<<< HEAD
          id: userId
        },
        select: {
          image: true
        }
      });
  
      if (!user || !user.image) {
        return res.status(404).json({ error: 'User or image not found' });
=======
          id: userId,
        },
        select: {
          image: true,
        },
      });

      if (!user || !user.image) {
        return res.status(404).json({ error: "User or image not found" });
>>>>>>> khanh
      }

      const imagePath = user.image;

      if (fs.existsSync(imagePath)) {
        res.sendFile(path.resolve(imagePath));
      } else {
<<<<<<< HEAD
        return res.status(404).json({ error: 'Image not found' });
=======
        return res.status(404).json({ error: "Image not found" });
>>>>>>> khanh
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
<<<<<<< HEAD
  }



}
module.exports = userController;
=======
  },
};
export default userController;

// import user from  "../../models/user.model.js";
// import { getAuth } from "firebase-admin/auth";

// const userController = {
//   getall: async (req, res) => {
//     try {
//       const User = await user.find();
//       res.status(200).json(User);
//     } catch (error) {
//       res.status(500).json({
//         message: "error",
//         data: error,
//       });
//     }
//   },
//   getbyid: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const data = user.find((item) => item.uid === id);
//       res.status(200).json({
//         message: "getbyid",
//         data,
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "error",
//         data: error,
//       });
//     }
//   },
//   create: async (req, res) => {
//     try {
//       const { body } = req;
//       user.push(body);
//       res.status(200).json({
//         message: "create",
//         data: user,
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "error",
//         data: error,
//       });
//     }
//   },
//   delete: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const data = user.filter((item) => item.uid !== id);
//       res.status(200).json({
//         message: "delete",
//         data,
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "error",
//         data: error,
//       });
//     }
//   },
//   update: async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { body } = req;
//       const data = user.map((item) => {
//         if (item.id === id) {
//           return {
//             ...item,
//             ...body,
//           };
//         }
//         return item;
//       });
//       res.status(200).json({
//         message: "update",
//         data,
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "error",
//         data: error,
//       });
//     }
//   },
// };
// export default userController;
>>>>>>> khanh
