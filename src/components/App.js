import React from "react";
import "./index.css";

class App extends React.Component {
  state = { memeText: "", memeChunks: [] };

  componentDidMount() {
    const context = this.canvasA.getContext("2d");
    const image = new Image();
    image.src =
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg";
    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvasA.height, this.canvasA.width);
    };
  }

  componentDidUpdate() {
    const context = this.canvasA.getContext("2d");
    const image = new Image();
    image.src =
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg";
    context.drawImage(image, 0, 0, this.canvasA.height, this.canvasA.width);
    context.font = "normal 30px Impact";
    context.fillStyle = "#FFF";
    context.strokeStyle = "#000";
    context.textAlign = "center";
    if (this.state.memeChunks) {
      this.state.memeChunks.forEach((text, i) => {
        let verticalLine = 50;
        verticalLine = verticalLine + 50;
        context.fillText(text, 200, i * 50 + 50);
        context.strokeText(text, 200, i * 50 + 50);
      });
    }
  }

  tweak = c => {
    return Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase();
  };

  onTextChange = event => {
    const memeText = event.target.value
      .split("")
      .map(this.tweak)
      .join("");
    const chunks = memeText.match(/.{1,26}(\s|$)/g);
    this.setState({ memeChunks: chunks, memeText: memeText });
  };

  render() {
    return (
      <div className="main">
        <input
          autoFocus
          type="text"
          onChange={this.onTextChange}
          value={this.state.memeText}
          className="meme-input"
        />
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
