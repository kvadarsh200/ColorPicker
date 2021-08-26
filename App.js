import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Creating variables like green,red,blue
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
  }

  // three different functions for 3 colors
  handleRed = (event) => {
    this.setState({
      red: event.target.value
    });
  };

  handleGreen = (event) => {
    this.setState({
      green: event.target.value
    });
  };

  handleBlue = (event) => {
    this.setState({
      blue: event.target.value
    });
  };


  render() {
    return (
      <div
        style={{
          backgroundColor:
            "rgb(" +
            this.state.red +
            "," +
            this.state.green +
            "," +
            this.state.blue +
            ")",
          height: "100vh"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            padding: 20,
            borderRadius: 10
          }}
        >
          <h1>Color picker</h1>
          red :
          <input
            type="range"
            value={this.state.red}
            onChange={this.handleRed}
          />
          <br />
          green :
          <input
            type="range"
            value={this.state.green}
            onChange={this.handleGreen}
          />
          <br />
          blue :
          <input
            type="range" // slider
            value={this.state.blue} //slider at starting value=0 
            onChange={this.handleBlue} 
          />
          <br />
        </div>
      </div>
    );
  }
}
