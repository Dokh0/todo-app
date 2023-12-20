const router = require("express").Router()
const { getAllUser, getOneUser, updateUser, deleteUser } = require("../controllers/user.controller")

router.get("/", getAllUser)
router.get("/:id", getOneUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router