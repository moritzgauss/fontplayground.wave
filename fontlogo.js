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

  // Set random font size between 80px and 150px
  const fontSize = Math.floor(Math.random() * 70) + 80;
  
  // Set random stroke width between 2 and 8
  const strokeWidth = Math.floor(Math.random() * 7) + 2;

  // Set font style
  ctx.font = `bold ${fontSize}px ${randomFont}`;

  // Set stroke style (black) and fill style (white)
  ctx.strokeStyle = 'black';
  ctx.lineWidth = strokeWidth;
  ctx.fillStyle = 'white';

  // Generate random position for the text
  const x = Math.random() * (canvas.width - 200);
  const y = Math.random() * (canvas.height - 100) + 100;

  // Draw the random letters (vary between 'MG' and other letters)
  const randomLetters = Math.random() > 0.5 ? "MG" : "G";

  // Draw the text with stroke and fill
  ctx.strokeText(randomLetters, x, y);
  ctx.fillText(randomLetters, x, y);

  // Update variation info
  document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${maxVariations}`;
  currentVariation = (currentVariation % maxVariations) + 1;
}

// Initial logo generation on load
generateFontLogo();