const express = require('express');
const path = require('path');
const app = express();
// learning about ejs template
// by which we dyanamically change the html content

// setting the view to ejs engine
app.set('view engine', 'ejs')
// by default it will look 'view' folder in the same directory
// you can set the folder name by this
// app.set('view engine',path.resole(__dirname)+'/folderName')


app.get('/', (req, res) => {
    res.render('index', {
        title : 'My Home Page With ejs'
    });

});

app.get('/about', (req, res) => {
    res.render('about',{
        title : 'My About Page With ejs'
    });
})

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/about.html')
})


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})