## JQuery to React

[Demo](http://primaryobjects.github.io/jquery-react/example3/index.html)

This example demonstrates a React component changing its own UI elements depending on values from an existing JQuery web application. The component is passed a reference to a publisher/subscriber class in its constructor. The component can listen for events from the JQuery web application and update its own internal UI elements in response.

```javascript
ReactDOM.render(React.createElement(MyComponent, { context: PubSubManager }), document.getElementById('root'));

// ...

// Subscribe to color events.
this.state.context.subscribe(this, this.onColor);

// ...

onColor(color, that) {
  // Event callback from JQuery app. Update the state value for color.
  that.setState({ color: color });
}
```