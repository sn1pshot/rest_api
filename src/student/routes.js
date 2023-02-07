const {Router} = require('express')
const controller = require('./controllers')
const router = Router()
router.get('/', controller.getstudents)
router.get('/:id',controller.getstudentbyid)
router.post('/',controller.createstudent)
router.delete('/:id',controller.deletestudent)
router.put('/:id',controller.updatestudent)
module.exports = router;