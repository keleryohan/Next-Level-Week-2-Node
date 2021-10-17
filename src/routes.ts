import express, { response } from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';
const routes = express.Router();

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index )

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

routes.post('/elclasse',(req,res)=>{
    let data = req.body;

    console.log(data);

    return res.send();
})

export default routes