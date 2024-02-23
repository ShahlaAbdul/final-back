// import { json, response } from "express";
import { UserModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const hash = bcrypt.hashSync(password, 12);
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "user is  not found" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      res.status(403).json({ message: "password is not correct" });
      return;
    }
    const token = jwt.sign(
      {
        email: user.email,
        role: user.role,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registerController = async (req, res) => {
  try {
    const { name, surname, email, password, phone, address, age } = req.body;
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = new UserModel({
      name,
      surname,
      email,
      password: hash,
      phone,
      address,
      age,
    });
    await newUser.save();
    const token = jwt.sign(
      { email: newUser.email, role: newUser.role },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
