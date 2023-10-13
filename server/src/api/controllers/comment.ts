const comment = require("../../datafake/comment");

const commentController = {
  getall: async (req, res) => {
    try {
      res.status(200).json({
        message: "getall",
        data: comment,
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
      const data = comment.find((item) => item.id === id);
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
      comment.push(body);
      res.status(200).json({
        message: "create",
        data: comment,
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
      const data = comment.filter((item) => item.id !== id);
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
      const index = comment.findIndex((item) => item.id === id);
      comment[index] = {
        ...comment[index],
        ...body,
      };
      res.status(200).json({
        message: "update",
        data: comment,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
};
module.exports = commentController;
