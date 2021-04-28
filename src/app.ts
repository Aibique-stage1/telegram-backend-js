import express, { Application } from 'express';
const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;
import http from 'http';
const server = http.createServer(app);
import { connect } from './socket';
connect(server);

// import { Server, Socket } from 'socket.io';
// const io = new Server(server);

import { ConnectDB } from './db';
import * as dotenv from 'dotenv';
dotenv.config();
if (!process.env.DB_URI) {
    process.exit(1);
}

// import routes from './network/routes'
import { messageRoute } from './network/routes';

//middleware
ConnectDB(process.env.DB_URI);
app.use(express.json());

//routes
messageRoute(app);

// features
app.use('/app', express.static('public'));
server.listen(PORT, () => {
    console.log(`Listening in port: http://localhost:${PORT}`);
});
