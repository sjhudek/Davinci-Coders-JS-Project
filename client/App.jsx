
import $ from 'jquery';
import 'styles/main.scss';
import todo from 'pages/todo';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';

$(function(){

// what page are we on?
  var url = window.location.pathname;

// our first JS router
  switch (url) {
    case '/pages/todo.html':
        todo.init();
  break;
    case '/pages/project.html':
        // init the project javascript
  break;
    case '/pages/funnySquares.html':
        funnySquares.init();
  break;
  }

});
