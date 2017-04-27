## JQuery to React

[Demo](http://primaryobjects.github.io/jquery-react/example1/index.html)

This example demonstrates a React component modifying an existing JQuery web application by using the $(this) context. The component is passed a reference to JQuery in its constructor.

```javascript
ReactDOM.render(React.createElement(MyComponent, { context: $('body') }), document.getElementById('root'));
});
```