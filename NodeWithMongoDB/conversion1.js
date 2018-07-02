const http=require("http");
const qs=require("querystring");
var far;
http.createServer(function(req,res)
{
if(req.method=="GET")
{
    res.end(
       `<!DOCTYPE html>
        <html>
        <head>
        <title>Temperature_Conversion</title>
        </head>
        <body>
 
        <form action="/" method="POST">
        <label>Farhenite</label>
        <input type="text" id="far" name="far"
        placeholder="Fahrenheit" required/>

        <input type="text" id="celcius" name="celcius" required readonly/>
         <button>Convert</button>
        </form></body></html>`
         );
}
else if(req.method=="POST")
{
    var body="";
    req.on("data",function(pop)
{
    body+=pop;
    console.log("data");
});

req.on("end",function()
{
    var obj=qs.parse(body);
    console.log(obj.far);
    far=parseFloat(obj.far);
    cel=(5/9)*(far-32.0);

    res.end(`<!DOCTYPE html>
    <html>
    <head>
    <title>Temperature_Conversion</title>
    </head>
    <body>

    <form action="/" method="POST">
    <label>Farhenite</label>
    <input type="text" id="far" name="far"
    placeholder=${far} required/>

    <input type="text" id="celcius" name="celcius"
    value=${cel} required readonly/>
     <button>Convert</button>
    </form></body></html>`)
})
}
}).listen(3000);

console.log("form server listening on port 1000");