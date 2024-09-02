import express from 'express'
import { addPaymentGateway } from '../controller/paymentController.js'
import {getProductById, getProducts} from '../controller/productsController.js'
import { userLogin, userSignUp } from '../controller/userController.js'

const router = express.Router()

router.post('/signup', userSignUp)
router.post('/login', userLogin)
router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.post('/payment', addPaymentGateway)

export default router