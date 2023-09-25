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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiGetRateHistory: () => (/* binding */ apiGetRateHistory)\n/* harmony export */ });\n/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ \"./src/http.js\");\n\r\n\r\nconst apiEndpoint = 'https://thomas-veillard.fr/wp-content/uploads/'\r\n\r\n/**\r\n * A stock ticker from GAFAM, which is a kind of ID for the trading market.\r\n * Amazon (AMZN) has been excluded because of the lack of data in original API response.\r\n * @typedef {\"AAPL\" | \"FB\" | \"GOOG\" | \"MSFT\"} Ticker\r\n */\r\n\r\n/**\r\n * Root response object describing a stock and it's 5-years rate history,\r\n * as returned by the API.\r\n * @typedef {Object} RawRateHistoryResponse\r\n * @property {Object} data\r\n * @property {Ticker} data.symbol - The stock ticker.\r\n * @property {string} data.company - The company name.\r\n * @property {string} data.timeAsOf - Date of the data compilation.\r\n * @property {Object[]} data.chart - The rate history itself.\r\n * @property {RawRateRange} data.chart[].z\r\n */\r\n\r\n/**\r\n * Summarize the rate changes during a day, as returned from the API.\r\n * @typedef {Object} RawRateRange\r\n * @property {string} high - Higher price of the day.\r\n * @property {string} low - Lower price of the day.\r\n * @property {string} open - Price of the stock at the market's opening hour.\r\n * @property {string} close - Price of the stock at the market's closing hour.\r\n * @property {string} volume - Count how many shares have been exchanged during the day.\r\n * @property {string} dateTime - The date, formatted as a string.\r\n */\r\n\r\n/**\r\n * Unserialized root response object describing a stock and it's 5-years rate history.\r\n * Some fields, such dates and numbers, have been parsed from string.\r\n * @typedef {Object} RateHistoryResponse\r\n * @property {Ticker} symbol - The stock ticker.\r\n * @property {string} company - The company name.\r\n * @property {Date} timeAsOf - Date of the data compilation.\r\n * @property {Object[]} chart - The rate history itself.\r\n * @property {RateRange} chart[].z\r\n */\r\n\r\n/**\r\n * Summarize the rate changes during a day, as returned from the API.\r\n * @typedef {Object} RateRange\r\n * @property {number} high - Higher price of the day.\r\n * @property {number} low - Lower price of the day.\r\n * @property {number} open - Price of the stock at the market's opening hour.\r\n * @property {number} close - Price of the stock at the market's closing hour.\r\n * @property {number} volume - Count how many shares have been exchanged during the day.\r\n * @property {Date} dateTime - The date, formatted as a string.\r\n */\r\n\r\n/**\r\n * Returns the rate history of a ticker for last 5 years.\r\n * @param {Ticker} ticker - Ticker of the stock to fetch.\r\n * @returns {Promise<RateHistoryResponse>}\r\n */\r\nasync function apiGetRateHistory (ticker) {\r\n  /** @type {RawRateHistoryResponse['data']} */\r\n  const rawResponse = (await (0,_http_js__WEBPACK_IMPORTED_MODULE_0__.httpGet)(`${apiEndpoint}5y-rates/${ticker}-rates-5y.json`)).data\r\n\r\n  return {\r\n    company: rawResponse.company,\r\n    symbol: rawResponse.symbol,\r\n    timeAsOf: new Date(rawResponse.timeAsOf),\r\n    chart: rawResponse.chart.map(({ z }) => ({\r\n      z: {\r\n        high: parseFloat(z.high),\r\n        low: parseFloat(z.low),\r\n        open: parseFloat(z.open),\r\n        close: parseFloat(z.close),\r\n        volume: parseInt(z.volume.replace(/,/g, ''), 10),\r\n        dateTime: new Date(z.dateTime)\r\n      }\r\n    }))\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://basic-rate-graph/./src/api.js?");

/***/ }),

/***/ "./src/http.js":
/*!*********************!*\
  !*** ./src/http.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   httpGet: () => (/* binding */ httpGet)\n/* harmony export */ });\n/**\r\n * Fetch asynchronously a JSON payload using GET HTTP verb.\r\n * @param {string} url - The URL to the fetched resource.\r\n * @returns Promise<any>\r\n */\r\nfunction httpGet (url) {\r\n  return window.fetch(url, { method: 'GET' }).then(httpCheckCodeAndParseJson)\r\n}\r\n\r\n/**\r\n * Check if the fetch's response http code is between 200 and 300, meaning this successed.\r\n * In case of success, parse the json payload.\r\n * In case of failure due to HTTP code, try to parse the JSON response that may contain the reason and reject it.\r\n * In case of network failure, the fetch rejected before this function is called.\r\n * In case of failure due to no-JSON payload, an exception is rejected.\r\n * @param {Response} response\r\n * @returns Promise<any>\r\n */\r\nfunction httpCheckCodeAndParseJson (response) {\r\n  return response.ok ? response.json() : Promise.reject(response.json())\r\n}\r\n\n\n//# sourceURL=webpack://basic-rate-graph/./src/http.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.js */ \"./src/table.js\");\n\r\n\r\n\r\nconst feedbackParagraph = document.getElementById('js-init-feedback')\r\nconst tickerSelect = document.getElementById('js-select-ticker')\r\nconst domContainer = document.getElementById('js-output-container')\r\n\r\n// notify successful load of the index.js file\r\nfeedbackParagraph.style.color = 'green'\r\nfeedbackParagraph.innerText = 'JS has been loaded succesfully'\r\n\r\n// register an event (using callback asynchronous style) called when user changes the selected ticker.\r\ntickerSelect.addEventListener('change', async event => {\r\n  if (!(event.target instanceof window.HTMLSelectElement)) return\r\n\r\n  const ticker = /** @type {import(\"./api.js\").Ticker} */ (event.target.value)\r\n  const rateHistory = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.apiGetRateHistory)(ticker)\r\n\r\n  domContainer.innerHTML = '' // clear content of the div container\r\n  domContainer.appendChild((0,_table_js__WEBPACK_IMPORTED_MODULE_1__.renderRates)(rateHistory))\r\n})\r\n\n\n//# sourceURL=webpack://basic-rate-graph/./src/index.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderRates: () => (/* binding */ renderRates)\n/* harmony export */ });\n/**\r\n * Render the 5-years rate history as a table.\r\n * @param {import(\"./api\").RateHistoryResponse} rateHistory - The unserialized rate history fetch from API.\r\n * @returns {HTMLTableElement}\r\n */\r\nfunction renderRates (rateHistory) {\r\n  const table = document.createElement('table')\r\n  const tbody = document.createElement('tbody')\r\n  table.appendChild(renderTableHeader())\r\n  table.appendChild(tbody)\r\n\r\n  for (const { z: { dateTime, open, close, high, low, volume } } of rateHistory.chart) {\r\n    const tr = document.createElement('tr')\r\n    tr.appendChild(createNodeWithText('td', dateTime.toISOString().split('T')[0]))\r\n    for (const price of [open, close, high, low]) tr.appendChild(createNodeWithText('td', formatPriceUSD(price)))\r\n    tr.appendChild(createNodeWithText('td', volume.toString()))\r\n    tbody.appendChild(tr)\r\n  }\r\n\r\n  return table\r\n}\r\n\r\n/**\r\n * Returns the table thead element.\r\n * @returns {HTMLTableSectionElement}\r\n */\r\nfunction renderTableHeader () {\r\n  const thead = document.createElement('thead')\r\n  const tr = thead.appendChild(document.createElement('tr'))\r\n  tr.appendChild(createNodeWithText('th', 'Date'))\r\n  tr.appendChild(createNodeWithText('th', 'Open price'))\r\n  tr.appendChild(createNodeWithText('th', 'Close price'))\r\n  tr.appendChild(createNodeWithText('th', 'High price'))\r\n  tr.appendChild(createNodeWithText('th', 'Low price'))\r\n  tr.appendChild(createNodeWithText('th', 'Volume'))\r\n  return thead\r\n}\r\n\r\n/**\r\n * Returns a new element with an inner text, created such way it should not be vulnerable to XSS.\r\n * @see {@link https://stackoverflow.com/questions/52707031/does-innertext-prevent-xss}\r\n * @param {\"td\"|\"th\"} tagName - The kind of tag you want to create\r\n * @param {string} innerText - The content of element.innerText\r\n * @returns {HTMLTableDataCellElement | HTMLTableHeaderCellElement}\r\n */\r\nfunction createNodeWithText (tagName, innerText) {\r\n  if (!['td', 'th'].includes(tagName)) {\r\n    throw new Error(`Refuse to create not whitelisted ${tagName} with arbitrary innerText`)\r\n  }\r\n\r\n  const element = document.createElement(tagName)\r\n  element.innerText = innerText\r\n  return element\r\n}\r\n\r\n/**\r\n * Format a price with 2 decimals in USD currency.\r\n * @param {number} price\r\n * @returns {string}\r\n */\r\nfunction formatPriceUSD (price) {\r\n  return '$' + price.toFixed(2)\r\n}\r\n\n\n//# sourceURL=webpack://basic-rate-graph/./src/table.js?");

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