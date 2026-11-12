const express = require("express");
const app = express();
const upload=require('./file-upload');
// port for our project to run
const PORT = 8080;

// test the app
app.get("/", (req, res) => {
res.send("Hello from Express!");
});


//Upload functionality
app.post("/upload",upload.single("file"),(req,res)=>{
// check whether req.file contians the file
// if not multer is failed to parse so notify the client

if(!req.file){
    res.status(413).send("File not uploaded!,Please attach jpeg file under 5MB");
    return;
}
res.status(201).send("Files uploaded successfully");
});


app.listen(8080, () => {
console.log(`server is started and 
			listening at port: ${PORT}`);
});