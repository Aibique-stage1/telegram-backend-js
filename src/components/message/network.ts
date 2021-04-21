import express, {  Request, Response }from 'express'

import { addMessage, readMessages, patchMessage, deleteMessage }  from './controller'
import { successResponse, errorResponse } from '../../network/response'

const messages = express.Router();

// 🕸️
messages.get('/', async (req:Request, res:Response) => {
    try{
        const { user: theUser } = req.query;
        const filter = theUser ? {user: theUser} : {};
        const allMessages = await readMessages(filter);
        
        res.header({"my-header": "This a custom header"})
        
        successResponse(req, res, allMessages, 201)
    }catch(error){
        console.error(error.message)
    }
})

// 🕸️
 messages.post('/', async (req:Request, res:Response) => {
     try{
        const {user, message} = req.body
        const fullMessage = await addMessage(user, message)

        successResponse(req, res, fullMessage, 201)
    }
    catch(error){
        errorResponse(req, res, error.message, 500)
    }
})

// 🕸️
 messages.patch('/:id', async (req: Request, res:Response) => {
     try{
         const { id } = req.params;
         const { message: text } = req.body;
         const newMessage = await patchMessage(id, text);

         successResponse(req, res, newMessage, 200)
     }catch(error){
         errorResponse(req, res, error.message, 500);
     }
    successResponse(req, res, 'You commit a PUT method, Congratulations! ')
})

// 🕸️
 messages.delete('/:id', async (req:Request, res:Response) => {
     try{
         const {id} = req.params;
         const deletedMessage = await deleteMessage(id);
         
         successResponse(req, res, `${deletedMessage} [DELETED] `, 200)
     }catch(error){
         errorResponse(req, res, error.message, 500)
     }
})


export default messages