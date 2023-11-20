const express = require("express")
const exphbs = re ("express-handlesbars")

const app = express()

app.engine('handlesbars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(requisiçao, resposta)=> {
    resposta.send("Olá, mundo!")
})

app.listen(3000,()=>{
    console.log("servidor rodando na porta 3000")
})