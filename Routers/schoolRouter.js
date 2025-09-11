const { 
    createSchool, 
    getAllSchool, 
    getOneSchool,
    updateSchool,
    deleteSchool
} = require('../Controllers/schoolController');

const router = require('express').Router();

router.post('/school', createSchool);
router.get('/school', getAllSchool);
router.get('/school/:id', getOneSchool);
router.put('/school', updateSchool);
router.delete('/school', deleteSchool);

module.exports = router