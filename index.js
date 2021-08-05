const express= require('express');
const ejs=require('ejs');
const app=express();
const fs=require('fs');
const bodyParser=require('body-parser');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('home',{
        fileData:'Your data appears here'
    });
});

app.post('/',(req,res)=>{
    console.log(req.body.book);
    const bookName=req.body.book;
    const data=fs.readFileSync('HP.txt','utf-8');
    // console.log(data);
    res.render('home',{
        fileData:data
    });
});
app.listen(3000,()=>{
    console.log("Server started at port 3000");
});