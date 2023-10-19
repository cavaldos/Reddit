
import user from "../../models/user.model.js";


const authController = {
  login: async (req, res) => {
    try {
      res.status(200).json("login success");
      console.log("login success");
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
  logout: async (req, res) => {
    try {
      res.status(200).json("logout");
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
};
export default authController;
