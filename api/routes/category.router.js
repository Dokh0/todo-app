const router = require("express")
const { getAllCategory, getOneCategory, updateCategory, deleteCategory } = require("../controllers/category.controller")

router.get("/", getAllCategory)
router.get("/:id", getOneCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)

module.exports = router