const express=require('express')
const port=8001
const mongoose=require('mongoose')
const newsdb=require('./Resources/models/newsMongo')
const path=require('path')
const app=express()
const apidata=require('./Resources/API/apiCall')


mongoose.connect('mongodb://localhost/news_app',
{ useNewUrlParser: true , useUnifiedTopology: true})
mongoose.connection.on('error',function(err){
    console.log("error connecting db"+err)
})


apidata.headlines.then(function(data){
    for(let i=0;i<Object.keys(data.articles).length;i++){
       
     var savedata=new newsdb({
         title:data.articles[i].title,
         imgUrl:data.articles[i].urlToImage
     })

     console.log(savedata)

     savedata.save().then(data => console.log(data)).catch(err => console.log(err))
    }


    
    
     
})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'Resources/html'));
app.use(express.static(__dirname+'/Resources/public'))



app.get('/',function(req,res){
    res.render("home")
})

app.listen(port,function(err){
    if(err){
        console.log(err)
    }
    console.log("Server up and running in port "+port)
})