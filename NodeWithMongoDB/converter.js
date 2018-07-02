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
            <body>
            <h1>Temperature_Conversion</h1>
            <form action="/" method="POST">
            <label>Farhenite</label>
            <input type="text" id="far" name="far" required/>
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
    res.end("Farhenite= "+far.toString()+"\nCelcius= "+cel.toString());
});
}}).listen(1000);
console.log("form server listening on port 1000");