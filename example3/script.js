var PubSubManager = {
  subscribers: [],

  subscribe: function(parent, callback) {
    this.subscribers.push({ parent: parent, callback: callback });
  },

  color: function(name) {
    // Notify subscribers of event.
    this.subscribers.forEach(function(subscriber) {
      subscriber.callback(name, subscriber.parent);
    });
  }
};

$(function() {
  setTimeout(function() {
    ReactDOM.render(React.createElement(MyComponent, { context: PubSubManager }), document.getElementById('root'));
  }, 0);

  // Change the box color every few seconds.
  setInterval(function() {
    var box = $('#box');
    var color = box.css('background-color') === 'rgb(255, 0, 0)' ? 'green' : 'red';

    // Change box color.
    box.css('background-color', color);

    // Notify subscribers.
    PubSubManager.color(color);
  }, 1000)
});