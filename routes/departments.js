const {getAllDepartments,getDepartmentById,updateDepartment,removeDepartment,addDepartment} = require('../controllers/departments')

import express from 'express'
const router = express.Router()


router.get('/',getAllDepartments)

router.get('/:id', getDepartmentById)

router.post('/', addDepartment)

router.put('/:id', updateDepartment)

router.delete('/:id', removeDepartment)

//export {router as departments};s

export const departments = router