import express, { Request, Response } from 'express'
import { postUser, getUsers } from './controller'
import { successResponse, errorResponse } from '../../network/response'

const users = express.Router();

users.post('/', async (req, res) => {
    try{
        const {name, age} = req.body;
        const user = {name, age};

        const postedUser = await postUser(user);

        successResponse(req, res, postedUser, 201);

    }catch(error){
        errorResponse(req, res, error.message, 500)
    }
});

users.get('/', async(req, res) => {
    try{
        const { name: user } = req.query;
        const filter = user ?{ name: user} :{};
        const theUsers = await getUsers(filter);

        successResponse(req, res, theUsers, 200);
    }catch(error){
        errorResponse(req, res, error.message, 500)
    }
})

export default users;
