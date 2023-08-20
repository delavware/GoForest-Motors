import { Router } from "express"

// Controllers
import {getRepairs,
        getRepair,
        createRepair,
        updateRepair,
        deleteRepair} from '../controllers/repair.controllers.js'

const router = Router()

router
    .route('/')
    .get(getRepairs)
    .post(createRepair)

router
    .route('/:id')
    .get(getRepair)
    .patch(updateRepair)
    .delete(deleteRepair)

export default router