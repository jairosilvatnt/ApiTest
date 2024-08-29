import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })
})

app.get('/usuarios', (req, res) => {
  res.json(users)
  res.send("Esta postagem esta funcionando corretamente!")

})



app.listen(3000)

/*
    Passo a passo dentro da construção da minha API;
      -(POST) Criar um usuário
      -(GET) Listar todos os usuários
      -(GET/{ID}) Pegar usuário pelo ID
      -(PUT/{ID}) Atualizar usuário pelo ID
      -(DELET/{ID}) Deletar usuário pelo ID
*/

/*
 TIPOS DE ERROS 
 2XX -> SUCESSO
 4XX -> ERRO NO FRONT-END (CLIENTE)
 5XX -> ERRO NO SERVIDOR
*/