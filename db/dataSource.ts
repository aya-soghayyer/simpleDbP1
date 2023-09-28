import { DataSource } from "typeorm"
import { User } from "./entity/user.js"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "simpleDb",
    entities: [
        User
    ],
    synchronize: true,
    logging: true
})



const initialize = () => {
  AppDataSource.initialize().then(() => {
    console.log("Connected to DB!");
  }).catch(err => {
    console.error('Failed to connect to DB: ' + err);
  })
}

    export default {initialize,DataSource} ;