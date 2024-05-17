import { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      name: "shreyansh",
      age: 24,
      count: 0,
    };
  }

  handleDec = () => {
    console.log("handleDec");
    this.setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  handleInc = () => {
    console.log("handleInc");
    this.setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <>
        <h6>class counter : {this.state.count} </h6>
        <button
          onClick={this.handleDec}
          disabled={this.state.count === 0 ? true : false}
        >
          &nbsp; &nbsp; - &nbsp; &nbsp;
        </button>
        &nbsp;
        <button onClick={this.handleInc}>&nbsp; &nbsp; + &nbsp; &nbsp;</button>
      </>
    );
  }
}
