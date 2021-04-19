// It does match the routes and connects the controllers 
import express, { Application, Request, Response, NextFunction }from 'express'
import { addMessage }  from './controller'
import { successResponse, errorResponse } from '../../network/response'
import { store } from './store'


const messages = express.Router();

// routes
messages.get('/get', (req:Request, res:Response) => {
    return new Promise((resolve, reject) => {
        if(!store.readAll){
            return reject(new Error('There is no messages'))
        }

        res.header({"my-header": "This is a custom header"})

        successResponse(req, res, store.readAll(), 201)
    })
})

 messages.post('/post', async (req:Request, res:Response) => {
    const {user, message} = req.body
    try{
        const fullMessage = await addMessage(user, message)
        store.add(fullMessage)
        successResponse(req, res, fullMessage, 201)
    }
    catch(error){
        errorResponse(req, res, error.message, 500)
    }
})

 messages.put('/put', (req: Request, res:Response) => {
    successResponse(req, res, 'You commit a PUT method, Congratulations! ')
})

 messages.delete('/delete', (req:Request, res:Response) => {
    successResponse(req, res, 'You committed a DELETE method, very sad!')
})


export default messages