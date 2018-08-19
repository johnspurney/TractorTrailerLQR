/**
 * A mini math library that meets the needs of the simulator.
 */
let bm = {};

bm.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

bm.degrees = function(radians) {
  return radians * 180 / Math.PI;
};
