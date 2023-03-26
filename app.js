import express from 'express';
import auth from "./routes/auth.js";
import dotenv from 'dotenv';
import session from 'express-session';


dotenv.config();
const app = express();
const port = 3000

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}))
app.get('/', (req, res) => {
    res.render('index',
        {
            title: 'Yalım Gürbüz',
            greeting: 'Hello World!'
        });
});
app.use(
    session({
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: true
    })
)
app.use('/auth', auth);

app.listen(port, () => {
    console.log(`Project app listening at http://localhost:${port}`)
});