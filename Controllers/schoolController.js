const schoolModel = require ('../models/schoolModel');

exports.createSchool = async (req,res) => {
    try {
        const {schoolName , address, principal, moto } = req.body
        const school = await schoolModel.create ({
            schoolName, 
            address, 
            principal, 
            moto 
        })
        res.status(201).json({
            message: 'School created successfully',
            data: school
        })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}