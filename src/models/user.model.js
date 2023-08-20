import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM,
        values: ['client', 'employee'],
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['available', 'cancelled'],
        defaultValue: 'available',
    }
})