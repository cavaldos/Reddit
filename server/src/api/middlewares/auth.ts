const jwt = require('jsonwebtoken');
const { db } = require('../../config/database');

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

const authMiddleware =
{
    access: (req, res, next) => {
        const accessToken = req.cookies.accessToken;

        try {
            if (accessToken) {
                const decodedToken = verifyToken(accessToken);
                req.body.userId = decodedToken.userId;
            } else {
                throw new Error('Access token not provided');
            }
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }

        next();
    }
};

module.exports = authMiddleware;