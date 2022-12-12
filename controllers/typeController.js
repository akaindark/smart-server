const { Type } = require("../models/index");
const ApiError = require("../error/ApiError");

const createType = async (req, res) => {
  const { name } = req.body;
  const type = await Type.create({ name });
  return res.json(type);
};

const getAllTypes = async (req, res) => {
  const types = await Type.findAll();
  return res.json(types);
};

const getAllType = async (req, res) => {
  consttype = await Type.findAll({
    where: {
      id,
    },
  });
};

module.exports = { createType, getAllTypes };
