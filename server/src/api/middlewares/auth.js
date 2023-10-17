const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

const authMiddleware =
{
    access: (req, res, next) => {
        const authorizationHeader = req.get('Authorization');
    
        try {
            if (authorizationHeader) {
                const token = authorizationHeader.replace('Bearer ', '');
                const decodedToken = verifyToken(token);
                req.body.userId = decodedToken.userId;
                
                
            } else {
                return res.status(401).json({message :'Access token not provided'});
            }
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    
        next();
    }
    
};

module.exports = authMiddleware;