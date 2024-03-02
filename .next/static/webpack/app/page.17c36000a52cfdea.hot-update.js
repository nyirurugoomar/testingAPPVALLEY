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

/***/ "(app-pages-browser)/./components/Top7.jsx":
/*!*****************************!*\
  !*** ./components/Top7.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_Product_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/Product.json */ \"(app-pages-browser)/./data/Product.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Top7() {\n    _s();\n    const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timeoutId = setTimeout(()=>{\n            const intervalId = setInterval(()=>{\n                setSlideIndex((prevIndex)=>prevIndex + 1 >= Math.ceil(_data_Product_json__WEBPACK_IMPORTED_MODULE_3__.length / 4) ? 0 : prevIndex + 1);\n            }, 3000); // Change slide every 3 seconds\n            return ()=>clearInterval(intervalId); // Cleanup on component unmount\n        }, 0);\n        return ()=>clearTimeout(timeoutId); // Cleanup if component unmounts before timeout\n    }, []);\n    const nextSlide = ()=>{\n        setSlideIndex((prevIndex)=>prevIndex + 1 >= Math.ceil(_data_Product_json__WEBPACK_IMPORTED_MODULE_3__.length / 4) ? 0 : prevIndex + 1);\n    };\n    const prevSlide = ()=>{\n        setSlideIndex((prevIndex)=>prevIndex === 0 ? Math.ceil(_data_Product_json__WEBPACK_IMPORTED_MODULE_3__.length / 4) - 1 : prevIndex - 1);\n    };\n    // Calculate the start and end indices of the cards to display\n    const startIndex = slideIndex * 4;\n    const endIndex = startIndex + 4;\n    // Slice the cardsData array to get only the cards to display\n    const displayedCards = _data_Product_json__WEBPACK_IMPORTED_MODULE_3__.slice(startIndex, endIndex);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"container mx-auto p-14 justify-center justify-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"md:flex md:grid-cols-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"title  p-[4rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            class: \"text-[20px] font-bold md:m-[30px] w-fit text-start\",\n                            children: \"판매량 TOP7 가성비 인기가전 모음\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#999999] text-[10px]  ml-[23px]\",\n                            children: \"가격,성능,디자인까지\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10 gap-10 flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cursor-pointer hidden lg:flex\",\n                                    onClick: nextSlide,\n                                    children: \"<\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"cursor-pointer hidden lg:flex\",\n                                    onClick: prevSlide,\n                                    children: \">\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4\",\n                    children: displayedCards.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"card\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-start m-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: card.url,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"w-[120px] h-[120px] m-4\",\n                                            src: card.url,\n                                            alt: card.name,\n                                            width: 100,\n                                            height: 100\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"w-[9rem] text-[15px]\",\n                                        children: card.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-800\",\n                                            children: [\n                                                \"$\",\n                                                card.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-[12px] font-[500]\",\n                                        children: [\n                                            \"✡\",\n                                            card.rate\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this)\n                        }, card.id, false, {\n                            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Omar/Desktop/NEXTJS/testvalley/testingAPPVALLEY/components/Top7.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Top7, \"NBlDym1pRzMwfrwANhmUXGuGIw4=\");\n_c = Top7;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Top7);\nvar _c;\n$RefreshReg$(_c, \"Top7\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9wNy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDcEI7QUFDYztBQUU3QyxTQUFTSzs7SUFDUCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sWUFBWUMsV0FBVztZQUMzQixNQUFNQyxhQUFhQyxZQUFZO2dCQUM3QkosY0FBYyxDQUFDSyxZQUNiQSxZQUFZLEtBQUtDLEtBQUtDLElBQUksQ0FBQ1YsK0NBQVNBLENBQUNXLE1BQU0sR0FBRyxLQUFLLElBQUlILFlBQVk7WUFFdkUsR0FBRyxPQUFPLCtCQUErQjtZQUV6QyxPQUFPLElBQU1JLGNBQWNOLGFBQWEsK0JBQStCO1FBQ3pFLEdBQUc7UUFFSCxPQUFPLElBQU1PLGFBQWFULFlBQVksK0NBQStDO0lBQ3ZGLEdBQUcsRUFBRTtJQUNMLE1BQU1VLFlBQVk7UUFDaEJYLGNBQWMsQ0FBQ0ssWUFDYkEsWUFBWSxLQUFLQyxLQUFLQyxJQUFJLENBQUNWLCtDQUFTQSxDQUFDVyxNQUFNLEdBQUcsS0FBSyxJQUFJSCxZQUFZO0lBRXZFO0lBRUEsTUFBTU8sWUFBWTtRQUNoQlosY0FBYyxDQUFDSyxZQUNiQSxjQUFjLElBQUlDLEtBQUtDLElBQUksQ0FBQ1YsK0NBQVNBLENBQUNXLE1BQU0sR0FBRyxLQUFLLElBQUlILFlBQVk7SUFFeEU7SUFFQSw4REFBOEQ7SUFDOUQsTUFBTVEsYUFBYWQsYUFBYTtJQUNoQyxNQUFNZSxXQUFXRCxhQUFhO0lBRTlCLDZEQUE2RDtJQUM3RCxNQUFNRSxpQkFBaUJsQiwrQ0FBU0EsQ0FBQ21CLEtBQUssQ0FBQ0gsWUFBWUM7SUFFbkQscUJBQ0UsOERBQUNHO1FBQUlDLE9BQU07a0JBQ1QsNEVBQUNEO1lBQUlDLE9BQU07OzhCQUNULDhEQUFDRDtvQkFBSUMsT0FBTTs7c0NBQ1QsOERBQUNDOzRCQUFHRCxPQUFNO3NDQUFxRDs7Ozs7O3NDQUcvRCw4REFBQ0U7NEJBQUVDLFdBQVU7c0NBQXdDOzs7Ozs7c0NBR3JELDhEQUFDSjs0QkFBSUksV0FBVTs7OENBRWIsOERBQUNDO29DQUNDRCxXQUFVO29DQUNWRSxTQUFTWjs4Q0FDVjs7Ozs7OzhDQUdELDhEQUFDVztvQ0FDQ0QsV0FBVTtvQ0FDVkUsU0FBU1g7OENBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLTCw4REFBQ0s7b0JBQUlJLFdBQVU7OEJBQ1pOLGVBQWVTLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbkIsOERBQUNSOzRCQUFJQyxPQUFNO3NDQUNULDRFQUFDRDtnQ0FBSUksV0FBVTs7a0RBQ2IsOERBQUNLO3dDQUFFQyxNQUFNRixLQUFLRyxHQUFHO2tEQUNmLDRFQUFDaEMsa0RBQUtBOzRDQUNKeUIsV0FBVTs0Q0FDVlEsS0FBS0osS0FBS0csR0FBRzs0Q0FDYkUsS0FBS0wsS0FBS00sSUFBSTs0Q0FDZEMsT0FBTzs0Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7a0RBR1osOERBQUNkO3dDQUFHRSxXQUFVO2tEQUF3QkksS0FBS00sSUFBSTs7Ozs7O2tEQUMvQyw4REFBQ1g7a0RBQ0MsNEVBQUNjOzRDQUFLYixXQUFVOztnREFBZTtnREFBRUksS0FBS1UsS0FBSzs7Ozs7Ozs7Ozs7O2tEQUU3Qyw4REFBQ2Y7d0NBQUVDLFdBQVU7OzRDQUF5Qjs0Q0FBRUksS0FBS1csSUFBSTs7Ozs7Ozs7Ozs7OzsyQkFmOUJYLEtBQUtZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCMUM7R0F0RlN2QztLQUFBQTtBQXdGVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcDcuanN4PzJhYzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgY2FyZHNEYXRhIGZyb20gXCIuLi9kYXRhL1Byb2R1Y3QuanNvblwiO1xuXG5mdW5jdGlvbiBUb3A3KCkge1xuICBjb25zdCBbc2xpZGVJbmRleCwgc2V0U2xpZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0U2xpZGVJbmRleCgocHJldkluZGV4KSA9PlxuICAgICAgICAgIHByZXZJbmRleCArIDEgPj0gTWF0aC5jZWlsKGNhcmRzRGF0YS5sZW5ndGggLyA0KSA/IDAgOiBwcmV2SW5kZXggKyAxXG4gICAgICAgICk7XG4gICAgICB9LCAzMDAwKTsgLy8gQ2hhbmdlIHNsaWRlIGV2ZXJ5IDMgc2Vjb25kc1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTsgLy8gQ2xlYW51cCBvbiBjb21wb25lbnQgdW5tb3VudFxuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpOyAvLyBDbGVhbnVwIGlmIGNvbXBvbmVudCB1bm1vdW50cyBiZWZvcmUgdGltZW91dFxuICB9LCBbXSk7XG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRTbGlkZUluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggKyAxID49IE1hdGguY2VpbChjYXJkc0RhdGEubGVuZ3RoIC8gNCkgPyAwIDogcHJldkluZGV4ICsgMVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgIHNldFNsaWRlSW5kZXgoKHByZXZJbmRleCkgPT5cbiAgICAgIHByZXZJbmRleCA9PT0gMCA/IE1hdGguY2VpbChjYXJkc0RhdGEubGVuZ3RoIC8gNCkgLSAxIDogcHJldkluZGV4IC0gMVxuICAgICk7XG4gIH07XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBzdGFydCBhbmQgZW5kIGluZGljZXMgb2YgdGhlIGNhcmRzIHRvIGRpc3BsYXlcbiAgY29uc3Qgc3RhcnRJbmRleCA9IHNsaWRlSW5kZXggKiA0O1xuICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyA0O1xuXG4gIC8vIFNsaWNlIHRoZSBjYXJkc0RhdGEgYXJyYXkgdG8gZ2V0IG9ubHkgdGhlIGNhcmRzIHRvIGRpc3BsYXlcbiAgY29uc3QgZGlzcGxheWVkQ2FyZHMgPSBjYXJkc0RhdGEuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIHAtMTQganVzdGlmeS1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4IG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSAgcC1bNHJlbV1cIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LVsyMHB4XSBmb250LWJvbGQgbWQ6bS1bMzBweF0gdy1maXQgdGV4dC1zdGFydFwiPlxuICAgICAgICAgICAg7YyQ66ek65+JIFRPUDcg6rCA7ISx67mEIOyduOq4sOqwgOyghCDrqqjsnYxcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM5OTk5OTldIHRleHQtWzEwcHhdICBtbC1bMjNweF1cIj5cbiAgICAgICAgICAgIOqwgOqyqSzshLHriqUs65SU7J6Q7J246rmM7KeAXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgZ2FwLTEwIGZsZXhcIj5cbiAgICAgICAgICAgIHsvKiBDb25kaXRpb25hbGx5IHJlbmRlciBhcnJvdyBidXR0b25zIGJhc2VkIG9uIHNjcmVlbiBzaXplICovfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoaWRkZW4gbGc6ZmxleFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRTbGlkZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJmx0O1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhpZGRlbiBsZzpmbGV4XCJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJldlNsaWRlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAmZ3Q7XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgIHtkaXNwbGF5ZWRDYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIga2V5PXtjYXJkLmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IG0tOFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NhcmQudXJsfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsxMjBweF0gaC1bMTIwcHhdIG0tNFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y2FyZC51cmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Y2FyZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3LVs5cmVtXSB0ZXh0LVsxNXB4XVwiPntjYXJkLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTgwMFwiPiR7Y2FyZC5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEycHhdIGZvbnQtWzUwMF1cIj7inKF7Y2FyZC5yYXRlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wNztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJjYXJkc0RhdGEiLCJUb3A3Iiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldkluZGV4IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiZGlzcGxheWVkQ2FyZHMiLCJzbGljZSIsImRpdiIsImNsYXNzIiwiaDEiLCJwIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImNhcmQiLCJhIiwiaHJlZiIsInVybCIsInNyYyIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJwcmljZSIsInJhdGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Top7.jsx\n"));

/***/ })

});