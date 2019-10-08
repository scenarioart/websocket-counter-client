import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

import socket from "../utils/socket";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  flex-direction: row;
  justify-content: center;
`;

const CountText = styled.p`
  font-size: 100px;
`;

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.socket = socket;
  }

  componentDidMount() {
    this.socket.on("RECEIVE_STATE", data => {
      this.receiveState(data);
    });
    this.socket.emit("SEND_GET", {});
  }

  sendAdd() {
    this.socket.emit("SEND_ADD", {});
  }

  sendReset() {
    this.socket.emit("SEND_RESET", {});
  }

  receiveState(state) {
    this.setState({
      count: state
    });
  }

  render() {
    const { count } = this.state;
    return (
      <Wrapper>
        <CountText>{count}</CountText>
        <Buttons>
          <Button
            style={{ marginRight: "10px", width: "100px" }}
            color="primary"
            onClick={() => this.sendAdd()}
          >
            add
          </Button>
          <Button
            style={{ width: "100px" }}
            color="danger"
            onClick={() => this.sendReset()}
          >
            reset
          </Button>
        </Buttons>
      </Wrapper>
    );
  }
}

export default Counter;
