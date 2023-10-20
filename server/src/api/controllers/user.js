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
      });
      if (username) {
        return res.status(409).json({ message: "Username is taken" });
      }
      await db.user.update({
        where: {
          id: req.body.userId,
        },
        data: {
          username: name,
        },
      });
      res.status(200).json({ message: "Ok" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({
        message: "Could not update username at this time. Please try later",
      });
    }
  },
  getUserInfo: async (req, res) => {
    try {
      const userId = req.params.id;

      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }

      const userInfo = await db.user.findFirst({
        where: {
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
      res.status(500).json({ error: error.message });
    }
  },
  uploadImage: async (req, res) => {
    try {
      const userId = req.body.userId;
      if (!userId) {
        return res
          .status(400)
          .json({ error: "User ID and image are required" });
      }

      const upload = multer.single("file");

      upload(req, res, async function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
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
          fs.unlinkSync(user.image);
        }

        await db.user.update({
          where: {
            id: userId,
          },
          data: {
            image: image.path,
          },
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
        return res.status(400).json({ error: "User ID is required" });
      }

      const user = await db.user.findFirst({
        where: {
          id: userId,
        },
        select: {
          image: true,
        },
      });

      if (!user || !user.image) {
        return res.status(404).json({ error: "User or image not found" });
      }

      const imagePath = user.image;

      if (fs.existsSync(imagePath)) {
        res.sendFile(path.resolve(imagePath));
      } else {
        return res.status(404).json({ error: "Image not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
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
