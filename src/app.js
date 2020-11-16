import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import routes from './routes/index.js';
import config from './configs/server';
import database from './helpers/mysql';
import ioSocket from 'socket.io';
import http from 'http';

dotenv.config()
class App {
    app;

    constructor() {
        //pemanggilan express 
        this.app = express();
        this.server = http.Server(this.app)
        this.io = ioSocket(this.server)
        this.static();
        this.plugins();
        this.routes();
        this.error();
        this.socket();
    }

    //membuat port
    init() {
        const port = process.env.PORT;
        this.app.setMaxListeners(0);

        this.app.listen(port, () => {
            this.connectdb();
            console.log(`connected to the server on port ${port}`)
        })
    }

    //folder static untuk image/file
    static() {
        this.app.use(`/${config.rootProjectPath}`, express.static("src/assets"));
    }

    plugins() {
        this.app.use(cors())
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json())
        this.app.use(morgan('dev'))
    }

    routes() {
        this.app.use(`/${config.rootProjectPath}/api/v1`, routes);
    }

    //error handling jika url tidak ditemukan
    error() {
        this.app.use((req, res, next) => {
            const error = new Error("Not Found");
            error.status = 404;
            next(error);
        });

        this.app.use((error, req, res, next) => {
            res.status(error.status || 500);
            res.json({
                error: {
                    status: error.status,
                    message: error.message
                }
            })
        })
    }

    connectdb() {
        database.connect((error) => {
            if (error) throw error;
            console.log("DB Connected!!!")
        });
    }

    socket() {
        this.io.on('connection', (socket) => {

            if (error) throw error;
            console.log('a user connection')
            socket.on('send message', msg => {
                this.io.emit('message', msg);
            });
            socket.on('disconnect', () => {
                console.log('a user disconnect')
            })
        })

        this.app.use((res, req, next) => {
            req.io = this.io;
            next()
        }
        )
    }
}

const port = 8080;
const app = new App(port);
app.init();