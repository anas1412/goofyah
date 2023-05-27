// Create a flag to track if sound has already played
let soundPlayed = false;

// Listen for changes in the DOM
document.addEventListener("DOMContentLoaded", function () {
  // Function to play the sound effect
  function playSound() {
    if (!soundPlayed) {
      // Send a message to the background script
      chrome.runtime.sendMessage({ word: "poop" });
      soundPlayed = true;
    }
  }

  // Function to check if the word "poop" exists in the text node
  function checkForPoop(node) {
    if (node.textContent.toLowerCase().includes("poop")) {
      playSound();
    }
  }

  // Observe changes in the DOM using a MutationObserver
  const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.nodeType === Node.TEXT_NODE) {
            checkForPoop(addedNode);
          } else if (addedNode.nodeType === Node.ELEMENT_NODE) {
            const textNodes = document.evaluate(
              ".//text()[normalize-space()]",
              addedNode,
              null,
              XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
              null
            );

            for (let i = 0; i < textNodes.snapshotLength; i++) {
              const node = textNodes.snapshotItem(i);
              checkForPoop(node);
            }
          }
        }
      }
    }
  });

  // Start observing changes in the entire document
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
});
