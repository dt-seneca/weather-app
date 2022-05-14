const express = require('express');
const path = require('path');

const app = express();

const pathToViews = path.resolve(__dirname, '../views');

app.set('view engine', 'ejs');
app.set('views', pathToViews);

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, ()=>{
    console.log('Weather app running...');
})