
import $ from 'jquery';
import _ from 'underscore';
import rawTemplate from 'templates/funnySquare.html';
import Handlebars from 'handlebars';

var template;
var app = {
  init: function() {
    template = Handlebars.compile(rawTemplate);
    console.log(rawTemplate);
    app.render();
  },
  render: function(){
    // display 6 squares
    var numberOfSquares = 6;
    var renderedHtml = '';  //  1st time empty string
    _.times(numberOfSquares, function(index){
      renderedHtml += template({ id: index }); // same as renderedHtml = renderedHtml + template
    });
    $('h1').after(renderedHtml);
  }
};

module.exports = app;
