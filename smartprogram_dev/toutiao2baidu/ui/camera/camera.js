module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
exports.default = {
    methods: {
        selectComponent: function selectComponent(selector) {},
        selectAllComponents: function selectAllComponents(selctor) {},
        setStyle: function setStyle(styleDict) {
            var onekit_styles = '';
            for (var _iterator = Object.keys(styleDict), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var cssName = _ref;

                onekit_styles += cssName + ':' + styleDict[cssName] + ';';
            }
            this.setData({ onekit_styles: onekit_styles });
        },
        addClass: function addClass(className) {},
        removeClass: function removeClass(className) {},
        hasClass: function hasClass(className) {},
        getDataset: function getDataset() {},
        callMethod: function callMethod(funcName, args) {},
        requestAnimationFrame: function requestAnimationFrame(callback) {},
        getState: function getState() {},
        getComputedStyle: function getComputedStyle(cssNames) {}
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: ''
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  props: {},
  methods: {
    ui_tap: function ui_tap() {
      if (this.props.ontap) {
        this.props.ontap();
      }
    },
    ui_touchstart: function ui_touchstart() {
      if (this.props.ontouchstart) {
        this.props.ontouchstart();
      }
    },
    ui_touchmove: function ui_touchmove() {
      if (this.props.ontouchmove) {
        this.props.ontouchmove();
      }
    },
    ui_touchcancel: function ui_touchcancel() {
      if (this.props.ontouchcancel) {
        this.props.ontouchcancel();
      }
    },
    ui_touchend: function ui_touchend() {
      if (this.props.ontouchend) {
        this.props.ontouchend();
      }
    },
    ui_longpress: function ui_longpress() {
      if (this.props.onlongpress) {
        this.props.onlongpress();
      }
    },
    ui_longtap: function ui_longtap() {
      if (this.props.onlongtap) {
        this.props.onlongtap();
      }
    },
    ui_transitionend: function ui_transitionend() {
      if (this.props.ontransitionend) {
        this.props.ontransitionend();
      }
    },
    ui_animationstart: function ui_animationstart() {
      if (this.props.onanimationstart) {
        this.props.onanimationstart();
      }
    },
    ui_animationiteration: function ui_animationiteration() {
      if (this.props.onanimationiteration) {
        this.props.onanimationiteration();
      }
    },
    ui_animationend: function ui_animationend() {
      if (this.props.onanimationend) {
        this.props.onanimationend();
      }
    },
    ui_touchforcechange: function ui_touchforcechange() {
      if (this.props.ontouchforcechange) {
        this.props.ontouchforcechange();
      }
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _oneutil = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import CanvasContext from './api/CanvasContext'
// import VideoContext from './api/VideoContext'
// import LivePlayerContext from './api/LivePlayerContext'
// // import Context from "./api/Context.js"
var tt = function () {
  function tt() {
    _classCallCheck(this, tt);
  }

  tt.canIuse = function canIuse() {
    return true;
  };

  tt.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    return _oneutil.STRING.base64ToArrayBuffer(base64);
  };

  tt.arrayBufferToBase64 = function arrayBufferToBase64(arrybufferr) {
    var base64Content = Buffer.from(arrybufferr).toString('base64');
    return base64Content;
  };

  tt.getLaunchOptionsSync = function getLaunchOptionsSync() {
    // baidu is not surpport
  };

  tt.exitMiniProgram = function exitMiniProgram() {
    // baidu is not support
  };

  return tt;
}();
//   // ///////////////// animation //////////////////////////
//   static createAnimation(object) { return swan.createAnimation(object) }

//   // /////////////// basic ////////////////////////////////
//   static canIUse(object) { return true }

//   static getSystemInfo(object) { return swan.getSystemInfo(object) }

//   static getSystemInfoSync() { return swan.getSystemInfoSync() }

//   static base64ToArrayBuffer(base64) { return swan.base64ToArrayBuffer(object) }

//   static arrayBufferToBase64(arrayBuffer) { return swan.arrayBufferToBase64(object) }

//   static getUpdateManager(object) { return swan.getUpdateManager(object) }

//   static getLaunchOptionsSync(object) { return swan.getLaunchOptionsSync(object) }

//   static offPageNotFound(object) { return swan.offPageNotFound(object) }

//   static onPageNotFound(object) { return swan.onPageNotFound(object) }

//   static offError(object) { return swan.offError(object) }

//   static onError(object) { return swan.onError(object) }

//   static offAppShow(object) { return swan.offAppShow(object) }

//   static onAppShow(object) { return swan.onAppShow(object) }

//   static offAppHide(object) { return swan.offAppHide(object) }

//   static onAppHide(object) { return swan.onAppHide(object) }

//   static setEnableDebug(object) { return swan.setEnableDebug(object) }

//   static getLogManager(object) { return swan.getLogManager(object) }

//   static createContext() { return new Context() }

//   static createCanvasContext(canvasId) {
//     return new CanvasContext(swan.createCanvasContext(canvasId))
//   }

//   static createLivePlayerContext(livePlayerId) {
//     return new LivePlayerContext(swan.createLivePlayerContext(livePlayerId))
//   }

//   static createVideoContext(videoId) {
//     return new VideoContext(swan.createVideoContext(videoId))
//   }

//   static canvasToTempFilePath(object) { return swan.canvasToTempFilePath(object) }

//   static canvasPutImageData(object) { return swan.canvasPutImageData(object) }

//   static canvasGetImageData(object) { return swan.canvasGetImageData(object) }

//   // //////////// Device //////////////////
//   static onBeaconServiceChange(object) { return swan.onBeaconServiceChange(object) }

//   static onBeaconUpdate(object) { return swan.onBeaconUpdate(object) }

//   static getBeacons(object) { return swan.getBeacons(object) }

//   static stopBeaconDiscovery(object) { return swan.stopBeaconDiscovery(object) }

//   static startBeaconDiscovery(object) { return swan.startBeaconDiscovery(object) }

//   static stopWifi(object) { return swan.stopWifi(object) }

//   static startWifi(object) { return swan.startWifi(object) }

//   static setWifiList(object) { return swan.setWifiList(object) }

//   static onWifiConnected(object) { return swan.onWifiConnected(object) }

//   static onGetWifiList(object) { return swan.onGetWifiList(object) }

//   static getWifiList(object) { return swan.getWifiList(object) }

//   static getConnectedWifi(object) { return swan.getConnectedWifi(object) }

//   static connectWifi(object) { return swan.connectWifi(object) }

//   //
//   static onAccelerometerChange(callback) { return swan.onAccelerometerChange(callback) }

//   static stopAccelerometer(object) { return swan.stopAccelerometer(object) }

//   static startAccelerometer(object) { return swan.startAccelerometer(object) }

//   static getBatteryInfoSync(object) { return swan.getBatteryInfoSync(object) }

//   static _getBatteryInfo(result) { return swan._getBatteryInfo(object) }

//   static getBatteryInfo(object) { return swan.getBatteryInfo(object) }

//   //
//   static getClipboardData(object) { return swan.getClipboardData(object) }

//   static setClipboardData(object) { return swan.setClipboardData(object) }

//   static onCompassChange(callback) { return swan.onCompassChange(callback) }

//   static stopCompass(object) { return swan.stopCompass(object) }

//   static startCompass(object) { return swan.startCompass(object) }

//   static addPhoneContact(object) { return swan.addPhoneContact(object) }

//   static onGyroscopeChange(callback) { return swan.onGyroscopeChange(object) }

//   static stopGyroscope(object) { return swan.stopGyroscope(object) }

//   static startGyroscope(object) { return swan.startGyroscope(object) }

//   //
//   static onDeviceMotionChange(object) { return swan.onDeviceMotionChange(object) }

//   static stopDeviceMotionListening(object) { return swan.stopDeviceMotionListening(object) }

//   static startDeviceMotionListening(object) { return swan.startDeviceMotionListening(object) }

//   static startDeviceMotionListening(object) { return swan.startDeviceMotionListening(object) }

//   //
//   static getNetworkType = function (object) { return swan.getNetworkType(object) }

//   static _network = function (res) { return swan._network(object) }

//   static onNetworkStatusChange(callback) { return swan.onNetworkStatusChange(callback) }

//   //
//   static makePhoneCall = function (object) { return swan.makePhoneCall(object) }

//   static scanCode = function (object) { return swan.scanCode(object) }

//   //
//   static vibrateLong(object) { return swan.vibrateLong(object) }

//   static vibrateShort(object) { return swan.vibrateShort(object) }

//   //
//   static onMemoryWarning(object) { return swan.onMemoryWarning(object) }

//   //
//   static writeBLECharacteristicValue(object) { return swan.writeBLECharacteristicValue(object) }

//   static readBLECharacteristicValue(object) { return swan.readBLECharacteristicValue(object) }

//   static onBLEConnectionStateChange(object) { return swan.onBLEConnectionStateChange(object) }

//   static onBLECharacteristicValueChange(object) {
//   return swan.onBLECharacteristicValueChange(object)
// }

//   static notifyBLECharacteristicValueChange(object) {
//   return swan.notifyBLECharacteristicValueChange(object)
// }

//   static getBLEDeviceServices(object) { return swan.getBLEDeviceServices(object) }

//   static getBLEDeviceCharacteristics(object) { return swan.getBLEDeviceCharacteristics(object) }

//   static createBLEConnection(object) { return swan.createBLEConnection(object) }

//   static closeBLEConnection(object) { return swan.closeBLEConnection(object) }

//   //
//   static stopBluetoothDevicesDiscovery(object) { /*
// return swan.stopBluetoothDevicesDiscovery(object);
//  */ }

//   static startBluetoothDevicesDiscovery(object) {
//   return swan.startBluetoothDevicesDiscovery(object)
// }

//   static openBluetoothAdapter(object) { /* return swan.openBluetoothAdapter(object); */ }

//   static onBluetoothDeviceFound(object) { return swan.onBluetoothDeviceFound(object) }

//   static onBluetoothAdapterStateChange(object) {
//   return swan.onBluetoothAdapterStateChange(object)
// }

//   static getConnectedBluetoothDevices(object) {
//   return swan.getConnectedBluetoothDevices(object)
// }

//   static getBluetoothDevices(object) { return swan.getBluetoothDevices(object) }

//   static getBluetoothAdapterState(object) { return swan.getBluetoothAdapterState(object) }

//   static closeBluetoothAdapter(object) { return swan.closeBluetoothAdapter(object) }

//   //
//   static stopHCE(object) { return swan.stopHCE(object) }

//   static startHCE(object) { return swan.startHCE(object) }

//   static sendHCEMessage(object) { return swan.sendHCEMessage(object) }

//   static onHCEMessage(object) { return swan.onHCEMessage(object) }

//   static getHCEState(object) { return swan.getHCEState(object) }

//   //
//   static setScreenBrightness(object) { return swan.setScreenBrightness(object) }

//   static setKeepScreenOn(object) { return swan.setKeepScreenOn(object) }

//   static onUserCaptureScreen(object) { return swan.onUserCaptureScreen(object) }

//   static getScreenBrightness(object) { return swan.getScreenBrightness(object) }

//   // ///////////////// Ext //////////////
//   static getExtConfigSync(object) { return swan.getExtConfigSync(object) }

//   static getExtConfig(object) { return swan.getExtConfig(object) }

//   // ////////////////// File //////////
//   static getFileSystemManager(object) { return swan.getFileSystemManager(object) }

//   static getFileInfo(object) { return swan.getFileInfo(object) }

//   static removeSavedFile(object) { return swan.removeSavedFile(object) }

//   static getSavedFileInfo(object) { return swan.getSavedFileInfo(object) }

//   static getSavedFileList(object) { return swan.getSavedFileList(object) }

//   static openDocument(object) { return swan.openDocument(object) }

//   static saveFile(object) { return swan.saveFile(object) }

//   // ////////// Location ///////////////
//   static openLocation(object) { return swan.openLocation(object) }

//   static getLocation(object) { return swan.getLocation(object) }

//   static chooseLocation(object) { return swan.chooseLocation(object) }

//   // //////// Media ////////////////////
//   static createMapContext(object) { return swan.createMapContext(object) }

//   static compressImage(object) { return swan.compressImage(object) }

//   static saveImageToPhotosAlbum(object) { return swan.saveImageToPhotosAlbum(object) }

//   static getImageInfo(object) { return swan.getImageInfo(object) }

//   static previewImage(object) { return swan.previewImage(object) }

//   static chooseImage(object) { return swan.chooseImage(object) }

//   static saveVideoToPhotosAlbum(object) { return swan.saveVideoToPhotosAlbum(object) }

//   static chooseVideo(object) { return swan.chooseVideo(object) }

//   static createVideoContext(object) { return swan.createVideoContext(object) }

//   static stopVoice(object) { return swan.stopVoice(object) }

//   static pauseVoice(object) { return swan.pauseVoice(object) }

//   static playVoice(object) { return swan.playVoice(object) }

//   static setInnerAudioOption(object) { return swan.setInnerAudioOption(object) }

//   static getAvailableAudioSources(object) { return swan.getAvailableAudioSources(object) }

//   static createInnerAudioContext(object) { return swan.createInnerAudioContext(object) }

//   static createAudioContext(object) { return swan.createAudioContext(object) }

//   static onBackgroundAudioStop(object) { return swan.onBackgroundAudioStop(object) }

//   static onBackgroundAudioPause(object) { return swan.onBackgroundAudioPause(object) }

//   static onBackgroundAudioPlay(object) { return swan.onBackgroundAudioPlay(object) }

//   static stopBackgroundAudio(object) { return swan.stopBackgroundAudio(object) }

//   static seekBackgroundAudio(object) { return swan.seekBackgroundAudio(object) }

//   static pauseBackgroundAudio(object) { return swan.pauseBackgroundAudio(object) }

//   static playBackgroundAudio(object) { return swan.playBackgroundAudio(object) }

//   static getBackgroundAudioPlayerState(object) {
//   return swan.getBackgroundAudioPlayerState(object)
// }

//   static getBackgroundAudioManager(object) { return swan.getBackgroundAudioManager(object) }

//   static createLivePusherContext(object) { return swan.createLivePusherContext(object) }

//   static getRecorderManager(object) { return swan.getRecorderManager(object) }

//   // ////////////// Network ///////////////
//   static request(object) { return swan.request(object) }

//   static downloadFile(object) { return swan.downloadFile(object) }

//   static uploadFile(object) { return swan.uploadFile(object) }

//   //
//   static connectSocket(object) { return swan.connectSocket(object) }

//   static onSocketError(object) { return swan.onSocketError(object) }

//   static onSocketMessage(object) { return swan.onSocketMessage(object) }

//   static onSocketClose(object) { return swan.onSocketClose(object) }

//   static onSocketOpen(object) { return swan.connectSocket(object) }

//   static sendSocketMessage(object) { return swan.sendSocketMessage(object) }

//   static closeSocket(object) { return swan.closeSocket(object) }

//   static offLocalServiceResolveFail(object) { return swan.offLocalServiceResolveFail(object) }

//   static onLocalServiceResolveFail(object) { return swan.onLocalServiceResolveFail(object) }

//   static offLocalServiceDiscoveryStop(object) {
//   return swan.offLocalServiceDiscoveryStop(object)
//  }

//   static onLocalServiceDiscoveryStop(object) { return swan.onLocalServiceDiscoveryStop(object) }

//   static offLocalServiceLost(object) { return swan.offLocalServiceLost(object) }

//   static onLocalServiceLost(object) { return swan.onLocalServiceLost(object) }

//   static offLocalServiceFound(object) { return swan.offLocalServiceFound(object) }

//   static onLocalServiceFound(object) { return swan.onLocalServiceFound(object) }

//   static stopLocalServiceDiscovery(object) { return swan.stopLocalServiceDiscovery(object) }

//   static startLocalServiceDiscovery(object) { return swan.startLocalServiceDiscovery(object) }

//   //
//   static stopLocalServiceDiscovery(object) { return swan.stopLocalServiceDiscovery(object) }

//   static startLocalServiceDiscovery(object) { return swan.startLocalServiceDiscovery(object) }

//   static onLocalServiceResolveFail(callback) { return swan.onLocalServiceResolveFail(callback) }

//   static onLocalServiceLost(callback) { return swan.onLocalServiceLost(callback) }

//   static onLocalServiceFound(callback) { return swan.onLocalServiceFound(callback) }

//   static onLocalServiceDiscoveryStop(callback) {
//   return swan.onLocalServiceDiscoveryStop(callback)
// }

//   static offLocalServiceResolveFail(callback) {
//   return swan.offLocalServiceResolveFail(callback)
// }

//   static offLocalServiceLost(callback) { return swan.offLocalServiceLost(callback) }

//   static offLocalServiceFound(callback) { return swan.offLocalServiceFound(callback) }

//   static offLocalServiceDiscoveryStop(callback) {
//   return swan.offLocalServiceDiscoveryStop(callback)
// }

//   // /////// Open Interface //////////
//   static _checkSession() {
//     const now = new Date().getTime()
//     return getApp().onekitwx._jscode &&
// getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3
//   }

//   static checkSession(object) {
//     if (tt._checkSession()) {
//       if (object.success) {
//         object.success()
//       }
//       if (object.complete) {
//         object.complete()
//       }
//     } else {
//       if (object.fail) {
//         object.fail()
//       }
//       if (object.complete) {
//         object.complete()
//       }
//     }
//   }

//   static login = function (object) {
//     const that = this
//     if (!object) {
//       return swan.login(object)
//     }
//     const object2 = { }
//     object2.success = function (res) {
//       getApp().onekitwx._jscode = res.code
//       getApp().onekitwx._login = new Date().getTime()
//       const result = {code: res.code}
//       if (object.success) {
//         object.success(result)
//       }
//       if (object.complete) {
//         object.complete(complete)
//       }
//     }
//     object2.fail = function (res) {
//       if (object.fail) {
//         object.fail(res)
//       }
//       if (object.complete) {
//         object.complete(res)
//       }
//     }
//     if (tt._checkSession()) {
//       object2.success({code: getApp().onekitwx._jscode})
//     } else {
//       swan.login(object2)
//     }
//   };

//   static _getUserInfo(data, callback) {
//     tt.login({
//       success(res) {
//         console.log(res)
//         const code = res.code
//         const withCredentials = getApp().onekitwx.getuserinfo_withCredentials === true
//         const url = getApp().onekitwx.server + 'userinfo'
//         swan.request({
//           url,
//           header: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           method: 'POST',
//           data: {
//             code,
//             withCredentials,
//             data: JSON.stringify(data)
//           },
//           success(res) {
//             callback(res.data)
//           },
//           fail(res) {
//             console.log(res)
//             callback(res)
//           }
//         })
//       },
//       fail(res) {
//         console.log(res)
//       }

//     })
//   }

//   static getUserInfo(object) {
//     getApp().onekitwx.getuserinfo_withCredentials = object.withCredentials
//     getApp().onekitwx.getuserinfo = (data) => {
//       tt._getUserInfo(data, (res) => {
//         if (object.success) {
//           object.success(res)
//         }
//         if (object.complete) {
//           object.complete(res)
//         }
//       })
//     }
//     swan.navigateTo({
//       url: '/onekitwx/page/getuserinfo/getuserinfo'
//     })
//   }

//   static getOpenData = function (object) { return swan.getOpenData(object) }

//   static _getPhoneNumber = function (data, callback) {
//     tt.login({
//       success: (res) => {
//         const code = res.code
//         const url = getApp().onekitwx.server + 'phonenumber'
//         console.log(data)
//         swan.request({
//           url,
//           header: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           method: 'POST',
//           data: {
//             data: JSON.stringify(data),
//             code
//           },
//           success(res) {
//             const data = res.data
//             callback(data)
//           },
//           fail(res) {
//             console.log(res.data)
//           }
//         })
//       }
//     })
//   }

//   static getPhoneNumber = function (object) {
//     getApp().onekitwx._bindgetphonenumber = (data) => {
//       tt._getPhoneNumber(data, (res) => {
//         if (object.success) {
//           object.success(res)
//         }
//         if (object.complete) {
//           object.complete(res)
//         }
//       })
//     }
//     swan.navigateTo({url: 'page/getphonenumber'})
//   };

//   static navigateToMiniProgram(object) { return swan.navigateToMiniProgram(object) }

//   static navigateBackMiniProgram(object) { return swan.navigateBackMiniProgram(object) }

//   static getAccountInfoSync(object) { return swan.getAccountInfoSync(object) }

//   static reportMonitor(object) { return swan.reportMonitor(object) }

//   static reportAnalytics(object, eventName) { return swan.reportAnalytics(object, eventName) }

//   static pay(object) {
//     const url = getApp().onekitwx.server + 'orderinfo'
//     swan.request({
//       url,
//       method: 'POST',
//       header: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data: {
//         orderInfo: JSON.stringify(object.orderInfo)
//       },
//       success(res) {
//         console.log(res)
//         const data = {
//           out_order_no: res.data.tpOrderId
//         }
//         swan.requestPolymerPayment({
//           orderInfo: res.data,
//           success(res) {
//             if (object.getOrderStatus) {
//               object.getOrderStatus(data)
//               console.log('ok')
//             }
//           },
//           fail(res) {
//             console.log(res)
//           }
//         })
//       },
//       fail(res) {
//         console.log(res)
//       },
//       fail(res) {
//         console.log(res)
//       }
//     })
//   }

//   static authorize(object) { return swan.authorize(object) }

//   static openSetting(object) { return swan.openSetting(object) }

//   static getSetting(object) { return swan.getSetting(object) }

//   static chooseAddress(object) { return swan.chooseAddress(object) }

//   static openCard(object) { return swan.openCard(object) }

//   static addCard = function (object) { return swan.addCard(object) }

//   static chooseInvoiceTitle(object) { return swan.chooseInvoiceTitle(object) }

//   static chooseInvoice(object) { return swan.chooseInvoice(object) }

//   static startSoterAuthentication(object) { return swan.startSoterAuthentication(object) }

//   static checkIsSupportSoterAuthentication(object) {
//   return swan.checkIsSupportSoterAuthentication(object)
// }

//   static checkIsSoterEnrolledInDevice(object) {
//   return swan.checkIsSoterEnrolledInDevice(object)
// }

//   static getWeRunData(object) { return swan.getWeRunData(object) }

//   static reportMonitor(name, value) {
//     const js_code = getApp().onekit.jscode
//     swan.httpRequest({
//       url: 'http://192.168.0.106:8080/onekit-adapter/reportMonitor',
//       header: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       method: 'POST',
//       data: {
//         js_code,
//         name,
//         number: value
//       },
//       success: (res) => {
//         console.log('success')
//         console.log(res.data)
//       },
//       fail(res) {
//         console.log(res)
//       },
//       complete(res) {
//         console.log(res)
//       }

//     })
//   }

//   // //////// Router //////////////
//   static navigateBack(object) { return swan.navigateBack(object) }

//   static switchTab(object) { return swan.switchTab(object) }

//   static navigateTo(object) { return swan.navigateTo(object) }

//   static reLaunch(object) { return swan.reLaunch(object) }

//   static redirectTo(object) { return swan.redirectTo(object) }

//   // /////////// Share /////////////
//   static updateShareMenu(object) { return swan.updateShareMenu(object) }

//   static showShareMenu(object) { return swan.showShareMenu(object) }

//   static hideShareMenu(object) { return swan.hideShareMenu(object) }

//   static getShareInfo(object) { return swan.getShareInfo(object) }

//   // ///////////// Storage //////////////
//   static getStorageInfoSync(object) { return swan.getStorageInfoSync(object) }

//   static getStorageInfo(object) { return swan.getStorageInfo(object) }

//   static clearStorageSync(object) { return swan.clearStorageSync(object) }

//   static clearStorage(object) { return swan.clearStorage(object) }

//   static removeStorageSync(object) { return swan.removeStorageSync(object) }

//   static removeStorage(object) { return swan.removeStorage(object) }

//   static setStorageSync(key, value) { return swan.setStorageSync(key, value) }

//   static setStorage(object) { return swan.setStorage(object) }

//   static getStorageSync(key) { return swan.getStorageSync(key) }

//   static getStorage(object) { return swan.getStorage(object) }

//   // //////////// UI ////////////////
//   static showActionSheet(object) { return swan.showActionSheet(object) }

//   // static redirectTo(object) { return swan.redirectTo(object) }
//   // static redirectTo(object) { return swan.redirectTo(object) }
//   static hideLoading(object) { return swan.hideLoading(object) }

//   static showLoading(object) { return swan.showLoading(object) }

//   static hideToast(object) { return swan.hideToast(object) }

//   static showToast(object) { return swan.showToast(object) }

//   static showModal(object) { return swan.showModal(object) }

//   static setNavigationBarColor(object) { return swan.setNavigationBarColor(object) }

//   static hideNavigationBarLoading(object) { return swan.hideNavigationBarLoading(object) }

//   static showNavigationBarLoading(object) { return swan.showNavigationBarLoading(object) }

//   static setNavigationBarTitle = function (object) { return swan.setNavigationBarTitle(object) };

//   static setBackgroundTextStyle(object) { return swan.setBackgroundTextStyle(object) }

//   static setBackgroundColor(object) { return swan.setBackgroundColor(object) }

//   static setTabBarItem(object) { return swan.setTabBarItem(object) }

//   static setTabBarStyle(object) { return swan.setTabBarStyle(object) }

//   static hideTabBar(object) { return swan.hideTabBar(object) }

//   static showTabBar(object) { return swan.showTabBar(object) }

//   static hideTabBarRedDot(object) { return swan.hideTabBarRedDot(object) }

//   static showTabBarRedDot(object) { return swan.showTabBarRedDot(object) }

//   static removeTabBarBadge(object) { return swan.removeTabBarBadge(object) }

//   static setTabBarBadge(object) { return swan.setTabBarBadge(object) }

//   static loadFontFace(object) { return swan.loadFontFace(object) }

//   static stopPullDownRefresh(object) { return swan.stopPullDownRefresh(object) }

//   static startPullDownRefresh(object) { return swan.startPullDownRefresh(object) }

//   static pageScrollTo(object) { return swan.pageScrollTo(object) }

//   static setTopBarText(object) { return swan.setTopBarText(object) }

//   static nextTick(object) { return swan.nextTick(object) }

//   static getMenuButtonBoundingClientRect(object) {
//   return swan.getMenuButtonBoundingClientRect(object)
// }

//   static offWindowResize(object) { return swan.offWindowResize(object) }

//   static onWindowResize(object) { return swan.onWindowResize(object) }

//   // //////////// Worker ///////////////
//   static createWorker(path) { return new WORKER(path) }

//   // //////////// WXML ///////////////
//   static createSelectorQuery(object) { return swan.createSelectorQuery(object) }

//   static createIntersectionObserver(object) { return swan.createIntersectionObserver(object) }

//   // ///////////////////////////////////
//   static hideKeyboard(object) { return swan.hideKeyboard(object) }

//   // /////////////////////////////////
//   static createARCameraContext(object) { throw new Error('createARCameraContext�ݲ�֧��!!') }
// }
// swan.ai = {}
// for (const api of
// ['ocrIdCard', 'ocrBankCard', 'ocrDrivingLicense', 'ocrVehicleLicense',
// 'textReview', 'textToAudio', 'imageAudit', 'advancedGeneralIdentify',
// 'objectDetectIdentify', 'carClassify', 'dishClassify', 'logoClassify',
// 'animalClassify', 'plantClassify', 'getVoiceRecognizer', 'faceDetect',
// 'faceMatch', 'faceSearch', 'facePersonVerify', 'facePersonIdmatch',
// 'faceLivenessSessioncode', 'nlpLexerCustom']) {
//   ai_init(api)
// }
// function ai_init(api) {
//   swan.ai[api] = (object) => swan_ai.run(api, object)
// }


exports.default = tt;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("oneutil");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tt = __webpack_require__(3);

var _tt2 = _interopRequireDefault(_tt);

var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

var _weixin_behavior = __webpack_require__(2);

var _weixin_behavior2 = _interopRequireDefault(_weixin_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
Component({
  behaviors: [_onekit_behavior2.default, _wxs_behavior2.default, _weixin_behavior2.default],
  data: {
    hideContact: true
  },
  attached: function attached() {},

  properties: {},
  methods: {
    bindgetuserinfo: function bindgetuserinfo(info) {
      console.log('[UI]', info);
      _tt2.default.getUserInfo({
        success: function success(res) {
          this.triggerEvent('getuserinfo', res);
        }
      });
    },
    button_onTap: function button_onTap(info) {
      console.log(info);
      console.log(this.properties);

      //    tt.getUserInfo({
      //            success(res){
      //         console.log("[API]",res);
      //         }
      //     });
    }
  }
});

/* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ })
/******/ ]);