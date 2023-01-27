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
    const data = await request.query(`select * from dbo.ForumPost`);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/forum/getcomments/:id', async (req: any, res: any) => {
  try {
    const id = req.params.id;
    await sql.connect(config);
    var request = new sql.Request();
    const data = await request.query(
      `SELECT * FROM dbo.ForumReply WHERE PostId = '${id}'`
    );
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/forum/create/post', async (req: any, res: any) => {
  try {
    const post = req.body;
    await sql.connect(config);
    var request = new sql.Request();
    request.query(
      `INSERT INTO dbo.ForumPost (Title, Post) VALUES ('${post.Title}', '${post.Post}')`
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/forum/updatepost/', async (req: any, res: any) => {
  try {
    const data = req.body;
    await sql.connect(config);
    var request = new sql.Request();
    request.query(
      `UPDATE dbo.ForumPost SET Post = '${data.update}' WHERE PostId = '${data.id}'`
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/forum/postcomment/', async (req: any, res: any) => {
  try {
    const data = req.body;
    await sql.connect(config);
    var request = new sql.Request();
    request.query(
      `INSERT INTO dbo.ForumReply (Reply, PostId) VALUES ('${data.reply}', '${data.id}')`
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/forum/delete/:id', async (req: any, res: any) => {
  try {
    const id = req.params.id;
    await sql.connect(config);
    var request = new sql.Request();
    request.query(`DELETE FROM dbo.ForumReply WHERE PostId = '${id}'
      DELETE FROM dbo.ForumPost WHERE PostId = '${id}'`);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log('running');
});
