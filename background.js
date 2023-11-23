// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "stopRecording") {
      // Add logic here to stop recording
      // For example:
      // Stop recording code or send a message to content script to stop recording
      console.log("Recording stopped");
      
      // Assuming you want to switch to the post-recording page:
      chrome.browserAction.setPopup({ popup: "post_recording.html" });
  }
});
