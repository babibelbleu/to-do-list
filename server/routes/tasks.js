const express = require('express');
const router = express.Router();

const {
    getTasks,
    getTask,
    getMatchingTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController');

const Task = require('../models/Task');


// GET all tasks
router.get('/', getTasks);


// GET one task
router.get('/:id', getTask);

// GET on task who match with the search input
router.get('/search/:searchInput', getMatchingTask);


// POST one task
router.post('/', createTask);


// DELETE one task
router.delete('/:id', deleteTask);


// UPDATE one task
router.patch('/:id', updateTask);


module.exports = router;