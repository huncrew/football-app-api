const express = require('express');
const router = express.Router();
const { getUsersTeam, createTeam } = require('../controllers/teams');
const authMiddleWare = require('../middleware/auth');

router.post('/team', [authMiddleWare, createTeam])
router.get('/team', [authMiddleWare, getUsersTeam]);

// router.get('/', getPrinciples);
// router.get('/area', getSpecificAreaPrinciples);
// router.post('/', [authenticationMiddleware, createPrinciple]);
// router.patch('/:id', updatePrinciple);
// router.delete('/:id', deletePrinciple);

// router.get('/hardwork', [authMiddleWare, hardWorkPrinciple]);
// router.get('/userprinciples', [authMiddleWare, getUsersPrinciples]);

module.exports = router;