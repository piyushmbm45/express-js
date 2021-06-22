const express = require('express');
const path = require('path'); 
const app = express();

// by using static middle ware we do not require get method
// it is convinient to put all image css and other files into one folder
app.use(express.static('public'))



const port = process.env.PORT || 6000;

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
})