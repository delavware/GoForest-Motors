import { Sequelize } from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize ({
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})