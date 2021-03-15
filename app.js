const express=require ('express');
const path= require('path');
const app=express();

const cubeRouter=require('./routes/cube');
const resultRouter=require('./routes/result');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',cubeRouter);
app.use('/result',resultRouter);

app.listen(8080);
