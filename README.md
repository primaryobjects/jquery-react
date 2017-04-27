JQuery to React
===============

Example projects demonstrating a React component integrating with an existing JQuery web application.

### Example 1

[Example 1](/example1) ([Demo](http://primaryobjects.github.io/jquery-react/example1/index.html)) demonstrates a React component modifying an existing JQuery web application by using the $(this) context. The component is passed a reference to JQuery in its constructor.

```javascript
ReactDOM.render(React.createElement(MyComponent, { context: $('body') }), document.getElementById('root'));
});
```

### Example 2

[Example 2](/example2) ([Demo](http://primaryobjects.github.io/jquery-react/example2/index.html)) demonstrates a React component modifying an existing JQuery web application through an intermediate manager class. The component is passed a reference to the class in its constructor. The component can make changes to web page elements, outside of its internal scope, through calls to the manager class.

```javascript
ReactDOM.render(React.createElement(MyComponent, { context: PubSubManager }), document.getElementById('root'));
});
```

### Example 3

[Example 3](/example3) ([Demo](http://primaryobjects.github.io/jquery-react/example3/index.html)) demonstrates a React component changing its own UI elements depending on values from an existing JQuery web application. The component is passed a reference to a publisher/subscriber class in its constructor. The component can listen for events from the JQuery web application and update its own internal UI elements in response.

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

## License

MIT

## Author

Kory Becker
http://www.primaryobjects.com/kory-becker
