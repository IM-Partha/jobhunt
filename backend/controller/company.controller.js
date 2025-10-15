import { Company } from "../models/company.model.js";




export const registerCompany = async (req,res)=>{
try {
    const {companyName}=req.body 
    if(!companyName){
        return res.status(400).json({
            message:"Comapny name is required",
            success:false
        })
    }
    let comapny = await Company.findOne({name:companyName})
    if(comapny){
        return res.status(400).json({
            message:"You can't register same comapny",
            success:false
        })
    } 
    comapny = await Company.create({
        name:companyName,
        userId:req.id
    })

    return res.status(200).json({
        message:"Company registered successfully",
        comapny,
        success:true
    })
} catch (error) {
    console.log(error)
}
}

export const getCompany = async (req,res)=>{
    try {
        const userId = req.id
        const companies = await Company.find({userId})
        if(!companies){
            return res.status(400).json({
                message:"Companies not found",
                success:false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}


/// get company by id 


export const getCompanyById = async(req,res)=>{
    try {
        const companyId = req.params.id
        const comapnay = await Company.findById(companyId)
        if(!comapnay){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })
        }
        return res.status(200).json({
            comapnay,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateComapny =async (req,res)=>{
    try {
        const {name,description, website, location} = req.body
        const file = req.file 

        //clodenary 

        const updateData = {
            name,
            description, 
            website, 
            location
        }

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new:true})
        if(!company){
            return res.status(404).json({
                message:"Comapny Not Found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Company information uodated",
            success:true
        })
    } catch (error) {
         console.log(error)
    }
}   