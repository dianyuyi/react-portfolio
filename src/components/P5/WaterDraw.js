import React, { Component } from "react";
import PropTypes from "prop-types";
import { fbmVert, fbmFrag } from "./fbm";
// import { useP5, useDraw } from "p5-react-renderer";
import p5 from "p5";

//memo: https://medium.com/@edoueda/integrating-p5-js-and-webgl-with-react-js-96c848a63170

export default class InkDraw extends Component {
  //React ref for div reference we pass into p5
  sketchRef = React.createRef();

  //P5 instance mode
  initSketch = (p) => {
    let fbmShader;
    let w, h;
    p.preload = () => {
      // fbmShader = p.loadShader(fbmVert, fbmFrag);
    };

    p.windowResized = () => {
      //handle window resize here
    };
    p.setup = () => {
      //setup canvas and init values here
      w = p.windowWidth;
      h = p.windowHeight;
      p.createCanvas(w, h, p.WEBGL);
      fbmShader = p.createShader(fbmVert, fbmFrag);
    };

    p.draw = () => {
      p.shader(fbmShader);

      fbmShader.setUniform("u_resolution", [w, h]);
      fbmShader.setUniform("u_time", p.millis() / 1000.0);

      p.rect(0, 0, w, h);
    };
  };

  componentDidMount() {
    //Create p5 canvas once component mounts
    this.p5Canvas = new p5(this.initSketch, this.sketchRef.current);
  }

  render() {
    //this div will contain the sketch canvas
    return (
      <div
        className="mySketch"
        style={{ position: "absolute", zIndex: "-99", top: "0" }}
        ref={this.sketchRef}
      />
    );
  }
}

// export default InkDraw;
