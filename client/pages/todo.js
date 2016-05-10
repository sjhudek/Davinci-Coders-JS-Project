var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Handlebars from 'handlebars';
import lscache from 'lscache';
// var $ = require('jquery'); ES5


// Data Model this is a database!!
var savedData = lscache.get('todos');
var todos;
if (savedData === null) {
  todos = [];
} else {
  todos = savedData;
}

// Creating the application
var template;
var app = {
  init: function() {
    app.compileTemplates();
    app.render();
  },
  render: function() {
    // render the todos
    /*
    var iterator = function(todo){
      return template(todo;)
    }, */
    
    // go through the array return the template into html
    lscache.set('todos', todos);
    var todohtml = _.map(todos, function(todo){ 
      return template(todo);
    });
    /*
    var todoHtml = todos.map(iterator;)
    */
    app.unbindEvents();
    $('ul.list-group').html(todohtml.join('')); // fill the DOM
    app.bindEvents();
  }, 
  compileTemplates: function(){
    template = $('[type="text/x-template"]');
    template = Handlebars.compile(template.first().html()); // grabbing the first content in the HTML template
  },
  unbindEvents(){ // removes handlers
    $('.list-group-item').off();
    $('.add-todo-container button').off();
    $('.input[type="checkbox"]').off();
    $('.list-group-item button').off();
  },
  bindEvents: function(){
    app.bindHoverEvents();
    app.bindCheckboxEvents();
    app.bindAddTodoEvents();
    app.bindRemoveTodoEvents();
  },
  bindHoverEvents: function(){
    var $items = $('.list-group-item'); // assign to $items so we don't call twice
    $items.on('mouseover', function(){ // event handler
      $(this).addClass('list-group-item-success');
    });
    $items.on('mouseout', function(){ // event handler
      $(this).removeClass('list-group-item-success');
    });
  },
  bindCheckboxEvents: function(){
    var $checkboxes = $('input[type="checkbox"]');
    $checkboxes.on('change', function(){
      var isChecked = !$(this).is(':checked');
      if (isChecked) {
        // remove the check mark
        $(this).parent().parent().removeClass('disabled');
      } else {
        $(this).parent().parent().addClass('disabled');
      }
    });
  },
  bindAddTodoEvents: function(){
    $('.add-todo-container button').on('click', function(){
      var newTodoTitle = $('.add-todo-container input').val();
      if (_.isString(newTodoTitle) && newTodoTitle.length > 2) {
        var newTodoObject = {title: newTodoTitle, completed: false};
        todos.push(newTodoObject);
        $('.add-todo-container input').val('');
        app.render();
      }
    });
  },
  bindRemoveTodoEvents: function(){
    $('.list-group-item button').on('click', function(){
      // remove todo item
      var index = $(this).parent().parent().index();
      todos.splice(index, 1);
      app.render();
    });
  }
}; // end of app

module.exports = app;
