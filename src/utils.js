const Utils = {
  randomVec: function (length) {
    const deg = 2 * Math.PI * Math.random();
    return scale([Math.sin(deg), Math.cos(deg)], length);
  },

  scale: function (vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
};

export default Utils;
