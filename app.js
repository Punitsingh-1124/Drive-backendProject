const express = require('express');
const userRouter = require("./routes/user.routes")
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('/', (req,res)=>{
//     res.render("index");
// });

app.use('/user', userRouter);

app.listen(3000,()=>{
    console.log('Server Is running on port 3000');
    
})