import express from 'express'
import 'reflect-metadata'
import  DataSource  from 'typeorm';
import userRouter from './router/user'
import db from './db/dataSource'




const app = express();
const PORT = 3000; 

// app.use(express);
app.use(express.json());
app.use('/users', userRouter)   

// app.get('/', (req, res) => {
//     res.send('Server UP!');
//     console.log('success')
//   });

// app.post('/user', (req, res)=>{
//     res.send('create user');
// })



app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
    db.initialize();
  });

  export default app ; 