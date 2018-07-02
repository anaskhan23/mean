var MongoClient =require('mongodb').MongoClient;
var empDoc={_id:16,empName:"Vivek",department:"Cyber",basicPay:18000 }
MongoClient.connect('mongodb://127.0.0.1:27017/another',function(err,db){

if(err)
console.log(err)

    var resultSet =db.collection('array').insert(empDoc,function(err,result){
if(err) throw err;


else
console.log("Inserted")
});
db.close();
})