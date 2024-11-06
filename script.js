// Get elements for #byhalikov
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("main-content");
const musicButtonContainer = document.getElementById("music-button-container");
const musicButton = document.getElementById("music-button");
const musicIcon = document.getElementById("music-icon"); // Music icon for #byhalikov
const backgroundAudio = document.getElementById("background-audio");

// Variable to track the music playback state for #byhalikov
let isPlaying = true;

// Event listener for the overlay click for #byhalikov
overlay.addEventListener("click", function() {
    // Hide the overlay for #byhalikov
    overlay.style.display = "none";

    // Show the main content and the music button for #byhalikov
    mainContent.style.display = "block";
    musicButtonContainer.style.display = "block";  // Show the container with the music button

    // Play the music if it's not already playing for #byhalikov
    backgroundAudio.volume = 0.2;  // Set the volume for #byhalikov
    backgroundAudio.play();  // Start the music for #byhalikov

    // Change the icon to the "music on" icon for #byhalikov
    musicIcon.setAttribute("src", "img/volume.svg");
});

// Event listener for the music button click for #byhalikov
musicButton.addEventListener("click", function() {
    if (isPlaying) {
        backgroundAudio.pause();  // Pause the music for #byhalikov
        musicIcon.setAttribute("src", "img/volume_off.svg");  // Change the icon to "music off" for #byhalikov
    } else {
        backgroundAudio.play();  // Start the music for #byhalikov
        musicIcon.setAttribute("src", "img/volume.svg");  // Change the icon to "music on" for #byhalikov
    }

    // Toggle the state for #byhalikov
    isPlaying = !isPlaying;
});
