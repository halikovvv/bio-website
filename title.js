// Array containing different titles to cycle through #byhalikov
var titles = [
    "@",
    "@a",
    "@at",
    "@att",
    "@atta",
    "@attac",
    "@attack",
    "@attacke",
    "@attacker",
    "@attackerh",
    "@attackerha",
    "@attackerhal",
    "@attackerhali",
    "@attackerhalik",
    "@attackerhaliko",
    "@attackerhalikov"
];

// Function to change the title periodically #byhalikov
function changeTitle() {
    var index = 0; // Initialize index to start from the first title #byhalikov

    // Set interval to change the title every 400 milliseconds #byhalikov
    setInterval(function() {
        // Set the document title to the title at the current index #byhalikov
        document.title = titles[index];
        // Increment the index and use modulo operator to ensure it stays within the bounds of the array #byhalikov
        index = (index + 1) % titles.length;
    }, 400); // Interval set to 400 milliseconds (0.4 seconds) #byhalikov
}

// Call the function to start changing the title #byhalikov
changeTitle();
