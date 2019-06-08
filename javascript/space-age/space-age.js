export function age(planet, ageSeconds) {
  const earthYear = 31557600;
  const planetYears = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter:  11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };
  if (!planet in planetYears) {
    return NaN;
  }
  return parseFloat((ageSeconds / (earthYear * planetYears[planet])).toFixed(2));
}

