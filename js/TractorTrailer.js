class TractorTrailer {
  constructor(
    lengthTractor,
    lengthHitch,
    lengthTrailer,
    velocityTractor,
    thetaTractor,
    thetaTrailer,
    xTrailer,
    yTrailer,
    steeringAngle,
    steeringAngleIndicatorLength,
    steeringConstraints,
    hitchConstraints,
    vehicleThickness,
    vehicleColor,
    hitchColor
  ) {
    this.lengthTractor = lengthTractor;
    this.lengthHitch = lengthHitch;
    this.lengthTrailer = lengthTrailer;
    this.velocityTractor = velocityTractor;
    this.thetaTractor = thetaTractor;
    this.thetaTrailer = thetaTrailer;
    this.hitchAngle = thetaTractor - thetaTrailer;
    this.xTrailer = xTrailer;
    this.yTrailer = yTrailer;
    this.velocityTrailer =
      velocityTractor * Math.cos(this.hitchAngle) +
      lengthHitch *
        (velocityTractor * Math.tan(steeringAngle) / lengthTractor) *
        Math.sin(this.hitchAngle);
    this.steeringAngle = steeringAngle;
    this.steeringConstraints = steeringConstraints;
    this.hitchConstraints = hitchConstraints;
    this.vehicleThickness = vehicleThickness;
    this.vehicleColor = vehicleColor;
    this.hitchColor = hitchColor;
    this.steeringAngleIndicatorLength = steeringAngleIndicatorLength;
  }

  updateState(dt, steeringAngle, accelTractor) {
    // Conversion of milliseconds to seconds, the simulator uses milliseconds by default
    dt = dt / 1000;

    this.steeringAngle = steeringAngle;
    this.velocityTractor = dt * accelTractor + this.velocityTractor;

    if (steeringAngle < this.steeringConstraints[0]) {
      this.steeringAngle = this.steeringConstraints[0];
    }

    if (steeringAngle > this.steeringConstraints[1]) {
      this.steeringAngle = this.steeringConstraints[1];
    }

    this.hitchAngle = this.thetaTractor - this.thetaTrailer;

    // Angular velocity / yaw rate
    let w = dt * this.velocityTractor * Math.tan(this.steeringAngle) / this.lengthTractor;

    this.velocityTrailer =
      this.velocityTractor * Math.cos(this.hitchAngle) +
      this.lengthHitch * w * Math.sin(this.hitchAngle);

    if (Math.abs(this.hitchAngle) < this.hitchConstraints[1]) {
      this.thetaTractor = this.thetaTractor + w;
    } else {
      this.thetaTractor = this.thetaTractor - w;
    }

    this.thetaTrailer =
      this.thetaTrailer +
      (dt * this.velocityTractor * Math.sin(this.hitchAngle) -
        this.lengthHitch * w * Math.cos(this.hitchAngle)) /
        this.lengthTrailer;

    this.xTrailer = this.xTrailer + dt * this.velocityTrailer * Math.cos(this.thetaTrailer);
    this.yTrailer = this.yTrailer + dt * this.velocityTrailer * Math.sin(this.thetaTrailer);
  }

  drawVehicle(ctx) {
    // Hitch point
    let x1 = this.xTrailer + this.lengthTrailer * Math.cos(this.thetaTrailer);
    let y1 = this.yTrailer + this.lengthTrailer * Math.sin(this.thetaTrailer);

    // Tractor back wheel point
    let x2 = x1 + this.lengthHitch * Math.cos(this.thetaTractor);
    let y2 = y1 + this.lengthHitch * Math.sin(this.thetaTractor);

    // Tractor front wheel point
    let x3 = x2 + this.lengthTractor * Math.cos(this.thetaTractor);
    let y3 = y2 + this.lengthTractor * Math.sin(this.thetaTractor);

    // End of steering angle indicator
    let x4 =
      x3 + this.steeringAngleIndicatorLength * Math.cos(this.thetaTractor + this.steeringAngle);
    let y4 =
      y3 + this.steeringAngleIndicatorLength * Math.sin(this.thetaTractor + this.steeringAngle);

    // Draw the trailer
    ctx.beginPath();
    ctx.strokeStyle = this.vehicleColor;
    ctx.lineCap = 'butt';
    ctx.lineWidth = this.vehicleThickness;
    ctx.moveTo(this.xTrailer, this.yTrailer);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    // Draw the tractor
    ctx.beginPath();
    ctx.strokeStyle = this.vehicleColor;
    ctx.lineCap = 'butt';
    ctx.lineWidth = this.vehicleThickness;
    ctx.moveTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.stroke();

    // Draw the hitch
    ctx.beginPath();
    ctx.strokeStyle = this.hitchColor;
    ctx.lineCap = 'butt';
    ctx.lineWidth = 2;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Draw the steering angle indicator
    ctx.beginPath();
    ctx.strokeStyle = this.hitchColor;
    ctx.lineCap = 'butt';
    ctx.lineWidth = 2;
    ctx.moveTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.stroke();
  }
}
