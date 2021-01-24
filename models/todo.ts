import { Schema , model } from 'mongoose'
import ITodo from '../interfaces/todo'


const TodoSchema: Schema = new Schema({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    body: {type: String, required: true}
},
{
    timestamps: true
})

export default model<ITodo>('Todo', TodoSchema)