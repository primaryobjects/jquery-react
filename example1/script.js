$(function() {
  setTimeout(function() {
    ReactDOM.render(React.createElement(MyComponent, { context: $('body') }), document.getElementById('root'));
  }, 0);
});