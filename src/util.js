export const randomVec = (length) => {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
};

export const scale = (vec, m) => {
  return [vec[0] * m, vec[1] * m];
};

export const distBetweenTwoPoints = ([x_1, y_1], [x_2, y_2]) => {
  return Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);
};
