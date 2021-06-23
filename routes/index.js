const route = require('express').Router();
const path = require('path');


route.get('/', (req, res) => {
    res.render('index', {
        title : 'My Home Page With ejs'
    });

});

route.get('/about', (req, res) => {
    res.render('about',{
        title : 'My About Page With ejs'
    });
})

route.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/about.html')
})






module.exports = route;
