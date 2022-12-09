const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/index");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24",
  });
};

const registrationUser = async (req, res, next) => {
  const { email, password, role } = req.body;
  if (!email || !password) {
    return next(ApiError.badRequest("error email or password"));
  }
  const candidate = await User.findOne({ where: { email } });
  if (candidate) {
    return next(ApiError.badRequest("user with this email exists"));
  }
  const hashPassword = await bcrypt.hash(password, 5);
  const user = await User.create({ email, role, password: hashPassword });
  const basket = await Basket.create({ userId: user.id });
  const token = generateJwt(user.id, user.email, user.role);
  return res.json({ token });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return next(ApiError.badRequest("user is not found"));
  }
  let comparePassword = bcrypt.compareSync(password, user.password);
  if (!comparePassword) {
    return next(ApiError.badRequest("password is incorrect"));
  }
  const token = generateJwt(user.id, user.email, user.role);
  return res.json({ token });
};

const checkUser = async (req, res, next) => {
  const token = generateJwt(req.user.id, req.user.email, req.user.role);
  return res.json({ token });
};

module.exports = { registrationUser, loginUser, checkUser };
