let tractorTrailerSettings = {
  lengthTractor: 23,
  lengthHitch: 5,
  lengthTrailer: 46,
  velocityTractor: 12,
  thetaTractor: bm.radians(270),
  thetaTrailer: bm.radians(270),
  xTrailer: 20,
  yTrailer: 396,
  steeringAngle: 0,
  steeringAngleIndicatorLength: 10,
  steerConstraints: [-1 * bm.radians(45), bm.radians(45)],
  hitchConstraints: [-1 * bm.radians(60), bm.radians(60)],
  vehicleThickness: 22,
  vehicleColor: 'rgba(21, 88, 116, 0.7)',
  hitchColor: 'OrangeRed'
};

let tractorTrailer = new TractorTrailer(...Object.values(tractorTrailerSettings));
console.log(tractorTrailer);
