const express=require("express")
const app=express();


 app.use(logger);
 
app.get("/books",logger,(req,res)=>{
    return res.send({route:"/books"})

})

app.get("/libraries",logger,checkPermission,(req,res)=>{
    return res.send({route:"/libraries",permission:req.permission})
})

app.get("/authors",logger,checkPermission,(req,res)=>{
    return res.send({route:"/authors",permission:req.permission})
})


function logger(req,res,next){
    if(req.path=="/books"){
        console.log(req.path)
}else if(req.path=="/libraries"){
console.log(req.path)
}
else if(req.path=="/authors"){
console.log(req.path)
}
next();
}


function checkPermission(req,res,next){
    if(req.path=="/libraries"){
        req.permission=true;
    }
    else if(req.path=="/authors"){
        req.permission=true;
    }
    next()
}

app.listen(5000,()=>{
    console.log("Listning on port 5000")
})