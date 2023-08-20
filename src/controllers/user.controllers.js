import { User } from "../models/user.model.js"

// GET  all users
export const getUsers = async (req, res, next) => {
    const user = await User.findAll({
        where: {
            status: 'available'
        }
    })

    if(!user.length){
        return res.status(400).json({
            status: 'error',
            message: 'No user(s) found 😒🤷‍♂️'
        })
    }

    return res.status(200).json({
        status: 'success',
        message: 'User(s) found 😍❤',
        results: user.length,
        user
    })
    
}

// GET single user
export const getUser = async (req, res, next) => {
    try {
        const {id} = req.params
        const user = await User.findOne({
            where: {
                id,
                status: 'available'
            }
        })
    
        if(!user){
            return res.status(404).json({
                status: 'error',
                message: `User with id ${id} not found 🤦‍♂️`,
            })
        }
    
        return res.status(200).json({
            status: 'success',
            message: `User with id ${id} found 😁`,
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'fail',
            message: 'something went wrong'
        })
    }
    
}


// POST create user
export const createUser = async (req, res, next) => {
   try {
    const {name, email, password, role} = req.body
    const user = await User.create({
         name,
         email,
         password,
         role
    })
 
    return res.status(201).json({
     status: 'sucess',
     message: 'The user has been created 😎👌',
     User: {
         id: user.id,
         name: user.name,
         email: user.email,
         role: user.role,
     }
    })
   } catch (error) {
    console.log(error)
    return res.status(500).json({
        status: 'fail',
        message: 'something went wrong'
    })
   }
}

// PATCH update user
export const updateUser = async (req, res, next) => {
    try {
        const {name, email} = req.body
        const {id} = req.params
        const user = await User.findOne({
            where: {
                id,
                status: 'available'
            }
        })
    
        if (!user){
            return res.status(404).json({
                status: 'error',
                message: `User with id ${id} not found 🤦‍♂️`,
            })
        }
    
        await user.update({name, email})
        
        return res.status(200).json({
            status: 'success',
            message: `User with id ${id} has been updated 😁`,
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
        status: 'fail',
        message: 'something went wrong'
    })
    }
}


// DELETE user
export const deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params
        const user = await User.findOne({
            where: {
                id,
                status: 'available'
            }
        })
    
        if (!user){
            return res.status(404).json({
                status: 'error',
                message: `User with id ${id} not found 🤦‍♂️`,
            })
        }
    
        await user.update({ status: 'cancelled'})
    
        return res.status(200).json({
            status: 'success',
            message: `User with id ${id} has been deleted 🤔✔`,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
        status: 'fail',
        message: 'something went wrong'
    })
    }

}