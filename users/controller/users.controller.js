const UserModel = require("../model/users.model");
const Helper = require("../../util/Helper");

exports.createUser = async (req, res, next) => {
  try {
    const { password, email, username } = req.body;

    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ error: true, msg: 'Some values are missing.' });
    }

    if (!Helper.isValidEmail(email)) {
      return res
        .status(400)
        .json({ error: true, msg: 'Please enter a valid email address.' });
    }

    const hashPassword = Helper.hashPassword(password);

    const data = {
      email: email,
      password: hashPassword,
      username: username
    }

    const createModel = await UserModel.create(data);
    res.status(201).json(createModel);
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err
    })
  }
}

exports.loginUser = async (req, res, next) => {
  try {
    const { password, email } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: true, msg: 'Some values are missing.' });
    }

    if (!Helper.isValidEmail(email)) {
      return res
        .status(400)
        .json({ error: true, msg: 'Please enter a valid email address.' });
    }

    const resUser = await UserModel.find({ "email": email });

    if (!Helper.comparePassword(resUser[0].password, password)) {
      return res.status(400).json({
        error: true,
        msg: 'The credentials you provided is incorrect.',
      });
    }

    const token = Helper.generateToken(resUser[0]._id);

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err
    })
  }
}

exports.profileUser = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const resProfile = await UserModel.find({ "_id": userId });

    const data = {
      email: resProfile[0].email,
      username: resProfile[0].username
    }

    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err
    })
  }
}