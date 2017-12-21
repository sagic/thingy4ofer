var img = document.querySelector('#dots');
new BreathingHalftone( img, {
  dotSize: 1/80,
  // size of dots
  // as a fraction of the diagonal of the image
  // smaller dots = more dots = poorer performance

  dotSizeThreshold: 0.25,
  // hides dots that are smaller than a percentage

  initVelocity: 0.52,
  // speed at which dots initially grow

  oscPeriod: 3,
  // duration in seconds of a cycle of dot size oscilliation or 'breathing'

  oscAmplitude: 0.1,
  // percentage of change of oscillation

  // ----- color & layout ----- //

  isAdditive: false,
  // additive is black with RGB dots,
  // subtractive is white with CMK dots

  isRadial: false,
  // enables radial grid layout

  channels: [ 'red', 'green', 'blue' ],
  // layers of dots
  // 'lum' is another supported channel, for luminosity

  isChannelLens: false,
  // disables changing size of dots when displaced

  // ----- behavior ----- //

  friction: 0.06,
  // lower makes dots easier to move, higher makes it harder

  hoverDiameter: 0.3,
  // size of hover effect
  // as a fraction of the diagonal of the image

  hoverForce: -0.02,
  // amount of force of hover effect
  // negative values pull dots in, positive push out

  activeDiameter: 0.7,
  // size of click/tap effect
  // as a fraction of the diagonal of the image

  activeForce: 0.01
  // amount of force of hover effect
  // negative values pull dots in, positive push out
});