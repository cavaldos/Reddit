const user = require("../../datafake/user");

const userController = {
  getall: async (req, res) => {
    try {
      res.status(200).json({
        message: "getall",
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
  getbyid: async (req, res) => {
    try {
      const { id } = req.params;
      const data = user.find((item) => item.uid === id);
      res.status(200).json({
        message: "getbyid",
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
  create: async (req, res) => {
    try {
      const { body } = req;
      user.push(body);
      res.status(200).json({
        message: "create",
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = user.filter((item) => item.uid !== id);
      res.status(200).json({
        message: "delete",
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const data = user.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...body,
          };
        }
        return item;
      });
      res.status(200).json({
        message: "update",
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
};
module.exports = userController;
