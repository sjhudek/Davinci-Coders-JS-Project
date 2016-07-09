
import todoModel from 'pages/todoReact/todoModel';

var dispatcher = {
  init: function(){},
  clickComplete: function(id){
    todoModel.itemCompleted(id);
  },
  addTodo: function(title){
    todoModel.addItem(title);
  },
  removeTodo: function(id){
    todoModel.removeItem(id);
  },
  editTodoTitle: function(id, title){
    todoModel.editTitle(id, title);
  },
  startEditMode: function(id){
    todoModel.startEditing(id);
  }
};

module.exports = dispatcher;
