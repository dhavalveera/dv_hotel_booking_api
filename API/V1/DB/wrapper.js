/*
 * @param {tableName, data} string,object
 * @return{result,null} object,null
 * @desc  add data to DB
 */
const addData = async (tableName, data) => {
  const result = await tableName.create({ ...data });
  if (!result.dataValues) return null;
  return result.dataValues;
};

const loginQuery = async (tableName, condition) => {
  const result = await tableName.findOne({
    where: { ...condition },
    returning: true,
  });
  return result;
};

const getSingleDataByCondition = async (tableName, condition) => {
  const result = await tableName.findOne({
    where: { ...condition },
    returning: true,
  });
  if (!result) return null;
};

const updateSingleData = async (tableName, newData, condition) => {
  const result = await tableName.update(
    { ...newData },
    {
      where: { ...condition },
      returning: true,
    }
  );
  if (!result) return null;
  return result;
};

module.exports = {
  addData,
  loginQuery,
  getSingleDataByCondition,
  updateSingleData,
};
