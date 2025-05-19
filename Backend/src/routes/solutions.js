const express = require('express');
const router = express.Router();
const {
  getSolutions,
  getSolutionById,
  addSolution,
  updateSolution,
  deleteSolution
} = require('../controllers/solutionsControllers');

router.get('/', getSolutions);
router.get('/:id', getSolutionById);
router.post('/', addSolution);
router.put('/:id', updateSolution);
router.delete('/:id', deleteSolution);

module.exports = router;
