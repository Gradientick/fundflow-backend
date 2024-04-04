import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../utils/config.js";

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: user._id }, config.SECRET, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ message: "Login Success", token, name: user.name });
  } catch (error) {
    return res.status(500).json({ message: "Error Logging In", error });
  }
}

export default login;
