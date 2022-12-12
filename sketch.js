const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()

const settings = {
  pixelsPerInch: 300,
  p5: true,
  duration: 3,
  animate: true,
  dimensions: [512, 512],
  bleed: 1 / 8,
};

var start = 0;

var initials = {
  space: 0.05,
  circleRadius: 168,
  negHeight: -199,
  posHeight: 52,
  start: 0.009,
}

canvasSketch(() => {


  angleMode(DEGREES);
  noiseDetail(2, 1)
  return ({
    context,
    width,
    height
    
  }) => {

    background(255, 10);
    noStroke();
    translate(width / 2, height / 2);

    for (var i = 0; i < 360; i += initials.space) {

      var xoff = map(cos(i), -1, 1, 0, 3);
      var yoff = map(sin(i), -1, 1, 0, 3);

      var n = noise(xoff + start, yoff + start);

      var h = map(n, 0, 1, initials.negHeight, initials.posHeight);

      var r = map(sin(i), -1, 1, 0, 5);
      var g = map(h, -150, 150, 0, 5);
      var b = map(n, 0, 1, 0, 5);

      fill(r, g, b, 10);

      rotate(initials.space)
      rect(initials.circleRadius, initials.circleRadius, h, 1)

    }

    start += initials.start;

  }
}, settings);
