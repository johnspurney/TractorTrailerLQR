const NUMBER_OF_MAPS = 8;
const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 640;

// A flag to keep track of when the simulation is running
let simulationStarted = false;
// Path entries are in the following format: [xTrailer, yTrailer, thetaTrailer]
let path = [];
// Flag that keeps track of when the pathbrush is being used
let pathBrushActivated = false;
let currentPathIndex = 0;
let waypointIndex = 0;
let waypointThreshold = 8;
let waypointDistanceThreshold = 14;
let startSimButton = document.getElementById('startSimButton');
let clearPathButton = document.getElementById('clearPathButton');
let pathbrushStatus = document.getElementById('pathbrushStatus');
let mapSelect = document.getElementById('mapSelect');
let coordinateIndicator = document.getElementById('coordinateIndicator');
let canvasDynamic = document.getElementById('canvasDynamic');
let canvasBackground = document.getElementById('canvasBackground');
let ctxD = canvasDynamic.getContext('2d');
let ctxB = canvasBackground.getContext('2d');

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

function drawPath() {
  for (let i = 0; i < path.length; ++i) {
    ctxB.fillStyle = 'black';
    ctxB.fillRect(path[i][0], path[i][1], 3, 3);
  }
}

startSimButton.addEventListener('click', function() {
  if (simulationStarted) {
    simulator.stop();
    simulationStarted = false;
    this.innerHTML = 'Start Simulation';
  } else {
    simulator.init();
    simulationStarted = true;
    this.innerHTML = 'Stop Simulation';
  }
});

clearPathButton.addEventListener('click', function() {
  // TODO: Clear the canvas here
  path = [];
  currentPathIndex = 0;
  waypointIndex = 0;
});

canvasDynamic.addEventListener('mousedown', function() {
  pathBrushActivated = true;
  pathbrushStatus.innerHTML = 'On';
});

canvasDynamic.addEventListener('mouseup', function() {
  pathBrushActivated = false;
  pathbrushStatus.innerHTML = 'Off';
});

canvasDynamic.addEventListener('mousemove', function(evt) {
  var rect = this.getBoundingClientRect();
  let currentX = Math.round(evt.clientX - rect.left);
  let currentY = Math.round(evt.clientY - rect.top);

  coordinateIndicator.innerHTML = `(${currentX}, ${currentY})`;

  if (pathBrushActivated) {
    // TODO: add points to the path when active
  }
});

let simulator = {
  simulationId: null,
  previousTime: 0,
  objectsLoaded: false,
  vehicle: null,

  init: function() {
    let map = new Image();
    map.src = `./maps/map_${mapSelect.value}.png`;

    map.onload = function() {
      ctxB.drawImage(map, 0, 0);
      simulator.vehicle = new TractorTrailer(...Object.values(tractorTrailerSettings));
      drawPath();
      waypointIndex = 0;
      simulator.objectsLoaded = true;
    };

    simulator.loop();
  },
  updateStep: function(dt) {
    if (isNaN(dt)) {
      dt = 0;
    }

    if (simulator.objectsLoaded) {
      // TODO: control and path tracking log
      simulator.vehicle.updateState(dt, simulator.vehicle.steeringAngle, 0);
    }
  },
  drawStep: function() {
    if (simulator.objectsLoaded) {
      ctxD.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      simulator.vehicle.drawVehicle(ctxD);
      // TODO: draw tracked node
    }
  },
  loop: function(currentTime) {
    let dt = currentTime - simulator.previousTime;

    simulator.updateStep(dt);
    simulator.drawStep();
    simulator.simulationId = requestAnimationFrame(simulator.loop);
    simulator.previousTime = currentTime;
  },
  stop: function() {
    cancelAnimationFrame(simulator.simulationId);
  }
};
