"use strict";

// Get the clock element from DOM
const clockElement = document.querySelector("#DigitalClock");

// Function to format numbers to always show two digits
function formatNumber(number) {
  return number.toString().padStart(2, "0");
}

// Function to update the clock
function showTime() {
  const date = new Date();

  // Get current time components
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the time string with padded numbers
  const timeString = `${formatNumber(hours)}:${formatNumber(
    minutes
  )}:${formatNumber(seconds)}`;

  // Update the display
  clockElement.innerText = timeString;

  // Schedule the next update
  requestAnimationFrame(showTime);
}

// Start the clock
showTime();

// Add all styling including the new border requirements
clockElement.style.fontFamily = "monospace";
clockElement.style.fontSize = "10em";
clockElement.style.fontWeight = "bold";
clockElement.style.textAlign = "center";
clockElement.style.marginTop = "300px";
clockElement.style.padding = "20px";
clockElement.style.backgroundColor = "white";
clockElement.style.border = "1px solid black";
clockElement.style.boxShadow = "0 0 10px black";
clockElement.style.position = "relative";
clockElement.style.zIndex = "1";
clockElement.style.top = "0";
clockElement.style.left = "0";
clockElement.style.width = "fit-content";
clockElement.style.margin = "300px auto 0 auto";

// New border styling
clockElement.style.border = "15px solid black";
clockElement.style.borderRadius = "10%";
clockElement.style.width = "fit-content";
clockElement.style.margin = "300px auto 0 auto";
clockElement.style.padding = "20px";
clockElement.style.backgroundColor = "white";
clockElement.style.boxShadow = "0 0 10px black";
clockElement.style.position = "relative";
clockElement.style.zIndex = "1";

//Get the text element from DOM
const text = document.querySelector("#text");

//Text styling
text.style.border = "15px solid black";
text.style.borderRadius = "10%";
text.style.width = "fit-content";
text.style.margin = "200px auto 0 auto";
text.style.padding = "20px";
text.style.backgroundColor = "white";
text.style.boxShadow = "0 0 10px black";
text.style.position = "relative";
text.style.zIndex = "1";
text.style.fontSize = "2em";
text.style.fontWeight = "bold";
text.style.fontFamily = "Arial";
