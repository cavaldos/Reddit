const { appauth, auth } = require("../../config/firebase");

const middlewares = {
  authorizationJWT: async (req, res, next) => {
    console.log({
      authorization: req.headers.authorization,
    });
 const authorizationHeader = req.headers.authorization;
      if (authorizationHeader) {
        const accessToken = authorizationHeader.split(" ")[1];

        appauth
          .verifyIdToken(accessToken)
          .then((decodedToken) => {
            console.log({ decodedToken });
            res.locals.uid = decodedToken.uid;
            next();
          })
          .catch((err) => {
            console.log({ err });
            return res.status(403).json({ message: "Forbidden", error: err });
          });
      } else {
        next();
        // return res.status(401).json({ message: 'Unauthorized' });
      }  
  },
};

module.exports = middlewares;
