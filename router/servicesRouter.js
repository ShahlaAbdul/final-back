import  {Router} from 'express';
import { createOneServices, deleteServicesById, getAllServices, getServicesById, updateServicesById } from '../controller/servicesController.js';

export const servicesRouter = Router();

servicesRouter.get('/', getAllServices);
servicesRouter.get('/:id', getServicesById);
servicesRouter.post('/', createOneServices);
servicesRouter.put('/:id', updateServicesById);
servicesRouter.delete('/:id', deleteServicesById);