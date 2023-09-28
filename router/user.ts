import express from 'express'
import  DataSource  from 'typeorm';
import db from '../db/dataSource';
import  {User} from '../db/entity/user';




const router = express.Router();

router.post('/register', (req, res) => {
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    
    user.save().then(() => {
        res.send('User Created');
      }).catch(error => {
        res.status(500).send("Something went wrong: " + error);
      });
  });



export default router;