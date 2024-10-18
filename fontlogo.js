// fontlogo.js

// Array of fonts, including script fonts
const fonts = [
  'Pinyon Script', 'Cormorant Garamond', 'Pacifico', 'Lobster', 'Great Vibes',
  'Bangers', 'Dancing Script', 'Indie Flower', 'Merriweather', 'Roboto', 'Georgia', 'Playfair Display'
];

// Max number of variations
const maxVariations = 10000;
let currentVariation = 1;

// Get the canvas and its context
const canvas = document.getElementById('patternCanvas');
const ctx = canvas.getContext('2d');

// Function to generate a random font-based logo
function generateFontLogo() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Pick a random font
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

  // Set font size (consistent size)
  ctx.font = `bold 100px ${randomFont}`;

  // Set fill color (white)
  ctx.fillStyle = 'white';

  // Randomly decide whether to apply a stroke (50% chance)
  const applyStroke = Math.random() > 0.5;

  if (applyStroke) {
    // If stroke is applied, use a random stroke width between 2 and 8
    ctx.strokeStyle = 'black';
    const strokeWidth = Math.floor(Math.random() * 7) + 2;
    ctx.lineWidth = strokeWidth;
    ctx.strokeText("MG", canvas.width / 4 + Math.random() * (canvas.width / 2), canvas.height / 4 + Math.random() * (canvas.height / 2));
  }

  // Draw the "MG" text (fill only)
  ctx.fillText("MG", canvas.width / 4 + Math.random() * (canvas.width / 2), canvas.height / 4 + Math.random() * (canvas.height / 2));

  // Update variation info
  document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${maxVariations}`;
  currentVariation = (currentVariation % maxVariations) + 1;
}

// Generate an initial logo on page load
generateFontLogo();