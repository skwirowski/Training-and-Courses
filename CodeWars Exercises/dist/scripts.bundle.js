/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// @ts-check\nvar messageExample = 'I should have known that you would have a perfect answer for me!!!'; // ? \"J vltasl rlhr \", \"zdfog odxr ypw\", \" atasl rlhr p \", \"gwkzzyq zntyhv\", \" lvz wp!!!\"\n//* Helper data\n\nvar alphabetChars = 'abcdefghijklmnopqrstuvwxyz'; //* Helper functions\n\nvar transformStringToUpperCase = function transformStringToUpperCase(lowerCaseString) {\n  return lowerCaseString.split('').map(function (_char) {\n    return _char.toUpperCase();\n  }).join('');\n};\n\nvar shiftCharacters = function shiftCharacters(string, shift) {\n  var fixedStringSlice = string.slice(shift);\n  var shiftedStringSlice = string.slice(0, shift);\n  return fixedStringSlice + shiftedStringSlice;\n};\n\nvar findCharacterIndex = function findCharacterIndex(_char2, string) {\n  return string.indexOf(_char2);\n};\n\nvar switchCharacters = function switchCharacters(inputString, baseString, shift) {\n  var upperCaseBaseString = transformStringToUpperCase(baseString);\n  var iterations = inputString.length;\n  var maxShift = baseString.length - 1;\n  var switchedString = '';\n  var shiftIncrement = shift;\n\n  for (var i = 0; i < iterations; i += 1) {\n    var modifier = shiftCharacters(baseString, shiftIncrement);\n    var lowerCaseCheck = findCharacterIndex(inputString[i], baseString);\n    var upperCaseCheck = findCharacterIndex(inputString[i], upperCaseBaseString);\n\n    if (lowerCaseCheck !== -1) {\n      switchedString += modifier[lowerCaseCheck];\n    } else if (upperCaseCheck !== -1) {\n      switchedString += transformStringToUpperCase(modifier)[upperCaseCheck];\n    } else {\n      switchedString += inputString[i];\n    }\n\n    shiftIncrement >= maxShift ? shiftIncrement = 0 : shiftIncrement += 1;\n  }\n\n  return switchedString;\n};\n\nvar findDivision = function findDivision(string, divisor) {\n  return Math.ceil(string.length / divisor);\n};\n\nvar divideString = function divideString(string, parts) {\n  var divisor = findDivision(string, parts);\n  var newArray = [];\n  var repeats = 5;\n\n  for (var i = 0; repeats > 0; i += divisor) {\n    var part = string.substr(i, divisor) || 0;\n    newArray.push(part);\n    repeats -= 1;\n  }\n\n  return newArray;\n};\n\nfunction movingShift(s, shift) {\n  return switchCharacters(s, alphabetChars, shift);\n} // function demovingShift(arr, shift) {\n//   return \"\";\n// }\n\n\nconsole.log(movingShift(messageExample, 1));\nconsole.log(findDivision('iiiiiiiiiiiiiiiii', 5));\nconsole.log(divideString(movingShift(messageExample, 1), 5));\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ });