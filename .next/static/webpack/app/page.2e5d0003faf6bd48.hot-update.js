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

/***/ "(app-pages-browser)/./app/components/EmailSection.jsx":
/*!*****************************************!*\
  !*** ./app/components/EmailSection.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/github-icon.svg */ \"(app-pages-browser)/./public/github-icon.svg\");\n/* harmony import */ var _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/linkedin-icon.svg */ \"(app-pages-browser)/./public/linkedin-icon.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst EmailSection = ()=>{\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sendForm(\"service_slbvx1m\", \"template_07be35m\", form.current, \"uAmwQGDiuo2B-m0-9\").then(()=>{\n            console.log(\"SUCCESS!\");\n            e.target.reset();\n            alert(\"Message sent successfully!\");\n        }, (error)=>{\n            console.log(\"FAILED...\", error.text);\n            console.log(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4\",\n        id: \"contacts\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-bold text-white my-2\",\n                        children: \"Let's Connect\"\n                    }, void 0, false, {\n                        fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#adb7be] mb-4 max-w-md\",\n                        children: \"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you.\"\n                    }, void 0, false, {\n                        fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"socials flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"https://github.com/ss-coder30\",\n                                target: \"_main\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    src: _public_github_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                    alt: \"Github Icon\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"https://www.linkedin.com/in/shaurya-srivastava-30shaurya\",\n                                target: \"_main\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    src: _public_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"LinkedIn Icon\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    ref: form,\n                    onSubmit: sendEmail,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"user_name\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"user_name\",\n                                    type: \"text\",\n                                    id: \"user_name\",\n                                    required: true,\n                                    placeholder: \"Your Name\",\n                                    className: \"bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"user_email\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your Email\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"user_email\",\n                                    type: \"email\",\n                                    id: \"user_email\",\n                                    required: true,\n                                    placeholder: \"Your Email\",\n                                    className: \"bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your Message\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"message\",\n                                    id: \"message\",\n                                    required: true,\n                                    placeholder: \"Your Message\",\n                                    className: \"bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-primary-500 hover:bg-primary-600 font-medium py-2.5 px-5 rounded-lg w-full\",\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/shaurya/Desktop/Next-Portfolio/app/components/EmailSection.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EmailSection, \"dQhLC9DEDZP9Q6oVJIWRdCVKDdw=\");\n_c = EmailSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSection);\nvar _c;\n$RefreshReg$(_c, \"EmailSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0VtYWlsU2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDc0M7QUFDZ0I7QUFDSTtBQUM3QjtBQUNFO0FBQ1E7QUFFdkMsTUFBTU8sZUFBZTs7SUFDbkIsTUFBTUMsT0FBT1AsNkNBQU1BO0lBRW5CLE1BQU1RLFlBQVksQ0FBQ0M7UUFDakJBLEVBQUVDLGNBQWM7UUFFaEJMLGlFQUNXLENBQ1BPLGlCQUFrQyxFQUNsQ0Esa0JBQW1DLEVBQ25DTCxLQUFLUyxPQUFPLEVBQ1pKLG1CQUFrQyxFQUVuQ00sSUFBSSxDQUNIO1lBQ0VDLFFBQVFDLEdBQUcsQ0FBQztZQUNaWCxFQUFFWSxNQUFNLENBQUNDLEtBQUs7WUFDZEMsTUFBTTtRQUNSLEdBQ0EsQ0FBQ0M7WUFDQ0wsUUFBUUMsR0FBRyxDQUFDLGFBQWFJLE1BQU1DLElBQUk7WUFDbkNOLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDZDtJQUVOO0lBRUEscUJBQ0UsOERBQUNFO1FBQ0NDLFdBQVU7UUFDVkMsSUFBRzs7MEJBRUgsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQUdILFdBQVU7a0NBQW9DOzs7Ozs7a0NBQ2xELDhEQUFDSTt3QkFBRUosV0FBVTtrQ0FBK0I7Ozs7OztrQ0FNNUMsOERBQUNFO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ3hCLGlEQUFJQTtnQ0FBQzZCLE1BQUs7Z0NBQWdDWCxRQUFPOzBDQUNoRCw0RUFBQ2pCLGtEQUFLQTtvQ0FBQzZCLEtBQUtoQywrREFBVUE7b0NBQUVpQyxLQUFJOzs7Ozs7Ozs7OzswQ0FHOUIsOERBQUMvQixpREFBSUE7Z0NBQ0g2QixNQUFLO2dDQUNMWCxRQUFPOzBDQUVQLDRFQUFDakIsa0RBQUtBO29DQUFDNkIsS0FBSy9CLGlFQUFZQTtvQ0FBRWdDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtwQyw4REFBQ0w7MEJBQ0MsNEVBQUN0QjtvQkFBS29CLFdBQVU7b0JBQWdCUSxLQUFLNUI7b0JBQU02QixVQUFVNUI7O3NDQUNuRCw4REFBQ3FCOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQ0NDLFNBQVE7b0NBQ1JYLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ1k7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xiLElBQUc7b0NBQ0hjLFFBQVE7b0NBQ1JDLGFBQVk7b0NBQ1poQixXQUFVOzs7Ozs7Ozs7Ozs7c0NBSWQsOERBQUNFOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQ0NDLFNBQVE7b0NBQ1JYLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ1k7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xiLElBQUc7b0NBQ0hjLFFBQVE7b0NBQ1JDLGFBQVk7b0NBQ1poQixXQUFVOzs7Ozs7Ozs7Ozs7c0NBSWQsOERBQUNFOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ1U7b0NBQ0NDLFNBQVE7b0NBQ1JYLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ2lCO29DQUNDSixNQUFLO29DQUNMWixJQUFHO29DQUNIYyxRQUFRO29DQUNSQyxhQUFZO29DQUNaaEIsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUlkLDhEQUFDa0I7NEJBQ0NKLE1BQUs7NEJBQ0xkLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FuSE1yQjtLQUFBQTtBQXFITiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9FbWFpbFNlY3Rpb24uanN4PzU2YTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2dpdGh1Yi1pY29uLnN2Z1wiO1xuaW1wb3J0IExpbmtlZGluSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2xpbmtlZGluLWljb24uc3ZnXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XG5cbmNvbnN0IEVtYWlsU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZW1haWxqc1xuICAgICAgLnNlbmRGb3JtKFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWSUNFX0lELFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URU1QTEFURV9JRCxcbiAgICAgICAgZm9ybS5jdXJyZW50LFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QVUJMSUNfS0VZXG4gICAgICApXG4gICAgICAudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUyFcIik7XG4gICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICAgICAgICBhbGVydChcIk1lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxFRC4uLlwiLCBlcnJvci50ZXh0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBteS0xMiBtZDpteS0xMiBweS0yNCBnYXAtNFwiXG4gICAgICBpZD1cImNvbnRhY3RzXCJcbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZSBteS0yXCI+TGV0J3MgQ29ubmVjdDwvaDU+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyNhZGI3YmVdIG1iLTQgbWF4LXctbWRcIj5cbiAgICAgICAgICBJJ20gY3VycmVudGx5IGxvb2tpbmcgZm9yIG5ldyBvcHBvcnR1bml0aWVzLCBteSBpbmJveCBpcyBhbHdheXMgb3Blbi5cbiAgICAgICAgICBXaGV0aGVyIHlvdSBoYXZlIGEgcXVlc3Rpb24gb3IganVzdCB3YW50IHRvIHNheSBoaSwgSSdsbCB0cnkgbXkgYmVzdFxuICAgICAgICAgIHRvIGdldCBiYWNrIHRvIHlvdS5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFscyBmbGV4IGZsZXgtcm93IGdhcC0yXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zcy1jb2RlcjMwXCIgdGFyZ2V0PVwiX21haW5cIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0dpdGh1Ykljb259IGFsdD1cIkdpdGh1YiBJY29uXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaGF1cnlhLXNyaXZhc3RhdmEtMzBzaGF1cnlhXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9tYWluXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMaW5rZWRpbkljb259IGFsdD1cIkxpbmtlZEluIEljb25cIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInVzZXJfbmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgWW91ciBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyX25hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwidXNlcl9uYW1lXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzE4MTkxZV0gYm9yZGVyIGJvcmRlci1bIzMzMzUzZl0gcGxhY2Vob2xkZXItWyM5Y2EyYTldIHRleHQtZ3JheS0xMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInVzZXJfZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFlvdXIgRW1haWxcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJfZW1haWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBpZD1cInVzZXJfZW1haWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzE4MTkxZV0gYm9yZGVyIGJvcmRlci1bIzMzMzUzZl0gcGxhY2Vob2xkZXItWyM5Y2EyYTldIHRleHQtZ3JheS0xMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFlvdXIgTWVzc2FnZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxODE5MWVdIGJvcmRlciBib3JkZXItWyMzMzM1M2ZdIHBsYWNlaG9sZGVyLVsjOWNhMmE5XSB0ZXh0LWdyYXktMTAwIHRleHQtc20gcm91bmRlZC1sZyBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS01MDAgaG92ZXI6YmctcHJpbWFyeS02MDAgZm9udC1tZWRpdW0gcHktMi41IHB4LTUgcm91bmRlZC1sZyB3LWZ1bGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlbmQgTWVzc2FnZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbFNlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJHaXRodWJJY29uIiwiTGlua2VkaW5JY29uIiwiTGluayIsIkltYWdlIiwiZW1haWxqcyIsIkVtYWlsU2VjdGlvbiIsImZvcm0iLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRVJWSUNFX0lEIiwiTkVYVF9QVUJMSUNfVEVNUExBVEVfSUQiLCJjdXJyZW50IiwiTkVYVF9QVUJMSUNfUFVCTElDX0tFWSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwicmVzZXQiLCJhbGVydCIsImVycm9yIiwidGV4dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImg1IiwicCIsImhyZWYiLCJzcmMiLCJhbHQiLCJyZWYiLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/EmailSection.jsx\n"));

/***/ })

});