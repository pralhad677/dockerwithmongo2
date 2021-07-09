const express = require('express')
const router = express.Router();
const controller = require('../controller/user')
const controller1 = require('../controller/user1')


console.log('router')
// router.post('/',controller.post)
router.route('/').get(controller.get).post(controller.post).delete(controller.delete).patch(controller.update)
router.route('/p1').post(controller1.post1)
// router.delete('/',controller.delete)

// router.route('/').post( controller.post).get(controller.findAll)
// router.route('/:id').delete(controller.delete).get(controller.findOne);
 
   
module.exports = router  