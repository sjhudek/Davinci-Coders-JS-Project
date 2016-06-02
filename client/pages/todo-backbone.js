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

  },
  fetch: function(){
    // gets the data
  },
  save: function(){
    // saves the data
  }
});

// todoModel = blueprint   TodoModel = house
var todoModel = new TodoModel(); // capitalize after "new"

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

var todoControllerView = new TodoControllerView(); // it calls ViewClass.initialize

module.exports = todoControllerView;
