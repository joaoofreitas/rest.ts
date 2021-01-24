import mongoose, { Schema } from 'mongoose'
import ITodo from '../interfaces/todo'


const TodoSchema: Schema = new Schema({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    body: {type: String, required: true}
},
{
    timestamps: true
})

export default mongoose.model<ITodo>('Todo', TodoSchema)