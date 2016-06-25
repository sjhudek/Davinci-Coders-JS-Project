var $ = require('jquery');

// legacy loading for Bootstrap

window.jQuery = window.$ = $;
require('bootstrap');

import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import listTemplate from 'templates/accountList.html';
import createAccount from 'templates/createAccount.html';

// Model
var accountModelConfigObject = {
  defaults: {
    accounts: []
  },
  save: function(){
    var data = this.get('accounts');
    lscache.set('accounts', data);
  },
  fetch: function(){
    var data = lscache.get('accounts');
    data = data || [];
    this.set('accounts', data);
  }
};
var AccountModel = Backbone.Model.extend(accountModelConfigObject);
var accountModel = new AccountModel();

// Controller
var controllerConfigObject = {
  el: '.page-container',
  model: accountModel,
  events: {
    'click .btn-create': 'createNewAccount'
  },
  initialize: function(){
    this.model.fetch();
  },
  render: function(){
    var listView = new ListView();
    this.$el.find('.view-container').html(listView.$el.html);
  },
  createNewAccount: function(){
    var createView = new CreateView();
    this.$el.find('.view-container').html(createView.$el.html);
  }
};
var AccountControllerView = Backbone.View.extend(controllerConfigObject);


// View
var listViewConfig = {
  tagname: 'div',
  events: {},
  template: Handlebars.compile(listTemplate),
  initialize: function(){
    this.render();
  },
  render: function(){
    var renderedTemplate = this.template({});
    this.$el.html(renderedTemplate);
  }
};
var ListView = Backbone.View.extend(listViewConfig);

var createViewConfig = {
  tagname: 'div',
  template: Handlebars.compile(createAccount),
  event: {
    'click .btn-done': 'submitForm'
  },
  initialize: function(){
    this.render();
  },
  render: function(){
    var renderedTemplate = this.template({});
    this.$el.html(renderedTemplate);
  },
  submitForm: function(){
    // accountControllerView.render();
  }
};
var CreateView = Backbone.View.extend(createViewConfig);


var accountControllerView = new AccountControllerView();
module.exports = accountControllerView;

