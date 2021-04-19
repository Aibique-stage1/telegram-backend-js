import { Application } from "express";

// It manages de directions of the Petitions and re-directs to the right component
// import messages from '../components/message/network'
import messages from '../components/message/network'

export const messageRoute = (server: Application) => {
    server.use('/message', messages);
}

