const express= require("express");
const { allemployeesdata, 
    employeedata, 
    createemployeedata,
    updateemployeedata,
    deleteemployeedata
    } = require("../Controller/employeeControler");

const router= express.Router();

router.route("/").get(allemployeesdata);

router.route("/:id").get(employeedata);

router.route("/").post(createemployeedata);

router.route("/:id").put(updateemployeedata);

router.route("/:id").delete(deleteemployeedata);




module.exports= router;