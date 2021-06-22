const express = require('express');
const path = require('path'); 
const app = express();

// app.use(express.static('public')); for express middleware


// app.get('/',(req,res)=>{
//     // res.send('Hello Express World');
//     // returning html-inline
//     // res.send('<h1>Its Learning Time</h1>')
//     //returning html file
//     res.sendFile(path.resolve(__dirname)+'/index.html')
// })
// // creating new route
// app.get('/about',(req,res)=>{
//     res.sendFile(path.resolve(__dirname)+'/about.html')
// })


const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
})