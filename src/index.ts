import express from "express";
require("dotenv").config();
const { DB_PORT } = process.env;

const app = express();
app.use(express.json());

app.get('/test', (_req, res) => {
  const testResponse = {
    status: 'OK',
    message: 'test api run successful',
    date: new Date().toLocaleDateString()
    };
    return res.status(200).send(testResponse);
})

app.listen(DB_PORT, () => {
  console.log(`server running on port ${DB_PORT}`);
})