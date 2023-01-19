const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const config = {
  user: 'sa',
  password: 'dexta0528!',
  server: 'dev.dexta.kr',
  port: 3482,
  database: 'DEXTA_TEST',
  trustServerCertificate: true,
};

app.listen(process.env.PORT || 5000);
