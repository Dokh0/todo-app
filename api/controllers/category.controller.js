const Category = require("../models/category.models");

async function getAllCategory(req, res) {
  try {
    const category = await Category.findAll();
    console.log(category);
    if (category) {
      return res.status(200).json(category);
    } else {
      return res.status(404).send("No permissions allowed");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneCategory(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      return res.status(200).json(category);
    } else {
      return res.status(404).send("Category not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateCategory(req, res) {
  try {
    const [userExist, category] = await Category.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res.status(200).json({ message: "Category updated" });
    } else {
      return res.status(404).send("Category not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteCategory(req, res) {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (category) {
      return res.status(200).json("Category deleted");
    } else {
      return res.status(404).send("Category not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
}
