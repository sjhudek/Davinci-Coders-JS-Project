import todoModel from './todoModel';

var dispatcher = {
  clickComplete: function(id){
    todoModel.itemCompleted(id);
  },
  addTodo: function(title){
    if (title !== '' 
      && typeof title === 'string'
      ) {
      todoModel.addItem(title);
    }
  },
  removeTodo: function(id){
    todoModel.removeItem(id);
  },
  editTodoTitle: function(id, title, event){
    if (typeof title === 'string'
      && title.length > 0
      ) {
      todoModel.editTitle(id, title);
    }
  },
  startEditMode: function(id){
    todoModel.startEditing(id);
  }
};

module.exports = dispatcher;
