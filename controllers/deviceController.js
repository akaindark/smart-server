const path = require("path");
const { Device } = require("../models/index");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");

const createDevice = async (req, res, next) => {
  try {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "public", fileName));

    const device = await Device.create({
      name,
      price,
      brandId,
      typeId,
      img: fileName,
    });

    return res.json(device);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
};

const getAllDevice = async (req, res) => {};
const getOneDevice = async (req, res) => {};

module.exports = { createDevice, getOneDevice, getAllDevice };
