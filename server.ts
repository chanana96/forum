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

app.get('/forum/get', async (req: any, res: any) => {
  try {
    await sql.connect(config);
    var request = new sql.Request();
    const data = await request.query(`select * from dbo.forumPost`);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.get('/forum/:PostId', async (req:any, res:any) => {

// })

app.post('/forum/create/post', async (req: any, res: any) => {
  try {
    const post = req.body;
    await sql.connect(config);
    var request = new sql.Request();
    request.query(
      `INSERT INTO dbo.ForumPost (Title, Post, PostId) VALUES ('${
        post.Title
      }', '${post.Post}', ${Math.round(Math.random() * 10000)})`
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log('running');
});
