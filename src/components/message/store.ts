import {FullMessage} from '../../types'
import db from 'mongoose'
import { Model } from './model'
import * as dotenv from 'dotenv'

dotenv.config();

if(!process.env.DB_URI){
    process.exit(1)
}

db.Promise = global.Promise;
db.connect(process.env.DB_URI, { useNewUrlParser: true , useUnifiedTopology: true });

// It works ! ✅
const addMessage = (message: FullMessage) => {
    const theMessage = new Model(message);
    theMessage.save();    

}

// It doesn't work ❌
const readMessages = async() => {
    const allMessages = await Model.find();
    return allMessages;
}

export const store = {
    add: addMessage,
    readAll: readMessages,
    //readOne
    //deleteOne
}