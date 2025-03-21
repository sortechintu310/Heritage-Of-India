import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export default {
  // Register User Handler
  registerUser: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      // Ensure all fields are filled
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Hash the user's password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user
      const newUser = await userModel.createUser(name, email, hashedPassword);

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error("Error during user registration:", error);

      // Handle unique email constraint
      if (error.code === "23505") {
        return res.status(400).json({ message: "Email already exists" });
      }

      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Login User Handler
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      // Fetch the user by email
      const user = await userModel.getUserByEmail(email);
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      res.status(200).json({
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Error during user login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getUserByEmail: async (req, res) => {
    const { email } = req.params;
    try {
      const user = await userModel.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user by email:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
