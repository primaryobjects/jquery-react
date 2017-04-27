class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      context: props.context
    };

    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.state.context.getColor(this, function(color, that) {
      that.state.context.setColor(color === 'rgb(255, 0, 0)' ? 'green' : 'red');
    });
  }

  render() {
    return (
      <div className='alert alert-success' role='alert'>
        <h3>Hello, from React!</h3>
        <button type='button' className='btn btn-default' onClick={ this.onClick }>Click Me</button>
      </div>
    );
  }
}