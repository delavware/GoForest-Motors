import app from "./app.js"
import dotenv from 'dotenv'
import { sequelize } from "./database/database.js"
import { initModel } from "./models/initModels.js"
dotenv.config()

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`)
})


// 1. Authenticate db

sequelize
    .authenticate()
    .then(()=> console.log('Database authenticated 😃✨'))
    .catch(err => console.log('Unable to connect: ', err))

initModel()

// 2. Sync

sequelize
    .sync()
    .then(()=> console.log('Database synced 😁👍'))
    .catch(err => console.log('Unable to connect to database: ', err))




