import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_CLERK_PUBLISHABLE_KEY": "pk_test_cHJvZm91bmQtcmluZ3RhaWwtODQuY2xlcmsuYWNjb3VudHMuZGV2JA"};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3e395a87"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=3e395a87"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=3e395a87"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.jsx?t=1758426862652";
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=3e395a87";
import { ClerkProvider } from "/node_modules/.vite/deps/@clerk_clerk-react.js?v=3e395a87";
import "/src/index.css?t=1758426862652";
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerkKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env");
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(ClerkProvider, { publishableKey: clerkKey, children: /* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "/home/vivek/VIVEK JHA/LOCOMOTIVE_PROJECT/src/main.jsx",
    lineNumber: 19,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/vivek/VIVEK JHA/LOCOMOTIVE_PROJECT/src/main.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/vivek/VIVEK JHA/LOCOMOTIVE_PROJECT/src/main.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/vivek/VIVEK JHA/LOCOMOTIVE_PROJECT/src/main.jsx",
    lineNumber: 16,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JRO0FBakJSLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxTQUFTO0FBQ2hCLFNBQVNDLHFCQUFxQjtBQUM5QixTQUFTQyxxQkFBcUI7QUFDOUIsT0FBTztBQUVQLE1BQU1DLFdBQVdDLFlBQVlDLElBQUlDO0FBRWpDLElBQUksQ0FBQ0gsVUFBVTtBQUNiLFFBQU0sSUFBSUksTUFBTSw0Q0FBNEM7QUFDOUQ7QUFFQVIsU0FBU1MsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDbkQsdUJBQUMsTUFBTSxZQUFOLEVBQ0MsaUNBQUMsaUJBQWMsZ0JBQWdCUixVQUM3QixpQ0FBQyxpQkFDQyxpQ0FBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJQSxLQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNQTtBQUNGIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsIkJyb3dzZXJSb3V0ZXIiLCJDbGVya1Byb3ZpZGVyIiwiY2xlcmtLZXkiLCJpbXBvcnQiLCJlbnYiLCJWSVRFX0NMRVJLX1BVQkxJU0hBQkxFX0tFWSIsIkVycm9yIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL21haW4uanN4XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLmpzeFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBDbGVya1Byb3ZpZGVyIH0gZnJvbSBcIkBjbGVyay9jbGVyay1yZWFjdFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuY29uc3QgY2xlcmtLZXkgPSBpbXBvcnQubWV0YS5lbnYuVklURV9DTEVSS19QVUJMSVNIQUJMRV9LRVk7XG5cbmlmICghY2xlcmtLZXkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBWSVRFX0NMRVJLX1BVQkxJU0hBQkxFX0tFWSBpbiAuZW52XCIpO1xufVxuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8Q2xlcmtQcm92aWRlciBwdWJsaXNoYWJsZUtleT17Y2xlcmtLZXl9PlxuICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICA8L0NsZXJrUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iXSwiZmlsZSI6Ii9ob21lL3ZpdmVrL1ZJVkVLIEpIQS9MT0NPTU9USVZFX1BST0pFQ1Qvc3JjL21haW4uanN4In0=