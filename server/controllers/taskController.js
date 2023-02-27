const Task = require('../models/Task');


const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find({}).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

const getTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

const getMatchingTask = async (req, res) => {
    const searchInput = req.params.searchInput.toLowerCase();

    try{
        const matchingTasks = await Task.find({ name: { $regex: searchInput, $options: 'i' } }).sort({ createdAt: -1 });
        res.status(200).json(matchingTasks);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

const createTask = async (req, res) => {
    const { name, status } = req.body;

    try{
        const task = await Task.create({ name, status });
        res.status(201).json(task);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json(task);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

const updateTask = async (req, res) => {
    const { name, status } = req.body;

    try{
        const taskUpdated = await Task.findByIdAndUpdate(req.params.id, { name, status });
        res.status(200).json(taskUpdated);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    getTasks,
    getTask,
    getMatchingTask,
    createTask,
    deleteTask,
    updateTask
};