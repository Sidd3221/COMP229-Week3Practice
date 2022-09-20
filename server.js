//third party modules
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// import routes
import indexRouter from './app/routes/index.route.server.js';

// instantiate express app
const app = express();

// set up middlewares

// Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
    secret: 'MySecret',
    saveUninitialized: false,
    resave: false
}));

// use routes

app.use('/',indexRouter);


app.listen(3000);