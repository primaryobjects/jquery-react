## JQuery to React

[Demo](http://primaryobjects.github.io/jquery-react/example2/index.html)

This example demonstrates a React component modifying an existing JQuery web application through an intermediate manager class. The component is passed a reference to the class in its constructor. The component can make changes to web page elements, outside of its internal scope, through calls to the manager class.

```javascript
ReactDOM.render(React.createElement(MyComponent, { context: UIManager }), document.getElementById('root'));
});
```
