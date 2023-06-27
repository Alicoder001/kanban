/** @format */

import { Router } from 'express';
import { crud } from '../controller/tasks.controller.js';
export const tasksRouter = Router();
tasksRouter.get('/', (req, res) => {
  crud.getAllData(req, res);
});
tasksRouter.get('/:id', (req, res) => {
  crud.getData(req, res);
});
tasksRouter.post('/', (req, res) => {
  crud.postData(req, res);
});
tasksRouter.patch('/:id', (req, res) => {
  crud.updateData(req, res);
});
