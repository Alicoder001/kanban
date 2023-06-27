/** @format */
import db from '../config/db.js';
import url from 'url';
export class Crud {
  constructor() {}
  getUrl(req) {
    const Url = req.protocol + '://' + req.get('host') + req.originalUrl;
    return url.parse(Url, true);
  }
  getPath(req, num = 1) {
    const { pathname } = this.getUrl(req);
    const path = pathname.split('/');
    return path[num];
  }
  getAllData = async (req, res) => {
    try {
      const path = this.getPath(req, 1);
      const result = await db.query(`select * from ${path}`);
      res.send(result.rows);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
  // getData = async (req,res)=>{
    
  //   try {
  //     const path = this.getPath(req, 1);
  //     const result = await db.query(`select * from ${path}`);
  //     res.send(result.rows);
  //   } catch (err) {
  //     res.status(400).send({ message: err.message });
  //   }
  // }
  
}
