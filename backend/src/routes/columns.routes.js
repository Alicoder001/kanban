/** @format */

import { Router } from 'express';
import { crud } from '../controller/columns.controller.js';
export const columnsRouter = Router();
columnsRouter.get('/', (req, res) => {
  crud.getAllData(req, res);
});
columnsRouter.post('/', (req, res) => {
  crud.postData(req, res);
});
columnsRouter.get('/:id', (req, res) => {
  crud.getData(req, res);
});
