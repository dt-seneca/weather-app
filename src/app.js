const express = require('express');
const path = require('path');

const app = express();

const pathToViews = path.resolve(__dirname, '../views');
const pathToPublic = path.resolve(__dirname, '../public');

app.set('view engine', 'ejs');
app.set('views', pathToViews);
app.use(express.static(pathToPublic));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, ()=>{
    console.log('Weather app running...');
})