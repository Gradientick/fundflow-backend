import UserModel from "../Models/UserModel.js";

async function createUser(req, res) {
  const { name, username, email, password } = req.body;

  const user = new UserModel({
    name,
    username,
    email,
    password,
  });
  console.log(`new user: ${name}, ${username}, ${email}, ${password}`);

  const savedUser = await user.save();
  return res.status(201).json(savedUser);
}

async function getUsers(_req, res) {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "error fetching users", error });
  }
}

async function updateUser(req, res) {
  const { userId } = req.params;
  const { name, username, email, password } = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { name, username, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User Updated Succesfully", updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "error updating user", error });
  }
}

async function deleteUser(req, res) {
  const { userId } = req.params;

  try {
    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User deleted Succesfully", deletedUser });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting user", error });
  }
}
export default {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
};
