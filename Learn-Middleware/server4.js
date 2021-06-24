const express = require('express');
const app = express();
const mainRouter = require('./routes/index'); 

app.set('view engine', 'ejs')
app.use(mainRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})