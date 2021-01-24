import express from 'express'
import Todo from '../models/todo'

const router = express.Router()

//Getting
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//Get by ID
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.status(200).json(todo)
    } 
    catch (err){
        res.status(404).json(err)
    }
});


// Creating
router.post('/', async (req, res) => {
    const todo = new Todo({
            title: req.body.title,
            subtitle: req.body.subtitle,
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

// Updating by ID
router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)

        if (todo != null){
            todo.title = (req.body.title != null) ? req.body.title : todo.title
            todo.subtitle = (req.body.subtitle != null) ? req.body.subtitle : todo.subtitle
            todo.body = (req.body.body != null) ? req.body.body : todo.body

            await todo.save()
        }
        else {
            res.status(404).json({message: "Something is wrong with this request..."})
        }

        res.status(202).json(todo)
    } 
    catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Delete All
router.delete('/', async (req, res) => {
    try {
        const todo = await Todo.deleteMany();
        res.status(202).json(todo)
    }
    catch (err) {
        res.status(204).json({ message: err.message })
    }
})

// Deleting by ID
router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        todo?.delete()

        res.status(202).json(todo)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
});



export default router;