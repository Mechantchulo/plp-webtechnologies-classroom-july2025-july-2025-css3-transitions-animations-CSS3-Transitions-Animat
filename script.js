// =============================
// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// =============================

// Global variable to track button clicks
let clickCount = 0;

/**
 * Multiplies a number by two
 * @param {number} number - The number to multiply
 * @returns {number} The result of number * 2
 */
function multiplyByTwo(number) {
  if (typeof number !== "number") {
    console.warn("multiplyByTwo expects a number");
    return NaN;
  }
  return number * 2;
}

/**
 * Logs and returns a message about button clicks
 * Demonstrates local vs global scope
 * @returns {string} Message with click count
 */
function logClick() {
  clickCount++;
  const localMessage = `Button clicked ${clickCount} times.`;
  console.log(localMessage);
  return localMessage;
}

// Example usage in console
console.log("multiplyByTwo(5):", multiplyByTwo(5)); // 10
// logClick(); // Uncomment to test click count logic

// =============================
// Part 3: Combining CSS Animations with JavaScript
// =============================

// Animate box on button click
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

if (animateBtn && jsBox) {
  animateBtn.addEventListener("click", () => {
    jsBox.classList.toggle("animate");
  });
}

// Modal popup logic
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

if (modal && openBtn && closeBtn) {
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
