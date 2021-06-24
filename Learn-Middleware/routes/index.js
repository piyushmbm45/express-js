const route = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey'); 
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

route.get('/api/products', apiKeyMiddleware, (req,res)=>{
    res.json([   // send array of object 
        {
            id : '123',
            name: 'Chrome'
        },
        {
            id : '124',
            name: 'Firefox'
        }
    ])
})




module.exports = route;
