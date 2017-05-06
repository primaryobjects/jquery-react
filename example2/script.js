var UIManager = {
  getColor: function(parent, callback) {
    callback($('#box').css('background-color'), parent);
  },

  setColor: function(name) {
    $('#box').css('background-color', name);
  }
};

$(function() {
  setTimeout(function() {
    ReactDOM.render(React.createElement(MyComponent, { context: UIManager }), document.getElementById('root'));
  }, 0);
});
