import { UserModel } from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (error) {
    res.send(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (decoded.email !== user.email && decoded.role === "user") {
      return res.send("you don't have access");
    }
    res.json(user);
  } catch (error) {
    res.send(error.message);
  }
};

export const createOneUser = async (req, res) => {
  try {
    const { name, surname, email, password, phone, address, age } = req.body;
    const newUser = new UserModel({
      name,
      surname,
      email,
      password,
      phone,
      address,
      age,
    });
    await newUser.save();
    res.status(200).json("User elave olundu!");
  } catch (error) {
    res.send(error.message);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, password, phone, address, age } = req.body;
    const newUser = await UserModel.findByIdAndUpdate(id, {
      name,
      surname,
      email,
      password,
      phone,
      address,
      age,
    });
    res.send(newUser);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const newUser = await UserModel.findByIdAndDelete(id);
    res.send(newUser);
  } catch (error) {
    res.send(error.message);
  }
};
