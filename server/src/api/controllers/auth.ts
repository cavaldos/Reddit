const authController = {
  login:  async (req, res) => {
    try {
      res.status(200).json("login");
      
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: error,
      });
    }
  },
  logout:  async (req, res) => {
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
module.exports = authController;
