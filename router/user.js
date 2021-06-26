const express = require('express')
const router = express.Router();
const controller = require('../controller/user')


console.log('router')
// router.post('/',controller.post)
router.route('/').get(controller.get).post(controller.post).delete(controller.delete).patch(controller.update)
// router.delete('/',controller.delete)

// router.route('/').post( controller.post).get(controller.findAll)
// router.route('/:id').delete(controller.delete).get(controller.findOne);
 
   
module.exports = router  