import * as thebe from "./thebe";
export * from "./thebe";
export * from "./utils";
import $ from "jquery";

// Modes inclusion for webpack
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('codemirror/mode', true, /\.js$/));

if (typeof window !== "undefined") {
  window.thebelab = window.thebe = thebe;
  window.thebelab.$ = window.thebe.$ = $;

  document.addEventListener("DOMContentLoaded", () => {
    const options = thebe.mergeOptions();
    if (options.mountStatusWidget) {
      thebe.mountStatusWidget();
    }
    if (options.mountActivateWidget) {
      thebe.mountActivateWidget();
    }
    if (options["bootstrap"]) {
      thebe.bootstrap();
    }
  });
}
