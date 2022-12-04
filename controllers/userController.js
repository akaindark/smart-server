const ApiError = require("../error/ApiError");

const registrationUser = async (req, res) => {};
const loginUser = async (req, res) => {};
const checkUser = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return next(ApiError.badRequest("not found id"));
  }
  res.json(id);
};

module.exports = { registrationUser, loginUser, checkUser };
