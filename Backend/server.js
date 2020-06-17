import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req,res)=>{
    res.send(data.products);
});


app.get("/api/product/:id", (req,res)=>{
    const productId = parseInt(req.params.id);
    console.log( productId);
   
    const product = data.products.find(x=>x._id === 1);
    console.log(product);
    if(product)
    res.send(product);
    else
    res.status(404).send({msg:"Product not found"});

});

app.listen(5000,()=>{console.log("Server started at http://localhost:5000")});

