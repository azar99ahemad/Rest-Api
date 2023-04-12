const allemployeesdata= (req,res)=>{
    res.json({message:"Get all the employee"});
};

const employeedata =(req,res)=>{
    res.json({message:`Get employee with id ${req.params.id}`});
};

const createemployeedata=(req,res)=>{
    console.log("The data", req.body);
    res.json({message:"Create the employee"});
};

const updateemployeedata=(req,res)=>{
    res.json({message:`Update the employee with id ${req.params.id}`});
};
 
const deleteemployeedata=(req,res)=>{
    res.json({message:`Delete the employee with id ${req.params.id}`});
};

module.exports={allemployeesdata,employeedata, createemployeedata, updateemployeedata, deleteemployeedata};