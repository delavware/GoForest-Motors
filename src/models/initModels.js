import { Repair } from "./repair.model.js"
import { User } from "./user.model.js"

export const initModel = () => {
    User.hasMany(Repair)
    Repair.belongsTo(User)
}