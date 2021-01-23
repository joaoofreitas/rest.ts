import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
    {
        title: 
        {
            type: String,
            required: true
        },
        subTitle: 
        {
            type: String,
            required: true
        },
        body: 
        {
            type: String,
            required: true
        },
        date: 
        {
            type: Date,
            required: true,
            default: Date.now()
        }
    }
)

export default mongoose.model('Todo', todoSchema)