
import $ from 'jquery';
import 'styles/main.scss';
import todo from 'pages/todo-backbone';
import project from 'pages/project';
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
        todo.render();
  break;
    case '/pages/project.html':
        // init the project javascript
  break;
    case '/pages/funnySquares.html':
        funnySquares.init();
  break;
    case '/pages/formsBackbone.html':
    var formspage = new formsBackbone();
  break;
  default: break;
  }

});
