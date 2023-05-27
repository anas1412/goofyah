// Listen for changes in the DOM
document.addEventListener("DOMSubtreeModified", function () {
  var textNodes = document.evaluate(
    "//text()",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  for (var i = 0; i < textNodes.snapshotLength; i++) {
    var node = textNodes.snapshotItem(i);

    // Check if the word "poop" exists in the text node
    if (node.textContent.includes("poop")) {
      // Send a message to the background script
      chrome.runtime.sendMessage({ word: "poop" });
      break;
    }
  }
});
