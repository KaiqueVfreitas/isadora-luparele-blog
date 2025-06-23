import express from "express";

const app = express();
app.use(express.json())

const usuarios = []

app.post('/usuarios', (req, res) => {
    console.log(req.body)

    usuarios.push(req.body)
    
    res.status(201).send("Usuário criado com sucesso")
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios)
})




app.listen(3000, () => {
    console.log('API rodando na porta 3000')
})