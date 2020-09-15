//Bibliotecas--------------------------------------------------
const express = require('express');
const path = require('path');
//-------------------------------------------------------------

const app = express();

//Renderiza as paginas-----------------------------------------
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname+'/html/index.html')) 
})

app.get('/page1', (req,res)=>{
   res.sendFile(path.join(__dirname+'/html/page1.html'))
})

app.get('/page2',(req,res)=>{
   res.sendFile(path.join(__dirname+'/html/page2.html'))
})


// Servidor Express-------------------------------------------
app.listen(process.env.port || 3000)
console.log('Servidor local rodando em localhost:3000')
//------------------------------------------------------------