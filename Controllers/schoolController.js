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

exports.getOneSchool = async (req,res)=>{
    try {
        const {id} = req.params
        const school = await schoolModel.findById(id);

        if (!school) {
           return res.status(404).json({
            message:"school does not exist"
           }) 
        }
        res.status(200).json({
            message:"successful",
            data:school
        })
    } catch (error) {
     res.status(500).json({
        message:error.message
     })   
    }
}

exports.getAllSchool = async (req,res)=>{
    try {
        const school = await schoolModel.find()
        res.status(200).json({
            message:"get all school",
            data:school
        })
    } catch (error) {
       res.status(500).json({
        message:error.message
       }) 
    }
};

exports.updateSchool = async (req, res) => {
    try{
        const {id} = req.params;
        const {schoolName,address,principal,moto} = req.body;

        const school = await schoolModel.findById(id);
        if(!school){
            return res.status(404).json({
                message: "School not found!"
            });
        }

        if (schoolName) school.schoolName = schoolName;
        if (address) school.address = address;
        if (principal) school.principal = principal;
        if (moto) school.moto = moto;
        
        const updatedSchool = await schoolModel.save()

        res.status(200).json({
            message: "School info updated successfully",
            data: updatedSchool
        });

    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
};

exports.deleteSchool = async (req, res) => {
    try{
        const {id} = req.params;

        const school = await schoolModel.findById(id);
        if (!school){
            res.status(404).json({
                message: "School not found!"
            });
        }

        await school.deleteOne();

        res.status(200).json({
            message: "School info deleted successfully"
        });

    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}