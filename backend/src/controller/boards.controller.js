/** @format */
import db from '../config/db.js';

import { Crud } from '../crud/crud.js';
class BoardsCrud extends Crud {
  postData = async (req, res) => {
    try {
      const path = this.getPath(req, 1);
      const { name, columns } = req.body;
      const result = await db.query(`insert into ${path} (name) values($1) returning id`, [name]);
      const id = result.rows ? result.rows[0].id : 0;
      if (id && columns) {
        await columns.forEach((name) => {
          try {
            db.query(`insert into columns (name, board_id) values ($1,$2)`, [name, id]);
          } catch (err) {
            throw new Error(err);
          }
        });
      }
      res.status(200).send('created boards!');
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  };
  updateData = async (req, res) => {
    try {
      const path = this.getPath(req, 1);
      const { id, name, columns } = req.body;
      await db.query(`update boards set name=$1 where id=$2`, [name, id]);
      if (columns && columns.length > 0) {
        await columns.forEach((column) => {
          if (column.id) {
            db.query(`update columns set name=$1 where id = $2 and board_id=$3`, [
              column.name,
              column.id,
              id,
            ]);
          } else db.query(`insert into columns (name, board_id) values ($1,$2)`, [column.name, id]);
        });
      } else {
        await db.query(`delete from columns`);
      }
      res.send('updated');
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
  getData = async (req, res) => {
    const id = req.params.id;
    try {
      const path = this.getPath(req, 1);
      const board_data = await db.query(
        `select boards.id,boards.name, array_to_json(array_remove(array_agg(columns),null)) 
        columns from boards  left join columns on boards.id = 
        columns.board_id where boards.id =$1 group by boards.id order by boards.id`,
        [id],
      );

      res.status(200).send(board_data.rows[0]);
    } catch (err) {
      res.send([]);
    }
  };
}
export const crud = new BoardsCrud();
