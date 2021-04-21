import express, { Request, Response } from 'express';
import { getMessages} from './controller';
import { successResponse, errorResponse } from '../../network/response';

const chat = express.Router();

export default chat;