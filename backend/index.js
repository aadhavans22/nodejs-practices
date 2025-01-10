const express = require("express");
const cors= require("express");

const app=express();
const options={origin:(origin,callback)=>
   {
    callback(null,true)
   }
}

app.use(cors(options));
app.use(express.json());

let studentData=[{
    name:"div",
    age:19,
    rollNumber:233022
}];

app.post('/',(req,res)=>{
    studentData.push(req.body);
    console.log(req.body);

    res.send("Done")

})

const data = ["hello",123,{"key":"value"}];

app.get('/',(req,res)=>{
    res.send(data)
})



app.get('/student',(req,res)=>{
    res.send(studentData)
})

app.listen(3333,()=>{
    console.log("started")
})