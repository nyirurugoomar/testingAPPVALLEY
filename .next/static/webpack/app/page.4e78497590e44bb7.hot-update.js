"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Testing.jsx":
/*!********************************!*\
  !*** ./components/Testing.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_Product_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/Product.json */ \"(app-pages-browser)/./data/Product.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Testing() {\n    _s();\n    const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const nextSlide = ()=>{\n        setSlideIndex((prevIndex)=>prevIndex + 1 >= Math.ceil(_data_Product_json__WEBPACK_IMPORTED_MODULE_3__.length / 4) ? 0 : prevIndex + 1);\n    };\n    const prevSlide = ()=>{\n        setSlideIndex((prevIndex)=>prevIndex === 0 ? Math.ceil(_data_Product_json__WEBPACK_IMPORTED_MODULE_3__.length / 4) - 1 : prevIndex - 1);\n    };\n    // Calculate the start and end indices of the cards to display\n    const startIndex = slideIndex * 4;\n    const endIndex = startIndex + 4;\n    // Slice the cardsData array to get only the cards to display\n    const displayedCards = _data_Product_json__WEBPACK_IMPORTED_MODULE_3__.slice(startIndex, endIndex);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"container mx-auto p-14\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \" md:flex md:grid-cols-2  \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"title mb-40 p-[4rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            class: \"text-[20px]  font-bold md:m-[30px]\",\n                            children: \"HOT DEAL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#999999] text-[10px] mt-10\",\n                            children: \"[UP TO 34% OFF] HAPPY HOUR\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10 gap-10 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cursor-pointer hidden lg:flex\",\n                                    onClick: nextSlide,\n                                    children: \"<\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cursor-pointer hidden lg:flex\",\n                                    onClick: prevSlide,\n                                    children: \">\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-4\",\n                    children: displayedCards.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"card bg-white shadow-md rounded-lg p-6 mx-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: card.url,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"w-[120px] h-[120px] m-4\",\n                                            src: card.url,\n                                            alt: card.name,\n                                            width: 100,\n                                            height: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"w-[9rem] text-[15px]\",\n                                        children: card.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"$\",\n                                            card.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: card.rate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, card.id, true, {\n                                fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Testing.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Testing, \"Chgf7CWoIiXrju8rJRx3dg0ygps=\");\n_c = Testing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testing);\nvar _c;\n$RefreshReg$(_c, \"Testing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVzdGluZy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFDVDtBQUNjO0FBQzdDLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNTSxZQUFZO1FBQ2hCRCxjQUFjLENBQUNFLFlBQ2JBLFlBQVksS0FBS0MsS0FBS0MsSUFBSSxDQUFDUCwrQ0FBU0EsQ0FBQ1EsTUFBTSxHQUFHLEtBQUssSUFBSUgsWUFBWTtJQUV2RTtJQUVBLE1BQU1JLFlBQVk7UUFDaEJOLGNBQWMsQ0FBQ0UsWUFDYkEsY0FBYyxJQUFJQyxLQUFLQyxJQUFJLENBQUNQLCtDQUFTQSxDQUFDUSxNQUFNLEdBQUcsS0FBSyxJQUFJSCxZQUFZO0lBRXhFO0lBRUEsOERBQThEO0lBQzlELE1BQU1LLGFBQWFSLGFBQWE7SUFDaEMsTUFBTVMsV0FBV0QsYUFBYTtJQUU5Qiw2REFBNkQ7SUFDN0QsTUFBTUUsaUJBQWlCWiwrQ0FBU0EsQ0FBQ2EsS0FBSyxDQUFDSCxZQUFZQztJQUNuRCxxQkFDRSw4REFBQ0c7UUFBSUMsT0FBTTtrQkFDVCw0RUFBQ0Q7WUFBSUMsT0FBTTs7OEJBQ1QsOERBQUNEO29CQUFJQyxPQUFNOztzQ0FDVCw4REFBQ0M7NEJBQUdELE9BQU07c0NBQXFDOzs7Ozs7c0NBQy9DLDhEQUFDRTs0QkFBRUMsV0FBVTtzQ0FBbUM7Ozs7OztzQ0FHaEQsOERBQUNKOzRCQUFJSSxXQUFVOzs4Q0FFYiw4REFBQ0M7b0NBQ0NELFdBQVU7b0NBQ1ZFLFNBQVNoQjs4Q0FDVjs7Ozs7OzhDQUdELDhEQUFDZTtvQ0FDQ0QsV0FBVTtvQ0FDVkUsU0FBU1g7OENBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLTCw4REFBQ0s7b0JBQUlJLFdBQVU7OEJBQ1pOLGVBQWVTLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbkIsOERBQUNSOzRCQUFJQyxPQUFNO3NDQUNULDRFQUFDRDtnQ0FBa0JJLFdBQVU7O2tEQUMzQiw4REFBQ0s7d0NBQUVDLE1BQU1GLEtBQUtHLEdBQUc7a0RBQ2YsNEVBQUMxQixrREFBS0E7NENBQ0ptQixXQUFVOzRDQUNWUSxLQUFLSixLQUFLRyxHQUFHOzRDQUNiRSxLQUFLTCxLQUFLTSxJQUFJOzRDQUNkQyxPQUFPOzRDQUNQQyxRQUFROzs7Ozs7Ozs7OztrREFHWiw4REFBQ2Q7d0NBQUdFLFdBQVU7a0RBQXdCSSxLQUFLTSxJQUFJOzs7Ozs7a0RBQy9DLDhEQUFDWDs7NENBQUU7NENBQUVLLEtBQUtTLEtBQUs7Ozs7Ozs7a0RBQ2YsOERBQUNkO2tEQUFHSyxLQUFLVSxJQUFJOzs7Ozs7OytCQVpMVixLQUFLVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CL0I7R0FwRVNoQztLQUFBQTtBQXNFVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rlc3RpbmcuanN4PzQ4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGNhcmRzRGF0YSBmcm9tIFwiLi4vZGF0YS9Qcm9kdWN0Lmpzb25cIjtcbmZ1bmN0aW9uIFRlc3RpbmcoKSB7XG4gIGNvbnN0IFtzbGlkZUluZGV4LCBzZXRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRTbGlkZUluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggKyAxID49IE1hdGguY2VpbChjYXJkc0RhdGEubGVuZ3RoIC8gNCkgPyAwIDogcHJldkluZGV4ICsgMVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgIHNldFNsaWRlSW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgIHByZXZJbmRleCA9PT0gMCA/IE1hdGguY2VpbChjYXJkc0RhdGEubGVuZ3RoIC8gNCkgLSAxIDogcHJldkluZGV4IC0gMVxuICAgICk7XG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBzdGFydCBhbmQgZW5kIGluZGljZXMgb2YgdGhlIGNhcmRzIHRvIGRpc3BsYXlcbiAgY29uc3Qgc3RhcnRJbmRleCA9IHNsaWRlSW5kZXggKiA0O1xuICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyA0O1xuXG4gIC8vIFNsaWNlIHRoZSBjYXJkc0RhdGEgYXJyYXkgdG8gZ2V0IG9ubHkgdGhlIGNhcmRzIHRvIGRpc3BsYXlcbiAgY29uc3QgZGlzcGxheWVkQ2FyZHMgPSBjYXJkc0RhdGEuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBwLTE0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiIG1kOmZsZXggbWQ6Z3JpZC1jb2xzLTIgIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgbWItNDAgcC1bNHJlbV1cIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LVsyMHB4XSAgZm9udC1ib2xkIG1kOm0tWzMwcHhdXCI+SE9UIERFQUw8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM5OTk5OTldIHRleHQtWzEwcHhdIG10LTEwXCI+XG4gICAgICAgICAgICBbVVAgVE8gMzQlIE9GRl0gSEFQUFkgSE9VUlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGdhcC0xMCBmbGV4XCI+XG4gICAgICAgICAgICB7LyogQ29uZGl0aW9uYWxseSByZW5kZXIgYXJyb3cgYnV0dG9ucyBiYXNlZCBvbiBzY3JlZW4gc2l6ZSAqL31cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaGlkZGVuIGxnOmZsZXhcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0U2xpZGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICZsdDtcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoaWRkZW4gbGc6ZmxleFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3ByZXZTbGlkZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJmd0O1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBncmlkIGdyaWQtY29scy0yICBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgIHtkaXNwbGF5ZWRDYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIHAtNiBteC0yMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2FyZC5pZH0gY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NhcmQudXJsfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsxMjBweF0gaC1bMTIwcHhdIG0tNFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y2FyZC51cmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Y2FyZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3LVs5cmVtXSB0ZXh0LVsxNXB4XVwiPntjYXJkLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD4ke2NhcmQucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntjYXJkLnJhdGV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImNhcmRzRGF0YSIsIlRlc3RpbmciLCJzbGlkZUluZGV4Iiwic2V0U2xpZGVJbmRleCIsIm5leHRTbGlkZSIsInByZXZJbmRleCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicHJldlNsaWRlIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiZGlzcGxheWVkQ2FyZHMiLCJzbGljZSIsImRpdiIsImNsYXNzIiwiaDEiLCJwIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImNhcmQiLCJhIiwiaHJlZiIsInVybCIsInNyYyIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInByaWNlIiwicmF0ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Testing.jsx\n"));

/***/ })

});