const addRoomService = require('../SERVICE');

const addRoomController = async (req, res, next) => {
  try {
    const { statusCode, payload } = await addRoomService();

    res.status(statusCode).send({ payload });
  } catch (err) {
    next(err);
  }
};

module.exports = addRoomController;
