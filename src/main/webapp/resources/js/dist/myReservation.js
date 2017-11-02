/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

undefined;

__webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [
  __webpack_require__(0), __webpack_require__(2), __webpack_require__(11), __webpack_require__(10), __webpack_require__(15)
]; (function($, ajaxRequest, HandlebarsWrapper, Formatter, cards) {
  var STATE = {
    NOT_USED: 0,
    CONFIRMED: 1,
    USED: 2,
    CANCELED: 3
  };

  var typeCounts = [];

  var $unUsedCards = $(cards[STATE.NOT_USED].targetTag);
  var $confirmedCards = $(cards[STATE.CONFIRMED].targetTag);
  var $usedCards = $(cards[STATE.USED].targetTag);
  var $canceledCards = $(cards[STATE.CANCELED].targetTag);
  var $popupBookingWrapper = $(".popup_booking_wrapper");

  function init() {
    ajaxRequest("/api/reservations/my", "GET").then(function(data) {
      setBookingTypeCount(data.typeCounts);
      drawReservations(data.reservations);
      initEvent();
    });
  }

  var $currentCard = null;

  function initEvent() {
    $unUsedCards.on("click", "button.btn", showCancelPopup);
    $confirmedCards.on("click", "button.btn", showCancelPopup);
    $usedCards.on("click", "button.btn", moveReviewWrite);
    $popupBookingWrapper.on("click", ".btn_gray", hideCancelPopup);
    $popupBookingWrapper.on("click", ".btn_green", cancel);
    $popupBookingWrapper.on("click", hideCancelPopup);
  }

  function hideCancelPopup(e) {
    $popupBookingWrapper.hide();
    e.preventDefault();
  }

  function showCancelPopup(e) {
    $currentCard = $(e.currentTarget).closest("article");
    var productName = $currentCard.find(".tit").text();
    var period = $currentCard.find(".item_dsc:eq(0)").text();

    updateCancelPopup(productName, period);

    $popupBookingWrapper.show();
    e.preventDefault();
  }

  function updateCancelPopup(productName, period) {
    $popupBookingWrapper.find(".pop_tit > span").text(productName);
    $popupBookingWrapper.find(".pop_tit > .sm").text(period);
  }

  function cancel(e) {
    if (isEmpty($currentCard.siblings("article"))) {
      $currentCard.closest("li").hide();
    }
    typeCounts[STATE.CONFIRMED]--;
    typeCounts[STATE.CANCELED]++;
    $.each(typeCounts, function(i, v) {
      $(".summary_board li.item[data-bk-type='" + i + "'] .figure").text(v);
    });
    $currentCard.find("div.booking_cancel").addClass("hide");
    $currentCard.appendTo(cards[STATE.CANCELED].targetTag);
    hideCancelPopup(e);

    var id = $currentCard.data("id");
    updateBookingState(id, STATE.CANCELED);
    e.preventDefault();
  }

  function updateBookingState(id, state) {
    ajaxRequest("/api/reservations/" + id, "PUT", JSON.stringify({
      "reservationType": state
    })).then(function() {
      console.log("success");
    }, function() {
      console.log("failed");
    });
  }

  function isEmpty($target) {
    if ($target.length === 0) {
      return true;
    }
    return false;
  }

  function moveReviewWrite(e) {
    $currentCard = $(e.currentTarget).closest("article");
    var productId = $currentCard.data("productId");
    window.location.href = "/products/" + productId + "/review";
    e.preventDefault();
  }

  function setBookingTypeCount(dataTypeCounts) {
    typeCounts[STATE.NOT_USED] = dataTypeCounts[0] + dataTypeCounts[1] + dataTypeCounts[2] + dataTypeCounts[3];
    typeCounts[STATE.CONFIRMED] = dataTypeCounts[0] + dataTypeCounts[1];
    typeCounts[STATE.USED] = dataTypeCounts[2];
    typeCounts[STATE.CANCELED] = dataTypeCounts[3];
    $.each(typeCounts, function(i, v) {
      $(".summary_board li.item[data-bk-type='" + i + "'] .figure").text(v);
    });
  }

  function drawReservations(dataReservations) {
    if (!dataReservations.hasOwnProperty()) {
      $(".wrap_mylist").addClass("hide");
      $(".err").removeClass("hide");
      return;
    }
    $.map(dataReservations, function(v, i) {
      if (v) {
        v.forEach(addExValues);
        $(cards[i].targetTag).removeClass("hide");
        HandlebarsWrapper(cards[i].templateId, cards[i].targetTag, v, "append");
      }
    });
  }

  function addExValues(reservation) {
    reservation.period = Formatter.getPeriod(reservation.product.productDisplay.displayStart, reservation.product.productDisplay.displayEnd);
    reservation.ticketCounts = Formatter.getTicketCountString(reservation.generalTicketCount, reservation.youthTicketCount, reservation.childTicketCount);
    reservation.totalPrice = reservation.totalPrice.toLocaleString();
  }

  $(init());
}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);


/***/ })

/******/ });