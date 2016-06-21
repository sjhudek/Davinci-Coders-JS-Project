
import $ from 'jquery';
import 'styles/main.scss';
import TodoControllerView from 'pages/todoReact/todoController';
import project from 'pages/project';
import photoSearch from 'pages/photoSearch';
import funnySquares from 'pages/funnySquares';
import formsBackbone from 'pages/formsBackbone';
import header from 'components/header';

$(function(){

  header.init();

// what page are we on?
  var url = window.location.pathname;

// our first JS router
  switch (url) {
  case '/pages/todo.html':
    var todoControllerView = new TodoControllerView();
  break;
  case '/pages/photoSearch.html':
    photoSearch.init();
  break;
  case '/pages/project.html':
    // init the project javascript
  break;
  case '/pages/funnySquares.html':
    funnySquares.init();
  break;
  case '/pages/formsBackbone.html':
    formsBackbone.render();
  break;
  default: break;
  }

});
