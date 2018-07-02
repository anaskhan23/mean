var MongoClient =require('mongodb').MongoClient;
var findQuery={_id:1.0}
MongoClient.connect('mongodb://127.0.0.1:27017/Bank',function(err,db){

if(err)
console.log(err)
else{
    var resultSet=db.collection('bank').find(findQuery);

    resultSet.each(function(err,doc){
console.log(doc);
    })
}
db.close()
})