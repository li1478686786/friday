/**
 * Created by lanouhn on 17/7/24.
 */
var app=require("express")();
var body=require("body-parser");
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"five"
});
//链接数据库
connection.connect(function(err){
    if(err){

    } else {
        console.log("连接成功");
    }


});
//浏览器打开网页
app.get("/",function(req,res){
    res.sendFile(__dirname+"/w-jifenshangchengquerendingdan.html")
})
//查询数据库
connection.query('SELECT * FROM Friday',function(err,rows){

      // console.log(rows);
})
app.post("/quanbu",function(req,res){
  
   
    
})

app.listen(8080)