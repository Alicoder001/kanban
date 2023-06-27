/** @format */
import db from '../config/db.js';

import { Crud } from '../crud/crud.js';
class TasksCrud extends Crud {
  postData = async (req, res) => {
    try {
      const path = this.getPath(req, 1);

      const { name, description, column_id, subtasks } = req.body;

      const result = await db.query(
        `insert into tasks (name,description,column_id) values($1,$2,$3) returning id`,
        [name, description, column_id],
      );

      const id = result.rows ? result.rows[0].id : 0;
      if (id && subtasks) {
        await subtasks.forEach((name) => {
          db.query(`insert into subtasks (name, task_id) values ($1,$2)`, [name, id]);
        });
      }
      res.send(result.rows);
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
  updateData = async (req, res) => {
    try {
      const path = this.getPath(req, 1);
      const { name, description, column_id, subtasks } = req.body;
      const id = req.params.id;
      await db.query(`update tasks set name=$1, description=$2, column_id=$3 where id=$4`, [
        name,
        description,
        column_id,
        id,
      ]);
      if (subtasks && subtasks.length > 0) {
        await subtasks.forEach((item) => {
          if (item.id) {
            db.query(`update subtasks set name=$1 where id = $2 and task_id=$3`, [
              item.name,
              item.id,
              id,
            ]);
          } else db.query(`insert into subtasks (name, task_id) values ($1,$2)`, [item.name, id]);
        });
      } else {
        await db.query(`delete from subtasks`);
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
      const task_data = await db.query(
        `select tasks.id,tasks.name ,tasks.description , array_agg(row_to_json(subtasks)) subtasks 
         from tasks left join subtasks on tasks.id = subtasks.task_id where tasks.id =$1 
          group by tasks.id,tasks.name ,tasks.description`,
        [id],
      );

      res.status(200).send(task_data.rows[0]);
    } catch (err) {
      res.send([]);
    }
  };
}
export const crud = new TasksCrud();
