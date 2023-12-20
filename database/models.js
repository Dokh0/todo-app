const User = require("../api/models/user.models")
const Task = require("../api/models/task.models")
const Category = require("../api/models/category.models")
const Subtask = require("../api/models/subtask.models")

function setRelations() {
    try {
      
      User.hasOne(Task)
      Task.belongsTo(User)

      Task.hasMany(Subtask)
      Subtask.belongsTo(Task)

      Task.hasMany(Category)
      Category.belongsTo(Task)
  
    } catch (error) {
      console.log(error);
    }
  }
  
  module.exports = { setRelations }