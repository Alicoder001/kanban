/** @format */

import { Router } from 'express';
import { crud } from '../controller/boards.controller.js';
export const boardRouter = Router();
boardRouter.get('/', (req, res) => {
  crud.getAllData(req, res);
});
boardRouter.get('/:id', (req, res) => {
  crud.getData(req, res);
});
boardRouter.post('/', (req, res) => {
  crud.postData(req, res);
});
boardRouter.patch('/:id', (req, res) => {
  crud.updateData(req, res);
});
