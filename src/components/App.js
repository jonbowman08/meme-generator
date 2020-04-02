import React from "react";
import "./index.css";

class App extends React.Component {
  componentDidMount() {
    const context = this.canvasA.getContext("2d");

    const image = new Image();
    image.src =
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg";
    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvasA.height, this.canvasA.width);
      context.font = "normal 30px Anton";
      context.fillStyle = "#FFF";
      context.strokeStyle = "#000";
      context.fillText("Hello World", 120, 50);
    };
  }

  render() {
    return (
      <div className="main">
        <input className="meme-input" />
        <canvas
          height="400px"
          width="400px"
          className="spongebob"
          ref={canvasA => (this.canvasA = canvasA)}
        ></canvas>
      </div>
    );
  }
}

export default App;
