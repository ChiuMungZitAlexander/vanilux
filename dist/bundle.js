/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStore)
/* harmony export */ });
function createStore(dispatcher, initState) {
    var subscribers = [];
    var curState = initState;
    return {
        subscribe: function (subscriberFn) {
            subscribers.push(subscriberFn);
        },
        dispatch: function (action) {
            curState = JSON.parse(JSON.stringify(dispatcher(action, curState)));
            subscribers.forEach(function (subscriberFn) { return subscriberFn(curState); });
        },
    };
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbHV4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZhbmlsdXgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZhbmlsdXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92YW5pbHV4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmFuaWx1eC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNXZSxTQUFTLFdBQVcsQ0FDakMsVUFBdUIsRUFDdkIsU0FBa0I7SUFFbEIsSUFBTSxXQUFXLEdBQW1CLEVBQUUsQ0FBQztJQUN2QyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFFekIsT0FBTztRQUNMLFNBQVMsRUFBRSxVQUFDLFlBQVk7WUFDdEIsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsUUFBUSxFQUFFLFVBQUMsTUFBTTtZQUNmLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVksSUFBSyxtQkFBWSxDQUFDLFFBQVEsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDaEUsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW50ZXJmYWNlIElTdG9yZSB7XG4gIHN1YnNjcmliZTogKHN1YnNjcmliZUZuOiBJU3Vic2NyaWJlRm4pID0+IHZvaWQ7XG4gIGRpc3BhdGNoOiAoYWN0aW9uOiBJQWN0aW9uKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSURpc3BhdGNoZXIge1xuICA8VD4oYWN0aW9uOiBJQWN0aW9uLCBjdXJTdGF0ZTogVCk6IFQ7XG59XG5cbmludGVyZmFjZSBJQWN0aW9uIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVN1YnNjcmliZUZuIHtcbiAgKGN1clN0YXRlOiB1bmtub3duKTogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RvcmUoXG4gIGRpc3BhdGNoZXI6IElEaXNwYXRjaGVyLFxuICBpbml0U3RhdGU6IHVua25vd25cbik6IElTdG9yZSB7XG4gIGNvbnN0IHN1YnNjcmliZXJzOiBJU3Vic2NyaWJlRm5bXSA9IFtdO1xuICBsZXQgY3VyU3RhdGUgPSBpbml0U3RhdGU7XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IChzdWJzY3JpYmVyRm4pID0+IHtcbiAgICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlckZuKTtcbiAgICB9LFxuICAgIGRpc3BhdGNoOiAoYWN0aW9uKSA9PiB7XG4gICAgICBjdXJTdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGlzcGF0Y2hlcihhY3Rpb24sIGN1clN0YXRlKSkpO1xuICAgICAgc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3Vic2NyaWJlckZuKSA9PiBzdWJzY3JpYmVyRm4oY3VyU3RhdGUpKTtcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==