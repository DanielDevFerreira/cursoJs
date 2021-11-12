const express = require('express');
const NeDB = require("nedb");

const db = new NeDB({
    filename: "produtos.db",
    autoload: true,
});

const serve = express();
const PORT = 3000;

const route = serve;

// avisar pro servidor a ler um json utilizando um middleware
serve.use(express.json());

// ler os dados que estão sendo enviado via post
serve.use(express.urlencoded({ extended: true }));

// select dos dados
route.get('/produtos', (req, res) => {
    db.find({}).exec((error, data) => {
        if(error){
            console.error(error);
        }else {
            res.status(200).json(data);
        }
    }); 
});

// lista apenas um registro
route.get("/produtos/:id", (req, res) => {
    db.findOne({ _id: req.params.id}).exec((error, data) =>{
        if(error){
            console.error(error);
        }else {
            res.status(200).json(data);
        }
    })
});

// insert dos dados
route.post("/produtos", (req, res) => {
    db.insert(req.body, (error, newProduct) =>{
        if(error){
            console.error(error);
        }else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(newProduct);
        }
    }) 
});

// update dos dados
route.put("/produtos/:id", (req, res) => {
    db.update({ _id: req.params.id}, req.body, (error) => {
        if(error){
            console.error(error);
        }else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({
                message: "Produto atualizado com sucesso !"
            });
        }
    })
});

// delete dos dados
route.delete("/produtos/:id", (req, res) => {
    db.remove({ _id: req.params.id} , {}, (error, registerRemoveded) => {
        if(error){
            console.log(error);
        }else {
            res.status = 200;
            res.json({
                registerRemoveded
            })
        }
    })
})

serve.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})