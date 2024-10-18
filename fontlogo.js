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

  // Randomly decide between uppercase "MG" or lowercase "mg"
  const text = Math.random() > 0.5 ? "MG" : "mg";

  // Set a consistent font size for both letters
  const fontSize = 150;  // Increased for better visibility
  ctx.font = `bold ${fontSize}px ${randomFont}`;

  // Calculate kerning (letter spacing) between -40 and 40 pixels for overlap/spacing
  const kerning = Math.floor(Math.random() * 81) - 40;

  // Calculate the total width of both letters with kerning
  const textWidth1 = ctx.measureText(text[0]).width;
  const textWidth2 = ctx.measureText(text[1]).width;
  const totalTextWidth = textWidth1 + textWidth2 + kerning;

  // Center the text on the canvas by calculating the start point
  const xBase = (canvas.width - totalTextWidth) / 2;
  const yBase = canvas.height / 2 + fontSize / 3; // Adjust vertical position slightly to center text visually

  // Randomly decide fill color (either white or black)
  ctx.fillStyle = Math.random() > 0.5 ? 'white' : 'black';

  // Randomly decide whether to apply a stroke (50% chance)
  const applyStroke = Math.random() > 0.5;

  if (applyStroke) {
    // If stroke is applied, use a random stroke width between 2 and 8
    ctx.strokeStyle = 'black';
    const strokeWidth = Math.floor(Math.random() * 7) + 2;
    ctx.lineWidth = strokeWidth;
    ctx.strokeText(text[0], xBase, yBase);
    ctx.strokeText(text[1], xBase + textWidth1 + kerning, yBase);
  }

  // Draw the first letter
  ctx.fillText(text[0], xBase, yBase);

  // Draw the second letter, applying kerning
  ctx.fillText(text[1], xBase + textWidth1 + kerning, yBase);

  // Update variation info
  document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${maxVariations}`;
  currentVariation = (currentVariation % maxVariations) + 1;
}

// Generate an initial logo on page load
generateFontLogo();