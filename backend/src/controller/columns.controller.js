/** @format */
import db from '../config/db.js';

import { Crud } from '../crud/crud.js';
class ColumnsCrud extends Crud {
  postData = async (req, res) => {
    try {
      const path = this.getPath(req, 1);
      const { name, columns } = req.body;
      const result = await db.query(`insert into ${path} (name) values($1) returning id`, [name]);
      const id = result.rows ? result.rows[0].id : 0;
      if (id && columns) {
        await columns.forEach((name) => {
          db.query(`insert into columns (name, board_id) values ($1,$2)`, [name, id]);
        });
      }
      res.send(result.rows);
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
  getData = async (req, res) => {
    const id = req.params.id;
    try {
      const path = this.getPath(req, 1);
      const column_data = await db.query(
        `select columns.id,columns.name,columns.board_id, array_to_json(array_remove(array_agg(tasks),null))  tasks from columns left join tasks on columns.id = tasks.column_id where columns.id=$1 group by columns.id order by columns.id`,
        [id],
      );

      res.status(200).send(column_data.rows[0]);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
  getBoardData = async (req, res) => {
    try {
      const column_data = await db.query(`sselect * from columns where board_id =$1`, [board_id]);
      res.status(200).send(column_data.rows);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
}
export const crud = new ColumnsCrud();
