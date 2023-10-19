import post from "../../datafake/post";
const postController = {
  getall: async  (req, res) => {
    try {
      res.status(200).json({
        message: "getall",
        data: post,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
  getbyid: async  (req, res) => {
    try {
      const { id } = req.params;
      const data = post.find((item) => item.id === id);
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
  create: async  (req, res) => {
    try {
      const { body } = req;
      post.push(body);
      res.status(200).json({
        message: "create",
        data: post,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
  delete: async  (req, res) => {
    try {
      const { id } = req.params;
      const data = post.filter((item) => item.id !== id);
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
  update: async  (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const index = post.findIndex((item) => item.id === id);
      post[index] = body;
      res.status(200).json({
        message: "update",
        data: post,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
};
export default postController;
