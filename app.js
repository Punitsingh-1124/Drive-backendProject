const express = require('express');
const userRouter = require("./routes/user.routes")
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db')
connectToDB();

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRouter);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
