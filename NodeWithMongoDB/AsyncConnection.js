var MongoClient =require('mongodb').MongoClient;
var findQuery={_id:1.0}
MongoClient.connect('mongodb://127.0.0.1:27017/Bank',function(err,db){

if(err)
console.log(err)

    db.collection('bank').find(findQuery,{_id:0,"customerDetails.customerName":1}).toArray(function(err,result){
if(err) throw err;
console.log(result);
});

db.close();
})