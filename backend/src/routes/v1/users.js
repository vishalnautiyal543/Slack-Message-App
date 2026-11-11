import express from 'express'
import { signup } from '../../controllers/userController.js'
import { validate } from '../../validators/zodValidator.js'
import { userSignUpSchema } from '../../validators/userSchema.js'

const router =  express.Router()

router.post('/signup',validate(userSignUpSchema),signup)

export default router