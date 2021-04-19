import {Request, Response, NextFunction} from 'express'
import { FullMessage } from '../types'

export const successResponse = (req: Request, res: Response, message?: string | FullMessage[] | FullMessage, status?:number) => {

    res.status(status || 200).send({
        error:"",
        body: message
    })
}

export const errorResponse = (req: Request, res: Response, message?: string | FullMessage, status?:number) => {

    res.status(status || 500 ).send({
        error:message,
        body:""
    })
}
