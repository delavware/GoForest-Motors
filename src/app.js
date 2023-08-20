import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user.routes.js'
import repairRoutes from './routes/repair.routes.js'

const app = express()

app.use(express.json())
app.use(cors())

// Routes for users
app.use('/api/v1/users', userRoutes)

// Routes for repairs
app.use('/api/v1/repairs', repairRoutes)

export default app