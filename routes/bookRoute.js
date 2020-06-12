const express = require('express');
const router = express.Router();
const bookController = require('../app/controllers/bookController');

router.get('/', bookController.getAll);
router.post('/', bookController.create);
router.get('/:id', bookController.getById);
router.put('/:id', bookController.updateById);
router.delete('/:id', bookController.deleteById);

module.exports = router;