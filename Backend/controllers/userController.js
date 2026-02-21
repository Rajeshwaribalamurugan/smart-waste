const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.json({ message: "User registered successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
};
