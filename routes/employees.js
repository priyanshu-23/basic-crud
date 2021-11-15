
const { getEmployeeById, addEmployee, updateEmployee, removeEmployee } = require('../controllers/employees')
import express from 'express'
const router = express.Router()
import { getAllEmployees } from '../controllers/employees'

router.get('/',getAllEmployees)

router.get('/:id',getEmployeeById)

router.post('/',addEmployee)

router.put('/:id' , updateEmployee)

router.delete('/:id',removeEmployee)

export const employees = router