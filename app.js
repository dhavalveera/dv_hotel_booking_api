require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const express = require('express');
const cors = require('cors');
const v1Routes = require('./API/V1');
const path = require('path');

const app = express();

// Static Files
app.use('/static', express.static(path.join(__dirname, 'public')));

// cors
app.options('*', cors());

//setting view engine to ejs
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());

// Routes
app.use('/api/v1/', v1Routes);

app.get('/', (req, res) => {
  res.status(200).send('Express Server is running...');
});

// server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`App running on port ${process.env.SERVER_PORT}`);
});
