const canvas = document.getElementById('patternCanvas');
const ctx = canvas.getContext('2d');

let currentVariation = 1; // Initialize the counter to 1
const totalVariations = 10000; // Total number of variations

function generateFontLogo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Ensure the variation count increments correctly
  if (currentVariation > totalVariations) {
    currentVariation = 1; // Reset to 1 if we exceed total variations
  }

  // Define some fonts with different styles
  const fonts = [
    'Georgia', 'Arial', 'Courier New', 'Times New Roman', 'Pinyon Script', 'Roboto Condensed', 'Verdana', 'Garamond'
  ];

  // Random font and letter case (all caps or lowercase)
  const selectedFont = fonts[Math.floor(Math.random() * fonts.length)];
  const isLowercase = Math.random() > 0.5;
  const letters = isLowercase ? "mg" : "MG";

  // Random font size, spacing, and transformations
  const randomFontSize = Math.random() * 50 + 100; // Font size between 100px and 150px
  const randomCondense = Math.random() * 1.2 + 0.8; // Stretch/condense effect for width (0.8 to 2.0)
  const randomYOffset = Math.random() * 40 - 20; // Slight vertical variation
  
  // Overlap effect: 30% chance of overlap between "m" and "g"
  const overlapChance = Math.random() > 0.7;
  const randomSpacing = overlapChance ? -(Math.random() * 50) : (Math.random() * 30 + 30); // Allows for overlap or spacing
  
  // Set font size, letter spacing, and text alignment
  ctx.font = `${randomFontSize}px ${selectedFont}`;
  ctx.textBaseline = 'middle'; // Vertically center text
  ctx.fillStyle = 'black';
  
  // Measure the width of the letters with applied spacing
  const letterWidth = ctx.measureText(letters).width;
  const xOffset = (canvas.width - letterWidth - randomSpacing) / 2;

  // Draw the "MG" or "mg" with proper spacing and condensation applied
  ctx.save();
  ctx.scale(randomCondense, 1); // Apply condensation/stretch to the text horizontally
  ctx.fillText(letters[0], xOffset / randomCondense, canvas.height / 2 + randomYOffset); // First letter (M or m)
  ctx.fillText(letters[1], (xOffset + letterWidth + randomSpacing) / randomCondense, canvas.height / 2 + randomYOffset); // Second letter (G or g)
  ctx.restore();

  // Display the current variation number
  document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${totalVariations}`;
  
  // Increment the variation counter
  currentVariation++;
}
