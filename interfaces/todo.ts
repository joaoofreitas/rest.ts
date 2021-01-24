import { Mongoose } from "mongoose";
import { Document } from 'mongoose'

interface ITodo extends Document {
    title: string;
    subtitle: string;
    body: string;
}

export default ITodo;