self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "skillavatars": function() { return /* binding */ skillavatars; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'P.E.E.R.Program ATX',
  description: "This site is for a small company in Austin for a treatment program to help addicts. They needed a website for their business. Customers could find them online and send a message if that interested them. It was my first product, which was finished in 2019. It is based on Vue.",
  image: '/images/vue.png',
  tags: ['Vue', 'JavaScript'],
  visit: 'https://peerprogramatx.com/',
  id: 0
}, {
  title: 'Willamette Bearcats',
  description: "This website is designed to show sports pictures. In other words, it's the photograph library. You can search for exciting photographs. On this website, I tried to create an intelligent and clean environment. As you can see, it is very simple and looks quite regular. It is based on React.",
  image: '/images/sports_photos.png',
  tags: ['React', 'JavaScript'],
  visit: 'https://photos.wubearcats.com/',
  id: 1
}, {
  title: 'Josephine House',
  description: "It's a tiny restaurant in Austin. The design of the site is not great, but it provides convenience. Guests can order from this website. Using this site, the restaurant import was increased 1.5 times.This site based on WordPress.",
  image: '/images/josephine_house.png',
  tags: ['WordPress', 'PHP'],
  visit: 'https://josephineofaustin.com/',
  id: 2
}, {
  title: 'Komé',
  description: "That's a small restaurant in Austin. This website provides food listing and advertising. This website looks like simple and clean. Customers can join other restaurants through this site. They can find food they want details. It is based on WordPress.",
  image: '/images/Kome_Sushi.png',
  tags: ['WordPress', 'PHP'],
  visit: 'https://www.kome-austin.com/',
  id: 3
}, {
  title: 'Marlin Medical Assistance',
  description: "That's a small restaurant in Austin. This website provides food listing and advertising. This website looks like simple and clean. Customers can join other restaurants through this site. They can find food they want details. It is based on WordPress.",
  image: '/images/Marlin.png',
  tags: ['React', 'Laravel', 'MySQL'],
  visit: 'https://marlinmedicalassistance.com/',
  id: 4
}, {
  title: 'Capitol School of Austin',
  description: "That's a small restaurant in Austin. This website provides food listing and advertising. This website looks like simple and clean. Customers can join other restaurants through this site. They can find food they want details. It is based on WordPress.",
  image: '/images/capital_school.png',
  tags: ['WordPress'],
  visit: 'https://www.capitolschool.com/',
  id: 5
}, {
  title: 'McKinsey',
  description: "That's a small restaurant in Austin. This website provides food listing and advertising. This website looks like simple and clean. Customers can join other restaurants through this site. They can find food they want details. It is based on WordPress.",
  image: '/images/Mc_kinsey.png',
  tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  visit: 'https://www.mckinsey.com/',
  id: 6
}, {
  title: 'Blossöm Records',
  description: "That's a small restaurant in Austin. This website provides food listing and advertising. This website looks like simple and clean. Customers can join other restaurants through this site. They can find food they want details. It is based on WordPress.",
  image: '/images/brossom.png',
  tags: ['WordPress', 'PHP'],
  visit: 'https://blossomrecs.com/',
  id: 7
}];
var skillavatars = [{
  image: '/images/react.jfif',
  id: 0
}, {
  image: '/images/express.png',
  id: 1
}, {
  image: '/images/angular.png',
  id: 2
}, {
  image: '/images/wordpress.png',
  id: 3
}, {
  image: '/images/laravel.jfif',
  id: 4
}, {
  image: '/images/node.png',
  id: 5
}, {
  image: '/images/next.jfif',
  id: 6
}, {
  image: '/images/vuemark.jfif',
  id: 7
}, {
  image: '/images/diango.jfif',
  id: 8
}, {
  image: '/images/mongodb.png',
  id: 9
}, {
  image: '/images/mysql.png',
  id: 10
}, {
  image: '/images/figma.png',
  id: 11
}];
var TimeLineData = [{
  year: 2018,
  text: 'Started my journey'
}, {
  year: 2019,
  text: 'Worked as a freelance developer'
}, {
  year: 2020,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2021,
  text: 'Shared my projects with the world'
}, {
  year: 2022,
  text: 'Started my own platform'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwidmlzaXQiLCJpZCIsInNraWxsYXZhdGFycyIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUUscVJBRmY7QUFHRUMsT0FBSyxFQUFFLGlCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxZQUFSLENBSlI7QUFLRUMsT0FBSyxFQUFFLDZCQUxUO0FBTUVDLElBQUUsRUFBRTtBQU5OLENBRHNCLEVBU3RCO0FBQ0VMLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQUUsbVNBRmY7QUFHRUMsT0FBSyxFQUFFLDJCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLENBSlI7QUFLRUMsT0FBSyxFQUFFLGdDQUxUO0FBTUVDLElBQUUsRUFBRTtBQU5OLENBVHNCLEVBaUJ0QjtBQUNFTCxPQUFLLEVBQUUsaUJBRFQ7QUFFRUMsYUFBVyxFQUFFLHNPQUZmO0FBR0VDLE9BQUssRUFBRSw2QkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxXQUFELEVBQWMsS0FBZCxDQUpSO0FBS0VDLE9BQUssRUFBRSxnQ0FMVDtBQU1FQyxJQUFFLEVBQUU7QUFOTixDQWpCc0IsRUF5QnRCO0FBQ0VMLE9BQUssRUFBRSxNQURUO0FBRUVDLGFBQVcsRUFBRSw0UEFGZjtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsV0FBRCxFQUFjLEtBQWQsQ0FKUjtBQUtFQyxPQUFLLEVBQUUsOEJBTFQ7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0F6QnNCLEVBaUN0QjtBQUNFTCxPQUFLLEVBQUUsMkJBRFQ7QUFFRUMsYUFBVyxFQUFFLDRQQUZmO0FBR0VDLE9BQUssRUFBRSxvQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixDQUpSO0FBS0VDLE9BQUssRUFBRSxzQ0FMVDtBQU1FQyxJQUFFLEVBQUU7QUFOTixDQWpDc0IsRUF5Q3RCO0FBQ0VMLE9BQUssRUFBRSwwQkFEVDtBQUVFQyxhQUFXLEVBQUUsNFBBRmY7QUFHRUMsT0FBSyxFQUFFLDRCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFdBQUQsQ0FKUjtBQUtFQyxPQUFLLEVBQUUsZ0NBTFQ7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0F6Q3NCLEVBaUR0QjtBQUNFTCxPQUFLLEVBQUUsVUFEVDtBQUVFQyxhQUFXLEVBQUUsNFBBRmY7QUFHRUMsT0FBSyxFQUFFLHVCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFNBQXJCLEVBQWdDLFNBQWhDLENBSlI7QUFLRUMsT0FBSyxFQUFFLDJCQUxUO0FBTUVDLElBQUUsRUFBRTtBQU5OLENBakRzQixFQXlEdEI7QUFDRUwsT0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVcsRUFBRSw0UEFGZjtBQUdFQyxPQUFLLEVBQUUscUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsV0FBRCxFQUFjLEtBQWQsQ0FKUjtBQUtFQyxPQUFLLEVBQUUsMEJBTFQ7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0F6RHNCLENBQWpCO0FBbUVBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUNFSixPQUFLLEVBQUUsb0JBRFQ7QUFFRUcsSUFBRSxFQUFFO0FBRk4sQ0FEMEIsRUFLMUI7QUFDRUgsT0FBSyxFQUFFLHFCQURUO0FBRUVHLElBQUUsRUFBRTtBQUZOLENBTDBCLEVBUzFCO0FBQ0VILE9BQUssRUFBRSxxQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQVQwQixFQWExQjtBQUNFSCxPQUFLLEVBQUUsdUJBRFQ7QUFFRUcsSUFBRSxFQUFFO0FBRk4sQ0FiMEIsRUFpQjFCO0FBQ0VILE9BQUssRUFBRSxzQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQWpCMEIsRUFxQjFCO0FBQ0VILE9BQUssRUFBRSxrQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQXJCMEIsRUF5QjFCO0FBQ0VILE9BQUssRUFBRSxtQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQXpCMEIsRUE2QjFCO0FBQ0VILE9BQUssRUFBRSxzQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQTdCMEIsRUFpQzFCO0FBQ0VILE9BQUssRUFBRSxxQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQWpDMEIsRUFxQzFCO0FBQ0VILE9BQUssRUFBRSxxQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQXJDMEIsRUF5QzFCO0FBQ0VILE9BQUssRUFBRSxtQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQXpDMEIsRUE2QzFCO0FBQ0VILE9BQUssRUFBRSxtQkFEVDtBQUVFRyxJQUFFLEVBQUU7QUFGTixDQTdDMEIsQ0FBckI7QUFtREEsSUFBTUUsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWIyMjVmZGYwZGVmYTBkMjEwYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnUC5FLkUuUi5Qcm9ncmFtIEFUWCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBzaXRlIGlzIGZvciBhIHNtYWxsIGNvbXBhbnkgaW4gQXVzdGluIGZvciBhIHRyZWF0bWVudCBwcm9ncmFtIHRvIGhlbHAgYWRkaWN0cy4gVGhleSBuZWVkZWQgYSB3ZWJzaXRlIGZvciB0aGVpciBidXNpbmVzcy4gQ3VzdG9tZXJzIGNvdWxkIGZpbmQgdGhlbSBvbmxpbmUgYW5kIHNlbmQgYSBtZXNzYWdlIGlmIHRoYXQgaW50ZXJlc3RlZCB0aGVtLiBJdCB3YXMgbXkgZmlyc3QgcHJvZHVjdCwgd2hpY2ggd2FzIGZpbmlzaGVkIGluIDIwMTkuIEl0IGlzIGJhc2VkIG9uIFZ1ZS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvdnVlLnBuZycsXG4gICAgdGFnczogWydWdWUnLCAnSmF2YVNjcmlwdCddLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9wZWVycHJvZ3JhbWF0eC5jb20vJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnV2lsbGFtZXR0ZSBCZWFyY2F0cycsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyB3ZWJzaXRlIGlzIGRlc2lnbmVkIHRvIHNob3cgc3BvcnRzIHBpY3R1cmVzLiBJbiBvdGhlciB3b3JkcywgaXQncyB0aGUgcGhvdG9ncmFwaCBsaWJyYXJ5LiBZb3UgY2FuIHNlYXJjaCBmb3IgZXhjaXRpbmcgcGhvdG9ncmFwaHMuIE9uIHRoaXMgd2Vic2l0ZSwgSSB0cmllZCB0byBjcmVhdGUgYW4gaW50ZWxsaWdlbnQgYW5kIGNsZWFuIGVudmlyb25tZW50LiBBcyB5b3UgY2FuIHNlZSwgaXQgaXMgdmVyeSBzaW1wbGUgYW5kIGxvb2tzIHF1aXRlIHJlZ3VsYXIuIEl0IGlzIGJhc2VkIG9uIFJlYWN0LlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9zcG9ydHNfcGhvdG9zLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0J10sXG4gICAgdmlzaXQ6ICdodHRwczovL3Bob3Rvcy53dWJlYXJjYXRzLmNvbS8nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdKb3NlcGhpbmUgSG91c2UnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkl0J3MgYSB0aW55IHJlc3RhdXJhbnQgaW4gQXVzdGluLiBUaGUgZGVzaWduIG9mIHRoZSBzaXRlIGlzIG5vdCBncmVhdCwgYnV0IGl0IHByb3ZpZGVzIGNvbnZlbmllbmNlLiBHdWVzdHMgY2FuIG9yZGVyIGZyb20gdGhpcyB3ZWJzaXRlLiBVc2luZyB0aGlzIHNpdGUsIHRoZSByZXN0YXVyYW50IGltcG9ydCB3YXMgaW5jcmVhc2VkIDEuNSB0aW1lcy5UaGlzIHNpdGUgYmFzZWQgb24gV29yZFByZXNzLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9qb3NlcGhpbmVfaG91c2UucG5nJyxcbiAgICB0YWdzOiBbJ1dvcmRQcmVzcycsICdQSFAnXSxcbiAgICB2aXNpdDogJ2h0dHBzOi8vam9zZXBoaW5lb2ZhdXN0aW4uY29tLycsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0tvbcOpJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGF0J3MgYSBzbWFsbCByZXN0YXVyYW50IGluIEF1c3Rpbi4gVGhpcyB3ZWJzaXRlIHByb3ZpZGVzIGZvb2QgbGlzdGluZyBhbmQgYWR2ZXJ0aXNpbmcuIFRoaXMgd2Vic2l0ZSBsb29rcyBsaWtlIHNpbXBsZSBhbmQgY2xlYW4uIEN1c3RvbWVycyBjYW4gam9pbiBvdGhlciByZXN0YXVyYW50cyB0aHJvdWdoIHRoaXMgc2l0ZS4gVGhleSBjYW4gZmluZCBmb29kIHRoZXkgd2FudCBkZXRhaWxzLiBJdCBpcyBiYXNlZCBvbiBXb3JkUHJlc3MuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL0tvbWVfU3VzaGkucG5nJyxcbiAgICB0YWdzOiBbJ1dvcmRQcmVzcycsICdQSFAnXSxcbiAgICB2aXNpdDogJ2h0dHBzOi8vd3d3LmtvbWUtYXVzdGluLmNvbS8nLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdNYXJsaW4gTWVkaWNhbCBBc3Npc3RhbmNlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGF0J3MgYSBzbWFsbCByZXN0YXVyYW50IGluIEF1c3Rpbi4gVGhpcyB3ZWJzaXRlIHByb3ZpZGVzIGZvb2QgbGlzdGluZyBhbmQgYWR2ZXJ0aXNpbmcuIFRoaXMgd2Vic2l0ZSBsb29rcyBsaWtlIHNpbXBsZSBhbmQgY2xlYW4uIEN1c3RvbWVycyBjYW4gam9pbiBvdGhlciByZXN0YXVyYW50cyB0aHJvdWdoIHRoaXMgc2l0ZS4gVGhleSBjYW4gZmluZCBmb29kIHRoZXkgd2FudCBkZXRhaWxzLiBJdCBpcyBiYXNlZCBvbiBXb3JkUHJlc3MuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL01hcmxpbi5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnTGFyYXZlbCcsICdNeVNRTCddLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9tYXJsaW5tZWRpY2FsYXNzaXN0YW5jZS5jb20vJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ2FwaXRvbCBTY2hvb2wgb2YgQXVzdGluJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGF0J3MgYSBzbWFsbCByZXN0YXVyYW50IGluIEF1c3Rpbi4gVGhpcyB3ZWJzaXRlIHByb3ZpZGVzIGZvb2QgbGlzdGluZyBhbmQgYWR2ZXJ0aXNpbmcuIFRoaXMgd2Vic2l0ZSBsb29rcyBsaWtlIHNpbXBsZSBhbmQgY2xlYW4uIEN1c3RvbWVycyBjYW4gam9pbiBvdGhlciByZXN0YXVyYW50cyB0aHJvdWdoIHRoaXMgc2l0ZS4gVGhleSBjYW4gZmluZCBmb29kIHRoZXkgd2FudCBkZXRhaWxzLiBJdCBpcyBiYXNlZCBvbiBXb3JkUHJlc3MuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2NhcGl0YWxfc2Nob29sLnBuZycsXG4gICAgdGFnczogWydXb3JkUHJlc3MnXSxcbiAgICB2aXNpdDogJ2h0dHBzOi8vd3d3LmNhcGl0b2xzY2hvb2wuY29tLycsXG4gICAgaWQ6IDUsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ01jS2luc2V5JyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGF0J3MgYSBzbWFsbCByZXN0YXVyYW50IGluIEF1c3Rpbi4gVGhpcyB3ZWJzaXRlIHByb3ZpZGVzIGZvb2QgbGlzdGluZyBhbmQgYWR2ZXJ0aXNpbmcuIFRoaXMgd2Vic2l0ZSBsb29rcyBsaWtlIHNpbXBsZSBhbmQgY2xlYW4uIEN1c3RvbWVycyBjYW4gam9pbiBvdGhlciByZXN0YXVyYW50cyB0aHJvdWdoIHRoaXMgc2l0ZS4gVGhleSBjYW4gZmluZCBmb29kIHRoZXkgd2FudCBkZXRhaWxzLiBJdCBpcyBiYXNlZCBvbiBXb3JkUHJlc3MuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL01jX2tpbnNleS5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnTm9kZS5qcycsICdFeHByZXNzJywgJ01vbmdvREInXSxcbiAgICB2aXNpdDogJ2h0dHBzOi8vd3d3Lm1ja2luc2V5LmNvbS8nLFxuICAgIGlkOiA2LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdCbG9zc8O2bSBSZWNvcmRzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGF0J3MgYSBzbWFsbCByZXN0YXVyYW50IGluIEF1c3Rpbi4gVGhpcyB3ZWJzaXRlIHByb3ZpZGVzIGZvb2QgbGlzdGluZyBhbmQgYWR2ZXJ0aXNpbmcuIFRoaXMgd2Vic2l0ZSBsb29rcyBsaWtlIHNpbXBsZSBhbmQgY2xlYW4uIEN1c3RvbWVycyBjYW4gam9pbiBvdGhlciByZXN0YXVyYW50cyB0aHJvdWdoIHRoaXMgc2l0ZS4gVGhleSBjYW4gZmluZCBmb29kIHRoZXkgd2FudCBkZXRhaWxzLiBJdCBpcyBiYXNlZCBvbiBXb3JkUHJlc3MuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Jyb3Nzb20ucG5nJyxcbiAgICB0YWdzOiBbJ1dvcmRQcmVzcycsICdQSFAnXSxcbiAgICB2aXNpdDogJ2h0dHBzOi8vYmxvc3NvbXJlY3MuY29tLycsXG4gICAgaWQ6IDcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2tpbGxhdmF0YXJzID0gW1xuICB7XG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlYWN0LmpmaWYnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2V4cHJlc3MucG5nJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL2ltYWdlcy9hbmd1bGFyLnBuZycsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9pbWFnZXMvd29yZHByZXNzLnBuZycsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9pbWFnZXMvbGFyYXZlbC5qZmlmJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL2ltYWdlcy9ub2RlLnBuZycsXG4gICAgaWQ6IDUsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9pbWFnZXMvbmV4dC5qZmlmJyxcbiAgICBpZDogNixcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL2ltYWdlcy92dWVtYXJrLmpmaWYnLFxuICAgIGlkOiA3LFxuICB9LFxuICB7XG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2RpYW5nby5qZmlmJyxcbiAgICBpZDogOCxcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnL2ltYWdlcy9tb25nb2RiLnBuZycsXG4gICAgaWQ6IDksXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9pbWFnZXMvbXlzcWwucG5nJyxcbiAgICBpZDogMTAsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJy9pbWFnZXMvZmlnbWEucG5nJyxcbiAgICBpZDogMTEsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXknLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnRm91bmRlZCBKYXZhU2NyaXB0IE1hc3RlcnknLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGQnLCB9LFxuICB7IHllYXI6IDIwMjIsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=