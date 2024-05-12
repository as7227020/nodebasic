const express = require('express')

const app = express();
const port =8080;// process.env.PORT || 
app.use(express.json());

app.get('/',(req,res)=>{
    res.end("server on run Port : " + port);
})


app.listen(port,()=>{console.log("服器已啟動! Port : "+port)});