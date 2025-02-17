const express=require("express");
const router=express.Router();
const autohrizedRoles = require('../middleware/roleBaseAuthorization');
const complainC=require("../controller/complaintC");
const verifyToken = require("../middleware/authorization"); 
router.get("/",complainC.getComplain);//,verifyToken,autohrizedRoles("admin","lab_Incharge")
router.post("/post",complainC.postComplain);//verifyToken,autohrizedRoles("teacher"),
router.get("/post/:userId",complainC.getComplainByUserId);//verifyToken,autohrizedRoles("teacher"),
router.put("/update/:_id",complainC.update);//verifyToken,autohrizedRoles("lab_Incharge","technician"),
router.put("/put/:_id",verifyToken,autohrizedRoles("lab_Incharge","technician"),complainC.updateComplain);

module.exports=router;