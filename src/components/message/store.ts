import {Empty, FullMessage, TheUser} from '../../types'
import { Model } from './model'


//✅
const addMessage = (message: FullMessage) => {
    const theMessage = new Model(message);
    theMessage.save();    

}
//✅
const readMessages = async(theUser: Empty | TheUser) => {
    try{
        const allMessages = await Model.find(theUser);
        return allMessages;

    }catch(error){
        console.error(error)
    }
}
//✅
const patchMessage = async(id:number | string , message:string) => {
    const foundMessage = await Model.findOne({_id: id});
    foundMessage.message = message;
    const newMessage = await foundMessage.save();

    return newMessage;
}
//✅
const deleteMessage = async(id: number | string) => {
    const message = await Model.findOne({_id: id});
    const deletedMessage = message.message;
    await Model.deleteOne({_id: id})

    return deletedMessage;
}

export const store = {
    add: addMessage,
    readAll: readMessages,
    patchOne: patchMessage,
    deleteOne: deleteMessage,
}