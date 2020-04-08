const express=require('express')
const port=8001
const mongoose=require('mongoose')
const scheme=require('./Resources/models/newsMongo')
const path=require('path')
const randomstring=require('randomstring')
const app=express()
const apidata=require('./Resources/API/apiCall')

mongoose.connect('mongodb://localhost/news_app',
{ useNewUrlParser: true , useUnifiedTopology: true})

mongoose.connection.on('error',function(err){
    console.log("error connecting db"+err)
})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'Resources/html'));
app.use(express.static(__dirname+'/Resources/public'))

app.get('/',function(req,res){
    const id=randomstring.generate(8);
    var colid='news'+id
    
const newsdb=mongoose.model(colid,scheme)
    apidata.headlines.then(function(data){
        for(let i=0;i<Object.keys(data.articles).length;i++){           
         var savedata=new newsdb({
             title:data.articles[i].title,
             newsUrl:data.articles[i].url,
             imgUrl:data.articles[i].urlToImage
         })
         savedata.save().then().catch(err => console.log(err))
        }
        setTimeout(respons,2000)
        
        function respons(){        
       newsdb.find({},function(err,loaddata){
        res.render('headline',{newsList:loaddata})
      })}    
    })
})

app.listen(port,function(err){
    if(err){
        console.log(err)
    }
    console.log("Server up and running in port "+port)
})