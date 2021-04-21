// It does match the routes and connects the controllers 
import express, { Application, Request, Response, NextFunction }from 'express'
import { addMessage, readMessages, patchMessage }  from './controller'
import { successResponse, errorResponse } from '../../network/response'


const messages = express.Router();

// routes
messages.get('/get', async (req:Request, res:Response) => {
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

 messages.post('/post', async (req:Request, res:Response) => {
    const {user, message} = req.body
    try{
        const fullMessage = await addMessage(user, message)
        successResponse(req, res, fullMessage, 201)
    }
    catch(error){
        errorResponse(req, res, error.message, 500)
    }
})

 messages.patch('/patch/:id', async (req: Request, res:Response) => {
     const { id } = req.params;
     const { message: text } = req.body;
      
     try{
         const newMessage = await patchMessage(id, text);

         successResponse(req, res, newMessage, 200)
     }catch(error){
         errorResponse(req, res, error.message, 500);
     }
    successResponse(req, res, 'You commit a PUT method, Congratulations! ')
})

 messages.delete('/delete', (req:Request, res:Response) => {
    successResponse(req, res, 'You committed a DELETE method, very sad!')
})


export default messages