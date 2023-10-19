import { getAuth } from "firebase-admin/auth";
import User from "../../models/user.model.js";
const createUser = async (decodedToken) => {
  const newUser = new User({
    displayName: decodedToken.name,
    photoURL: decodedToken.picture,
    email: decodedToken.email,
    uid: decodedToken.user_id,
  });

  await newUser.save();
};
const middlewares = {
  authorizationJWT: async (req, res, next) => {
    console.log({
      authorization: req.headers.authorization,
    });

    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
      const accessToken = authorizationHeader.split(" ")[1];

      getAuth()
        .verifyIdToken(accessToken)
        .then((decodedToken) => {
          console.log(" info user", { decodedToken });
          res.locals.uid = decodedToken.uid;
          createUser(decodedToken); // day la ham luwu vao database

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
export default middlewares;
