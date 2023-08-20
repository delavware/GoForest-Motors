import { Router } from "express"

// Controllers
import {getUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser} from '../controllers/user.controllers.js'

const router = Router()

router
    .route('/')
    .get(getUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

export default router