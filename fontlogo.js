// fontlogo.js

// Only using Pinyon Script from Google Fonts
const font = 'Pinyon Script';

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

    // Randomly decide between uppercase "MG" or lowercase "mg"
    const text = Math.random() > 0.5 ? "MG" : "mg";

    // Set a consistent font size for both letters
    const fontSize = 150;  // Increased for better visibility
    ctx.font = `${fontSize}px ${font}`;

    // Calculate kerning (letter spacing) between -40 and 40 pixels for overlap/spacing
    const kerning = Math.floor(Math.random() * 81) - 40;

    // Calculate the total width of both letters with kerning
    const textWidth1 = ctx.measureText(text[0]).width;
    const textWidth2 = ctx.measureText(text[1]).width;
    const totalTextWidth = textWidth1 + textWidth2 + kerning;

    // Center the text on the canvas by calculating the start point
    const xBase = (canvas.width - totalTextWidth) / 2;
    const yBase = canvas.height / 2 + fontSize / 3; // Adjust vertical position slightly to center text visually

    // Randomly decide whether to apply a stroke (50% chance)
    const applyStroke = Math.random() > 0.5;

    if (applyStroke) {
        // If stroke is applied, use a random stroke width between 2 and 8
        ctx.strokeStyle = 'black';
        const strokeWidth = Math.floor(Math.random() * 7) + 2; // Random stroke width
        ctx.lineWidth = strokeWidth;

        // Draw the text only as a stroke (no fill)
        ctx.strokeText(text[0], xBase, yBase);
        ctx.strokeText(text[1], xBase + textWidth1 + kerning, yBase);
    } else {
        // Set fill color to black for filled text
        ctx.fillStyle = 'black';
        // Draw the filled text if no stroke is applied
        ctx.fillText(text[0], xBase, yBase);
        ctx.fillText(text[1], xBase + textWidth1 + kerning, yBase);
    }

    // Update variation info
    document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${maxVariations}`;
    currentVariation = (currentVariation % maxVariations) + 1;
}

// Generate an initial logo on page load
generateFontLogo();