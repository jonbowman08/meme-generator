import React from "react";
import "./index.css";

class App extends React.Component {
  componentDidMount() {
    const context = this.canvasA.getContext("2d");

    const image = new Image();
    image.src = "mocking-spongebob-1556133078.jpg";
    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvasA.width, this.canvasA.height);
      context.font = "30px Impact";
      context.strokeText("Hello World", 75, 30);
    };
  }

  render() {
    return (
      <div className="main">
        <input className="meme-input" />
        <canvas
          className="spongebob"
          ref={canvasA => (this.canvasA = canvasA)}
        ></canvas>
      </div>
    );
  }
}

export default App;
