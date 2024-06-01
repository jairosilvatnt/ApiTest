import express, { json } from 'express'

const app = express()
app.use(express.json())


const usuarios= []

app.post('/users', (req, res) => {

  usuarios.push(req.body)
  res.send('ok deu tudo certo por aqui')
})

app.get('/users', (req, res) => {
  res.json(usuarios)
})

app.listen(3000)

/*
    Objetivos
    

    -Criar um usuário
    -Listar todos os usuários
    -Editar um usuário
    -Deletar um usuário


 */