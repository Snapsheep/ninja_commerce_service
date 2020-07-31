const UserModel = require("../model/users.model");
const Helper = require("../../util/Helper");

exports.createUser = async (req, res, next) => {
  const { password, email, username } = req.body;
  console.log(req.body);

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
}

exports.loginUser = async (req, res, next) => {
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
}

exports.profileUser = async (req, res, next) => {

  res.status(200).json({ data: "profile" });


}