const router = require("express").Router()

const userRouter = require("./user.router")

router.use("./user.router.js", userRouter)
router.use(".")

module.exports = router