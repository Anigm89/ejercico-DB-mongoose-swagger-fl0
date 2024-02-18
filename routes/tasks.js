const express = require("express");
const router = express.Router();
const Task = require('../models/Task.js');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post('/create', async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).send(task);
    }
    catch(error){
        console.error(error);
        res.status(500).send({mensaje:'error al crear una nueva tarea'})
    }
});

router.get('/', async (req,res) => {
    try{
        const tasks = await Task.find();
        res.status(201).send(tasks)
    }
    catch(error){
        console.error(error);
        res.status(500).send({ mensaje: 'Error al obtener las tareas' });
    }
   
});

router.get('/id/:_id', async (req, res) => {
    try{
        const id = req.params['_id'];
        const tasksId = await Task.findById(id);
        if (!tasksId) {
            return res.status(404).json({ mensaje: 'Tarea no encontrada' });
        }
        res.send(tasksId)
    }
    catch(error){
        console.error(error);
        res.status(500).send({ mensaje: 'Error al obtener las tareas por id' });
    }
});

router.put('/markAsCompleted/:_id', async (req, res) => {
    try{
        const id = req.params['_id'];
        const taskId = await Task.findByIdAndUpdate(id, {completed: req.body.completed}, {new: true});
        if(!taskId){
            return res.status(404).send({mensaje:'No se ha encontrado la tarea'})
        }
        res.status(201).send(taskId)
    }
    catch(error){
        console.error(error);
        res.status(500).send({ mensaje: 'Error al marcar las tareas' });
    }
});

router.put('/id/:_id', async (req, res) => {
    try{
        const id = req.params['_id'];
        const taskId = await Task.findByIdAndUpdate(id, {title: req.body.title}, {new: true,  omitUndefined: true});
        if(!taskId){
            return res.status(404).send({mensaje:'Tarea no encontrada'});
        }
        res.send(taskId);
    }
    catch(error){
        console.error(error);
        res.status(500).send({ mensaje: 'Error al actualizar el nombre de la tarea' });
    }
});

router.delete('/id/:_id', async (req, res) =>{
    try{
        const id = req.params['_id'];
        const deleteTask = await Task.findByIdAndDelete(id);

        if(!deleteTask){
            return res.status(404).send({mensaje: 'Tarea no encontrada'})
        }
        res.send({mensaje:'Tarea eliminada'})
    }
    catch(error){
        console.error(error);
        res.status(500).send({ mensaje: 'Error al borrar la tarea' });
    }
});

module.exports = router;
