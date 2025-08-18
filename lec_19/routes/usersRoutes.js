
const express = require("express");
const router = express.Router()

const {postaddUser,getreadUser,getOneUser,deleteOneUser} = require("../controller/userController")

router.post("/", postaddUser);


router.get("/", getreadUser);

router.get("/:id", getOneUser);

module.exports = router