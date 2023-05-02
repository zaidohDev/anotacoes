const routes = require('express').Router();
const TaskController = require('../controller/TaskController')

routes.get('/', TaskController.getAllTask);
routes.get('/getById/:id/:method', TaskController.getByIdTask);
routes.get('/deleteOne/:id', TaskController.deleteOneTask);
routes.post('/create', TaskController.createTask);
routes.post('/updateOne/:id', TaskController.updateOneTask);

module.exports = routes;