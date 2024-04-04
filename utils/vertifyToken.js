import jwt from "jsonwebtoken";
import config from "./config.js";
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No Token Provided" });
  }

  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    return res.status(400).json({ message: "invalid token" });
  }
};

export default verifyToken;
