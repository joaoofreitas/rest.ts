import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import todo from './controllers/todo'

const dbURL = (process.env.DB_HOST != null) ? process.env.DB_HOST : ''
mongoose.connect(dbURL, { useUnifiedTopology: true , useNewUrlParser: true})
.catch((err) => console.error(err))

const app = express()
const db = mongoose.connection
const PORT: number = 3000

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())


app.use('/todo', todo)

app.listen(PORT, () => console.log('Server has just started...'))