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

/***/ "(app-pages-browser)/./components/HotDeal.jsx":
/*!********************************!*\
  !*** ./components/HotDeal.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_Product_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/Product.json */ \"(app-pages-browser)/./data/Product.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction HotDeal() {\n    _s();\n    const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const nextSlide = ()=>{\n        setSlideIndex((prevIndex)=>prevIndex + 1 >= Math.ceil(_data_Product_json__WEBPACK_IMPORTED_MODULE_3__.length / 4) ? 0 : prevIndex + 1);\n    };\n    const prevSlide = ()=>{\n        setSlideIndex((prevIndex)=>prevIndex === 0 ? Math.ceil(_data_Product_json__WEBPACK_IMPORTED_MODULE_3__.length / 4) - 1 : prevIndex - 1);\n    };\n    // Calculate the start and end indices of the cards to display\n    const startIndex = slideIndex * 4;\n    const endIndex = startIndex + 4;\n    // Slice the cardsData array to get only the cards to display\n    const displayedCards = _data_Product_json__WEBPACK_IMPORTED_MODULE_3__.slice(startIndex, endIndex);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-20 px-32 mb-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 lg:grid-cols-2 gap-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-1 flex flex-col justify-start text-start mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[24px] font-[600]\",\n                            children: \"HOT DEAL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#999999] text-[12px]\",\n                            children: \"[UP TO 34% OFF] HAPPY HOUR\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-40 gap-10 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cursor-pointer hidden lg:flex\",\n                                    onClick: nextSlide,\n                                    children: \"<\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cursor-pointer hidden lg:flex\",\n                                    onClick: prevSlide,\n                                    children: \">\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-1 grid md:grid-cols-2 lg:grid-cols-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-full md:flex md:grid-row-2 justify-center gap-4\",\n                        children: displayedCards.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: card.url,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"w-[120px] h-[120px] m-4\",\n                                            src: card.url,\n                                            alt: card.name,\n                                            width: 100,\n                                            height: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"w-[9rem] text-[15px]\",\n                                        children: card.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"$\",\n                                            card.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: card.rate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, card.id, true, {\n                                fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/HotDeal.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(HotDeal, \"0yB34WFJoKB17f3kT+wIMpxNoV8=\");\n_c = HotDeal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HotDeal);\nvar _c;\n$RefreshReg$(_c, \"HotDeal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSG90RGVhbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFDVDtBQUNjO0FBRTdDLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNTSxZQUFZO1FBQ2hCRCxjQUFjLENBQUNFLFlBQ2JBLFlBQVksS0FBS0MsS0FBS0MsSUFBSSxDQUFDUCwrQ0FBU0EsQ0FBQ1EsTUFBTSxHQUFHLEtBQUssSUFBSUgsWUFBWTtJQUV2RTtJQUVBLE1BQU1JLFlBQVk7UUFDaEJOLGNBQWMsQ0FBQ0UsWUFDYkEsY0FBYyxJQUFJQyxLQUFLQyxJQUFJLENBQUNQLCtDQUFTQSxDQUFDUSxNQUFNLEdBQUcsS0FBSyxJQUFJSCxZQUFZO0lBRXhFO0lBRUEsOERBQThEO0lBQzlELE1BQU1LLGFBQWFSLGFBQWE7SUFDaEMsTUFBTVMsV0FBV0QsYUFBYTtJQUU5Qiw2REFBNkQ7SUFDN0QsTUFBTUUsaUJBQWlCWiwrQ0FBU0EsQ0FBQ2EsS0FBSyxDQUFDSCxZQUFZQztJQUVuRCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBRWIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQXlCOzs7Ozs7c0NBQ3ZDLDhEQUFDRTs0QkFBRUYsV0FBVTtzQ0FBNkI7Ozs7OztzQ0FJMUMsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FFYiw4REFBQ0c7b0NBQ0NILFdBQVU7b0NBQ1ZJLFNBQVNmOzhDQUNWOzs7Ozs7OENBR0QsOERBQUNjO29DQUNDSCxXQUFVO29DQUNWSSxTQUFTVjs4Q0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1MLDhEQUFDSztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pILGVBQWVRLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbkIsOERBQUNQO2dDQUFrQkMsV0FBVTs7a0RBQzNCLDhEQUFDTzt3Q0FBRUMsTUFBTUYsS0FBS0csR0FBRztrREFDZiw0RUFBQ3pCLGtEQUFLQTs0Q0FDSmdCLFdBQVU7NENBQ1ZVLEtBQUtKLEtBQUtHLEdBQUc7NENBQ2JFLEtBQUtMLEtBQUtNLElBQUk7NENBQ2RDLE9BQU87NENBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O2tEQUdaLDhEQUFDYjt3Q0FBR0QsV0FBVTtrREFBd0JNLEtBQUtNLElBQUk7Ozs7OztrREFDL0MsOERBQUNWOzs0Q0FBRTs0Q0FBRUksS0FBS1MsS0FBSzs7Ozs7OztrREFDZiw4REFBQ2I7a0RBQUdJLEtBQUtVLElBQUk7Ozs7Ozs7K0JBWkxWLEtBQUtXLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0IvQjtHQXhFUy9CO0tBQUFBO0FBMEVULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG90RGVhbC5qc3g/YzNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgY2FyZHNEYXRhIGZyb20gXCIuLi9kYXRhL1Byb2R1Y3QuanNvblwiO1xuXG5mdW5jdGlvbiBIb3REZWFsKCkge1xuICBjb25zdCBbc2xpZGVJbmRleCwgc2V0U2xpZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0U2xpZGVJbmRleCgocHJldkluZGV4KSA9PlxuICAgICAgcHJldkluZGV4ICsgMSA+PSBNYXRoLmNlaWwoY2FyZHNEYXRhLmxlbmd0aCAvIDQpID8gMCA6IHByZXZJbmRleCArIDFcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRTbGlkZUluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggPT09IDAgPyBNYXRoLmNlaWwoY2FyZHNEYXRhLmxlbmd0aCAvIDQpIC0gMSA6IHByZXZJbmRleCAtIDFcbiAgICApO1xuICB9O1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzIG9mIHRoZSBjYXJkcyB0byBkaXNwbGF5XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSBzbGlkZUluZGV4ICogNDtcbiAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgNDtcblxuICAvLyBTbGljZSB0aGUgY2FyZHNEYXRhIGFycmF5IHRvIGdldCBvbmx5IHRoZSBjYXJkcyB0byBkaXNwbGF5XG4gIGNvbnN0IGRpc3BsYXllZENhcmRzID0gY2FyZHNEYXRhLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgcHgtMzIgbWItMjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtMTBcIj5cbiAgICAgICAgey8qIEhPVCBERUFMICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHRleHQtc3RhcnQgbXQtNFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBmb250LVs2MDBdXCI+SE9UIERFQUw8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM5OTk5OTldIHRleHQtWzEycHhdXCI+XG4gICAgICAgICAgICBbVVAgVE8gMzQlIE9GRl0gSEFQUFkgSE9VUlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNDAgZ2FwLTEwIGZsZXhcIj5cbiAgICAgICAgICAgIHsvKiBDb25kaXRpb25hbGx5IHJlbmRlciBhcnJvdyBidXR0b25zIGJhc2VkIG9uIHNjcmVlbiBzaXplICovfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoaWRkZW4gbGc6ZmxleFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRTbGlkZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJmx0O1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhpZGRlbiBsZzpmbGV4XCJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJldlNsaWRlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAmZ3Q7XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBDQVJEUyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctZnVsbCBtZDpmbGV4IG1kOmdyaWQtcm93LTIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIHtkaXNwbGF5ZWRDYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhcmQuaWR9IGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtjYXJkLnVybH0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMTIwcHhdIGgtWzEyMHB4XSBtLTRcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2NhcmQudXJsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2NhcmQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidy1bOXJlbV0gdGV4dC1bMTVweF1cIj57Y2FyZC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+JHtjYXJkLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57Y2FyZC5yYXRlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG90RGVhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJjYXJkc0RhdGEiLCJIb3REZWFsIiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJuZXh0U2xpZGUiLCJwcmV2SW5kZXgiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInByZXZTbGlkZSIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImRpc3BsYXllZENhcmRzIiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiY2FyZCIsImEiLCJocmVmIiwidXJsIiwic3JjIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJpY2UiLCJyYXRlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/HotDeal.jsx\n"));

/***/ })

});