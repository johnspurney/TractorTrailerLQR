const NUMBER_OF_MAPS = 8;
// A flag to keep track of when the simulation is running
let simulationStarted = false;
// Path entries are in the following format: [xTrailer, yTrailer, thetaTrailer]
let path = [];
// Flag that keeps track of when the pathbrush is being used
let pathBrushActivated = false;
let currentPathIndex = 0;
let waypointDistanceThreshold = 14;
let startSimButton = document.getElementById('startSimButton');
let clearPathButton = document.getElementById('clearPathButton');
let canvasDynamic = document.getElementById('canvasDynamic');
let pathbrushStatus = document.getElementById('pathbrushStatus');
let mapSelect = document.getElementById('mapSelect');

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

function initializeMapSelect() {
  let optionElement = null;

  for (let i = 0; i < NUMBER_OF_MAPS; ++i) {
    optionElement = document.createElement('option');
    optionElement.innerHTML = i.toString();
    mapSelect.appendChild(optionElement);
  }
}
initializeMapSelect();

startSimButton.addEventListener('click', function() {
  if (simulationStarted) {
    // TODO: Start the simulation here
    simulationStarted = false;
    this.innerHTML = 'Start Simulation';
  } else {
    // TODO: Stop the simulation here
    simulationStarted = true;
    this.innerHTML = 'Stop Simulation';
  }
});

clearPathButton.addEventListener('click', function() {
  // TODO: Clear the canvas here
  path = [];
  currentPathIndex = 0;
  // TODO: the waypoint index from the simulation will be zero here aswell
});

canvasDynamic.addEventListener('mousedown', function() {
  pathBrushActivated = true;
  pathbrushStatus.innerHTML = 'On';
});

canvasDynamic.addEventListener('mouseup', function() {
  pathBrushActivated = false;
  pathbrushStatus.innerHTML = 'Off';
});

let tractorTrailer = new TractorTrailer(...Object.values(tractorTrailerSettings));
console.log(tractorTrailer);
