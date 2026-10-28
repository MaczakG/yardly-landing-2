// The base Barion Pixel: Barion requires it on the acceptance point's website (yardly.hu) for
// fraud prevention. Barion's own loader, kept in a file so the content security policy can go on
// forbidding inline scripts; the id comes from the script tag (config.barionPixelId).
(function () {
  var id = document.currentScript && document.currentScript.getAttribute("data-pixel-id");
  if (!id) return;
  window["bp"] = window["bp"] || function () {
    (window["bp"].q = window["bp"].q || []).push(arguments);
  };
  window["bp"].l = 1 * new Date();
  var scriptElement = document.createElement("script");
  var firstScript = document.getElementsByTagName("script")[0];
  scriptElement.async = true;
  scriptElement.src = "https://pixel.barion.com/bp.js";
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
  window["barion_pixel_id"] = id;
  window["bp"]("init", "addBarionPixelId", window["barion_pixel_id"]);
})();
