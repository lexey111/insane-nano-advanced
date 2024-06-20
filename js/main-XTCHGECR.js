new EventSource("/esbuild").addEventListener("change", () => setTimeout(() => location.reload(), 1000));
"use strict";
(() => {
  // src/js/utils/consts.ts
  var TheAnswer = 42;

  // src/js/utils/utils.ts
  function sayHello(answer) {
    console.log("Hello World:", answer.toString());
  }

  // src/js/main.ts
  console.log("Main init");
  sayHello(TheAnswer);
})();
