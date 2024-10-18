// fontlogo.js

// Array of fonts to choose from
const fonts = [
  'Pinyon Script', 'Cormorant Garamond', 'Pacifico', 'Lobster', 'Great Vibes',
  'Bangers', 'Dancing Script', 'Indie Flower', 'Merriweather', 'Roboto', 'Georgia'
];

// Max number of variations
const maxVariations = 10000;
let currentVariation = 1;

// Get the canvas and its context
const canvas = document.getElementById('patternCanvas');
const ctx = canvas.getContext('2d');

// Function to generate a random font-based logo
function generateFontLogo() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Pick random font
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

  // Set font style and size (consistent size as in the original example)
  ctx.font = `bold 100px ${randomFont}`;

  // Set a random stroke width between 2 and 8
  const strokeWidth = Math.floor(Math.random() * 7) + 2;

  // Set stroke style (black) and stroke width
  ctx.strokeStyle = 'black';
  ctx.lineWidth = strokeWidth;

  // Set fill style (white)
  ctx.fillStyle = 'white';

  // Generate random position for the text (consistent with original logic)
  const x = canvas.width / 4 + Math.random() * (canvas.width / 2);
  const y = canvas.height / 4 + Math.random() * (canvas.height / 2);

  // Draw text "MG"
  ctx.strokeText("MG", x, y);
  ctx.fillText("MG", x, y);

  // Update variation info
  document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${maxVariations}`;
  currentVariation = (currentVariation % maxVariations) + 1;
}

// Initial logo generation on load
generateFontLogo();