const roomDetails = require('../../../../../../MODELS/roomDetails');

const addData = require('../../../../DB/wrapper');

// Wrapper Func

const addRoomService = async () => {
  // const response = await addData(roomDetails, payloadFromControllerAsParameter);
  const response = true;

  if (response) return { statusCode: 201, payload: response };

  return { statusCode: 400, payload: 'Unable to Process your Request' };
};

module.exports = addRoomService;
