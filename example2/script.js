var PubSubManager = {
  subscribers: [],

  subscribe: function(parent, callback) {
    this.subscribers.push({ parent: parent, callback: callback });
  },

  getColor: function(parent, callback) {
    callback($('#box').css('background-color'), parent);
  },

  setColor: function(name) {
    $('#box').css('background-color', name);
  }
};

$(function() {
  setTimeout(function() {
    ReactDOM.render(React.createElement(MyComponent, { context: PubSubManager }), document.getElementById('root'));
  }, 0);
});