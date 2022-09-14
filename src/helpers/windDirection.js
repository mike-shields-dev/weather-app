const windDirectionLookup = {
  n: "north",
  e: "east",
  s: "south",
  w: "west",
};

function unabbreviatedWindDirection(direction) {
  return direction
    .split("")
    .map((char) => `${windDirectionLookup[char]}`)
    .join(" ");
}

const angleLookUp = {
  n: 0,
  nne: 22.5,
  ne: 45,
  ene: 67.5,
  e: 90,
  ese: 112.5,
  se: 135,
  sse: 157.5,
  s: 180,
  ssw: 202.5,
  sw: 225,
  wsw: 247.5,
  w: 270,
  wnw: 292.5,
  nw: 315,
  nnw: 337.5,
};

function degreesFromWindDirection(direction) {
  return angleLookUp[direction];
}

export { unabbreviatedWindDirection, degreesFromWindDirection };
