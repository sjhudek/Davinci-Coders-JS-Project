import React, { PropTypes } from 'react';

var TodoItem = React.createClass({
  propTypes: {
    data: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool
    })
  },
  render: function(){
    var todo = this.props.data;
    return (
      <div>
        <div className="col-sm-1">
            <input className="completed-checkbox" type="checkbox" checked={todo.completed} onChange={this.handleComplete}></input>
        </div>
        <div className="col-md-10 title" onClick={this.titleClick}>{todo.title}</div>
        <div className="col-md-10 title-edit hidden">
          <input type="text" className="form-control title-edit-input" value={todo.title} onKeypress={this.editKeypress}></input>
        </div>
        <div className="col-md-1">
          <button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  },
  handleComplete: function(){},
  handleClose: function(){},
  titleClick: function(){},
  editKeypress: function(){}
});

module.exports = TodoItem;
