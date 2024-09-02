import User from "../model/usersSchema.js";

export const userSignUp = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      console.log(req.body);
      return res.status(401).json({ message: "Username already exists" });
    }
    const user = req.body;
    const newuser = new User(user);
    await newuser.save();

    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await User.findOne({
      username: username,
      password: password,
    });
    if (result) {
      return res.status(200).json({ data: result });
    } else {
      return res.status(401).json(`Invalid cradentials`);
    }
  } catch (error) {
    res.status(500).json("error", error.message);
  }
};
