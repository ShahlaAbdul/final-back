import jwt from "jsonwebtoken";

export const verifyAccess = function (roles) {
  return function (req, res, next) {
    try {
      let token = req.headers.authorization;
      if (!token) {
        return res.status(403).send({ message: "token is required" });
      }
      if (!token.startWith("Bearer")) {
        return res.status(403).send({ message: "token is not valid" });
      }
      token = token.slice(7);
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.decoded = decoded;
      if (!roles.includes(decoded.role)) {
        return res.status(403).send({ message: "you have not an access" });
      }
      console.log(decoded);
      next();
    } catch (err) {
      res.send(err.message);
    }
  };
};
