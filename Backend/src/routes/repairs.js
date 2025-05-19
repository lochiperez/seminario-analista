const express = require('express');
const router = express.Router();
const {
  getRepairs,
  getRepairById,
  addRepair,
  updateRepair,
  deleteRepair
} = require('../controllers/repairsControllers');

router.get('/', getRepairs);
router.get('/:id', getRepairById);
router.post('/', addRepair);
router.put('/:id', updateRepair);
router.delete('/:id', deleteRepair);

module.exports = router;
