var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import rawTemplate from 'templates/todoItem.html';



// Backbone ToDo App

var TodoModel;
var TodoControllerView;
var TodoView;

var todoModel;
var todoControllerView;


// ***** Model *****

TodoModel = Backbone.Model.extend({
  defaults: {
    todos: []
  },
  todoSchema: {
    id: 0,
    title: "",
    completed: false
  },
  fetch: function(){
    // gets the data
    var data = lscache.get('todos');
    data = this.applySchema(data);
    this.set('todos', data);
  },
  save: function(){
    // saves the data
    var data = this.get('todos');
    data = this.applySchema(data);
    lscache.set('todos', data);
  },
  applySchema: function(todos){
    var data = todos;
    var schema = this.todoSchema;
    data = (_.isArray(todos)) ? data : [];
    data = data.map(function(todo, index){
      todo.id = index;
      return _.defaults(todo, schema);
    });

    return data;
  }
});

// todoModel = blueprint   TodoModel = house
todoModel = new TodoModel(); // capitalize after "new"

// ***** View *****

TodoControllerView = Backbone.View.extend({
  el: 'body',
  model: todoModel,
  events: {
    'eventName .some-class': 'someFunction',
    'click .close': 'closeView'
  },
  initialize: function(){
  },
  render: function(){
    alert('backbone!');
  }
});

todoControllerView = new TodoControllerView(); // it calls ViewClass.initialize

module.exports = todoControllerView;
