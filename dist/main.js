/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _movingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nconst DEFS = {\n  COLOR: 'white',\n  RADIUS: 20,\n  SPEED: 5,\n};\n\nclass Asteroid extends _movingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  // static COLOR = 'grey';\n  // static RADIUS = 25;\n  // static SPEED = 5;\n  constructor(options) {\n    super({\n      pos: options['pos'],\n      vel: (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomVec)(DEFS['SPEED']),\n      color: DEFS['COLOR'],\n      radius: DEFS['RADIUS'],\n      game: options['game'],\n    });\n\n    // constructor(options) {\n    //   super({\n    //     pos: options['pos'],\n    //     vel: randomVec('SPEED'),\n    //     color: 'COLOR',\n    //     radius: 'RADIUS',\n    //   });\n    // MovingObject.call(this, {\n    //   pos: options['pos'],\n    //   vel: Utils.randomVec(DEFS['SPEED']),\n    //   color: DEFS['COLOR'],\n    //   radius: DEFS['RADIUS'],\n    // });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n\n//# sourceURL=webpack://w9d1/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nconst SETTINGS = {\n  DIM_X: 800,\n  DIM_Y: 580,\n  NUM_ASTEROIDS: 20,\n};\nclass Game {\n  constructor(ctx) {\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ctx = ctx;\n  }\n\n  start() {\n    console.log('The game is starting...');\n  }\n\n  randomPosition() {\n    return [\n      Math.floor(Math.random() * SETTINGS['DIM_X']),\n      Math.floor(Math.random() * SETTINGS['DIM_Y']),\n    ];\n  }\n\n  addAsteroids() {\n    for (let i = 0; i < SETTINGS['NUM_ASTEROIDS']; i++) {\n      this.asteroids.push(\n        new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pos: this.randomPosition(), game: this })\n      );\n    }\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, SETTINGS['DIM_X'], SETTINGS['DIM_Y']);\n    this.ctx.fillStyle = 'black';\n    this.ctx.fillRect(0, 0, SETTINGS['DIM_X'], SETTINGS['DIM_Y']);\n    this.asteroids.forEach((asteroid) => {\n      asteroid.draw(this.ctx);\n    });\n  }\n\n  moveObjects() {\n    this.asteroids.forEach((obj) => obj.move());\n  }\n\n  wrap(pos) {\n    let [posX, posY] = pos;\n\n    if (posX < 0) {\n      posX = SETTINGS['DIM_X'];\n    } else if (posX > SETTINGS['DIM_X']) {\n      posX = 0;\n    }\n    if (posY < 0) {\n      posY = SETTINGS['DIM_Y'];\n    } else if (posY > SETTINGS['DIM_Y']) {\n      posY = 0;\n    }\n    return [posX, posY];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://w9d1/./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.moveObjects = this.game.moveObjects.bind(this.game);\n    this.draw = this.game.draw.bind(this.game);\n  }\n\n  start() {\n    setInterval(this.moveObjects, 20);\n    setInterval(this.draw, 20);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n\n//# sourceURL=webpack://w9d1/./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _movingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movingObject.js */ \"./src/movingObject.js\");\n/* harmony import */ var _gameview_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameview.js */ \"./src/gameview.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext('2d');\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  window.game = game;\n  window.MovingObject = _movingObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  window.ctx = ctx;\n  // console.log(ctx);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, 0, 800, 580);\n  const gameView = new _gameview_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n  window.gameView = gameView;\n  // gameView.start();\n  // ctx.fillStyle = 'white';\n  // ctx.fillRect(50, 50, 50, 50);\n\n  // ctx.arc(100, 100, 50, 0, Math.PI * 2, false);\n  // ctx.strokeStyle = 'green';\n  // ctx.lineWidth = 20;\n  // ctx.fillstyle = 'white';\n  // ctx.stroke();\n  // ctx.fill();\n});\n\n\n//# sourceURL=webpack://w9d1/./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovingObject {\n  constructor(options) {\n    this.pos = options['pos'];\n    this.vel = options['vel'];\n    this.radius = options['radius'];\n    this.color = options['color'];\n    this.game = options['game'];\n  }\n\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.radius,\n      0,\n      Math.PI * 2,\n      true\n    );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n  }\n\n  move() {\n    const [velX, velY] = this.vel;\n    this.pos[0] += velX;\n    this.pos[1] += velY;\n    this.pos = this.game.wrap(this.pos);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n\n\n//# sourceURL=webpack://w9d1/./src/movingObject.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomVec\": () => (/* binding */ randomVec),\n/* harmony export */   \"scale\": () => (/* binding */ scale)\n/* harmony export */ });\n// Return a randomly oriented vector with the given length.\nconst randomVec = (length) => {\n  const deg = 2 * Math.PI * Math.random();\n  return scale([Math.sin(deg), Math.cos(deg)], length);\n};\n\n// Scale the length of a vector by the given amount.\nconst scale = (vec, m) => {\n  return [vec[0] * m, vec[1] * m];\n};\n// export default Util;\n\n\n//# sourceURL=webpack://w9d1/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;