import express from "express";

const app = express();

app.get('/teste', (req, res) => {
  res.send("testando esta rota agora!")
})

app.listen(3000)