// home.js
document.addEventListener('DOMContentLoaded', function() {
    const recordingButton = document.getElementById('recordingButton');
    const stopRecordingButton = document.getElementById('stopRecordingButton');
    const goBackButton = document.getElementById('goBackButton');

    const homePage = document.getElementById('home-page');
    const recordingPage = document.getElementById('recording-page');
    const postRecordingPage = document.getElementById('post-recording-page');

    recordingButton.addEventListener('click', function() {
        showRecordingPage();
    });

    stopRecordingButton.addEventListener('click', function() {
        showPostRecordingPage();
    });

    goBackButton.addEventListener('click', function() {
        showHomePage();
    });

    function showRecordingPage() {
        homePage.style.display = 'none';
        recordingPage.style.display = 'block';
    }

    function showPostRecordingPage() {
        recordingPage.style.display = 'none';
        postRecordingPage.style.display = 'block';
    }

    function showHomePage() {
        postRecordingPage.style.display = 'none';
        homePage.style.display = 'block';
    }
});
