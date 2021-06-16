import React, { Component } from "react";
import Display from "./Display";
import Thumbnails from "./Thumbnails";
import "./Imager.css"
export class Imager extends Component {
  state = {
    images: [
      "images/Image1.png",
      "images/Image2.png",
      "images/Image3.jpg",
      "images/Image4.jpg",
      "images/Image5.png",
      "images/Image6.png",
      "images/Image7.png",
      "images/Image8.png",
      "images/Image9.png",
      "images/Image10.png",
      "images/Image11.png",
      "images/Image12.png",
    ],
    bigImage: "",
    indexImage: "",
  };

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * this.state.images.length);

    this.setState({
      bigImage: this.state.images[randomNum],
      indexImage: randomNum,
    });
  }

  randomImageGenerator = () => {
    let randomNum = Math.floor(Math.random() * this.state.images.length);

    this.setState({
      bigImage: this.state.images[randomNum],
    });
  };

  backbutton = () => {
    if (this.state.indexImage === 0) {
      this.setState({
        bigImage: this.state.images[this.state.images.length - 1],
        indexImage: this.state.images.length - 1,
      });
    } else {
      this.setState({
        bigImage: this.state.images[this.state.indexImage - 1],
        indexImage: this.state.indexImage - 1,
      });
    }
  };

  forwardButton = () => {
    console.log(this.state.indexImage);

    if (this.state.indexImage === 11) {
      this.setState({
        bigImage: this.state.images[0],
        indexImage: 0,
      });
    } else {
      this.setState({
        bigImage: this.state.images[this.state.indexImage + 1],
        indexImage: this.state.indexImage + 1,
      });
    }
  };

  thumbnailsSelect = (item, index) => {
    console.log(item);
    this.setState({
      bigImage: item,
      indexImage: index,
    });
  };

  render() {
    return (
      <div>
        <Display
          bigImage={this.state.bigImage}
          randomImageGenerator={this.randomImageGenerator}
        />
        <button onClick={this.backbutton}> {"<"} </button>
        <button onClick={this.forwardButton}> {">"} </button>
        <Thumbnails
          images={this.state.images}
          thumbnailsSelect={this.thumbnailsSelect}
        />
      </div>
    );
  }
}

export default Imager;
