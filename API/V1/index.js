const express = require('express');

const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
/***
 * TODO: Select Query - to get All Customer Registration Details
 */
// const testQuery = await customerRegistrations.findAll();

/**
 * TODO: const testQuery - based on WHERE Clause
 */
// const testQuery = await customerRegistrations.findAll({
//   name: userName,
// });

/**
 * TODO: SELECT - Inner Query
 */
//   const testQuery = modelName.findAll({
//     include: [
//         {
//             model: otherModelName,
//             where: {
//                 tableColumnName: ${value},
//             }
//         }
//     ],
//   });

const customerRoutes = require('./ROUTES/customerRoutes');
const hotelRoutes = require('./ROUTES/hotelRoutes');
const commonRoutes = require('./ROUTES/commonRoutes');

router.use('/common', commonRoutes);
router.use('/customer', customerRoutes);
router.use('/hotel', hotelRoutes);

module.exports = router;
