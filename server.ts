const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
  user: 'sa',
  password: 'dexta0528!',
  server: 'dev.dexta.kr',
  port: 3482,
  database: 'DEXTA_TEST',
  trustServerCertificate: true,
};

app.post('/forum/create/post', (req: any, res: any) => {
  const { post } = req.body;
  sql.connect(config, function (err: any) {
    var request = new sql.Request();
    request.query(
      `INSERT INTO dbo.ForumPost (Title, Post, PostId) VALUES ('test', 'test2', 3)`,
      function (err: any) {
        console.log(err);
      }
    );
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('running');
});
