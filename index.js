const express= require('express');
const ejs=require('ejs');
const app=express();
const fs=require('fs');
const bodyParser=require('body-parser');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('home',{
        fileData:'Your data appears here',
        maxWords:'null',
        maxCount:0
    });
});

app.post('/',(req,res)=>{
    console.log(req.body.book);
    const bookName=req.body.book;
    const data=fs.readFileSync('HP.txt','utf-8');
    // console.log(data);
    var allWords = data.split(/\b/);
var wordCountList = {};

allWords.forEach(function(word){
  if(word !== " "){
    if(!wordCountList.hasOwnProperty(word)){
      wordCountList[word] = {word: word, count:0};
    }
    wordCountList[word].count++;
  }
})


var maxCountWord = {count:0};
for(var propName in wordCountList){
  var currentWord = wordCountList[propName];
  if(maxCountWord.count<currentWord.count){
    maxCountWord = currentWord;
  }
}
console.log(maxCountWord);
    res.render('home',{
        fileData:data,
        maxWords:maxCountWord.word,
        maxCount:maxCountWord.count
    });
});
app.listen(3000,()=>{
    console.log("Server started at port 3000");
});