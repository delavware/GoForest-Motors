import { Repair } from "../models/repair.model.js"
import { User } from "../models/user.model.js"

// GET  all repairs
export const getRepairs = async (req, res, next) => {
    try {
        const repair = await Repair.findAll({
            where: {
                status: 'pending'
            }
        })
    
        if(!repair.length){
            return res.status(400).json({
                status: 'error',
                message: 'No repair service found 😫'
            })
        }
    
        return res.status(200).json({
            status: 'sucess',
            message: 'Repair service(s) found 😍',
            result: repair.length,
            repair,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'something went wrong'
        })
    }

}

// GET single repair
export const getRepair = async (req, res, next) => {
    try {
        const {id} = req.params
        const repair = await Repair.findOne({
            where: {
                id,
                status: 'pending'
            }
        })
        
        if(!repair){
            return res.status(404).json({
                status: 'error',
                message: `Repair service with id ${id} not found`
            })
        }
    
        return res.status(200).json({
            status: 'sucess',
            message: `Repair service with id ${id} found 😍`,
            repair,
        })
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'something went wrong'
        })
    }
}


// POST create repair
export const createRepair = async (req, res, next) => {
    try {
        const {date, userId} = req.body
        const user = await User.findOne({
            where: {
                id: userId,
                status: 'available'
            }
        })

        if(!user){
            return res.status(400).json({
                status: 'fail',
                message: 'User is not available for repair service 😪😫'
            })
        }
        
        const repair = await Repair.create({
            date,
            userId
        })
    
        return res.status(201).json({
            status: 'sucess',
            message: 'Repair service has been created 🥳',
            repair
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'something went wrong'
        })
    }
}

// PATCH update repair
export const updateRepair = async (req, res, next) => {
    try {
        const {id} = req.params
        const {status} = req.body
    
        const repair = await Repair.findOne({
            where: {
                id,
                status: 'pending'
            }
        })
    
        if(!repair){
            return res.status(404).json({
                status: 'error',
                message: `Repair service with id ${id} not available to update 😫😑`
            })
        }
    
        await repair.update({status: 'completed'})
    
        return res.status(200).json({
            status: 'sucess',
            message: `Repair service with id ${id} has been updated to status 'completed' 🥳`,
            repair
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'something went wrong'
        })
    }
}


// DELETE repair
export const deleteRepair = async (req, res, next) => {
    try {
        const {id} = req.params
        const repair = await Repair.findOne({
            where: {
                id,
                status: 'pending'
            }
        })
    
        if(!repair || repair.status !== 'pending'){
            return res.status(404).json({
                status: 'error',
                message: `Repair service with id ${id} not found`
            })
        }
    
        await repair.update({status: 'cancelled'})
    
        return res.status(200).json({
            status: 'sucess',
            message: `Repair service with id ${id} has been deleted 🙄🥱`,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'something went wrong'
        })
    }

}