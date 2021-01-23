import express from 'express'
import Todo from '../models/todo'

const router = express.Router()

//Getting
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Creating
router.post('/', async (req, res) => {
    const todo = new Todo({
            title: req.body.title,
            subTitle: req.body.subTitle,
            body: req.body.body
        });
    try {
        await todo.save()
        res.status(201).json(todo)
    }
    catch (err) {
        res.status(400).json({ message: err.message})
    }
});

//Get by ID
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.status(200).json(todo)
    } 
    catch (err){
        res.status(500).json(err)
    }
});

// Updating by ID
router.patch('/:id', async (req, res) => {

});

// Deleting by ID
router.delete('/:id', (req, res) => {
    
});

export default router;