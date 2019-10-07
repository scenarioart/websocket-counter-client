import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.props.socket.on('RECEIVE_STATE', (data) => { 
      this.receiveState(data)
    });
  }

  sendAdd() {
    this.props.socket.emit('SEND_ADD', {})
  }

  sendReset() {
    this.props.socket.emit('SEND_RESET', {})
  }

  receiveState(state) {
    this.setState({
      count: state
    })
  }

  render() {
    const{ count } = this.state
    return (
      <React.Fragment>
        <p>{count}</p>
        <button
          onClick={() => this.sendAdd()}
        >
          add
        </button>
        <button
          onClick={() => this.sendReset()}
        >
          reset
        </button>
      </React.Fragment>
    )
  }
}

export default Counter;
