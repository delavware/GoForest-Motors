import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const Repair = sequelize.define('repairs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['pending', 'completed', 'cancelled'],
        allowNull: false,
        defaultValue: 'pending',
    }
})