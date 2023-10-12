const testController = {
    test: async (req, res) => {
        res.status(200).json({
            message: 'test',
        });
    },
};
module.exports = testController;
