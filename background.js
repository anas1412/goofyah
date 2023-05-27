chrome.runtime.onInstalled.addListener(function () {
  // Play the sound effect
  function playSound() {
    var audio = new Audio(chrome.runtime.getURL("audio/sound.mp3"));
    audio.play();
  }

  // Listen for URL changes
  chrome.webNavigation.onCompleted.addListener(function (details) {
    // Get the tab ID
    var tabId = details.tabId;

    // Inject content script
    chrome.tabs.executeScript(
      tabId,
      { file: chrome.runtime.getURL("content.js") }, // Use chrome.runtime.getURL to get the absolute URL
      function () {
        // Check if the content script was injected successfully
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
        }
      }
    );
  });

  // Listen for messages from the content script
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    // Check if the word "poop" is found
    if (request.word === "poop") {
      playSound();
    }
  });
});
