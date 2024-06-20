new EventSource("/esbuild").addEventListener("change", () => setTimeout(() => location.reload(), 1000));
"use strict";
(() => {
  // src/js/dashboard.js
  console.log("Dashboard init");
})();
