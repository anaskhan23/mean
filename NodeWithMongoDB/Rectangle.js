var rectangle=require('./rectanglebl')
var MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/Areas',function(err,db){

if(err){
console.log(err)
}
    var resultSet=db.collection('rectangle').find().toArray(function(err,result){
        if(err) throw err;
        console.log(result);
for(var i=0;i<result.length;i++){

console.log("Area = "+rectangle.calculateArea(result[i].length,result[i].breadth))
    }
db.close()
});
})