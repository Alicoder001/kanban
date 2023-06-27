/** @format */
import db from '../config/db.js';
import { Crud } from '../crud/crud.js';
class SubtasksCrud extends Crud {
  updateData = async (req, res) => {
    try {
      const { name, completed } = req.body;
      const id = req.params.id;      
      await db.query(`update subtasks set name=$1, completed=$2 where id=$3`, [
        name,
        completed,
        id,
      ]);
      res.send('updated');
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
}
export const crud = new SubtasksCrud();
