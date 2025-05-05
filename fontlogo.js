// fontlogo.js

// Array von Web-sicheren Schriftarten
const fonts = [
  'Arial', 'Verdana', 'Helvetica', 'Georgia', 'Times New Roman', 
  'Trebuchet MS', 'Comic Sans MS', 'Courier New', 'Impact', 
  'Tahoma', 'Palatino Linotype', 'Lucida Console', 'Lucida Sans Unicode',
  'Garamond', 'Bookman', 'Arial Black', 'Arial Narrow', 
  'Century Gothic', 'Comic Sans', 'Frank Ruhl Libre', 
  'Tahoma', 'Segoe UI', 'Optima', 'Georgia', 'Baskerville', 
  'Avenir', 'Futura', 'Garamond', 'Courier', 'Didot', 
  'Gill Sans', 'Helvetica Neue', 'Rockwell', 'Lucida Grande', 
  'Candara', 'Cambria', 'Segoe UI', 'Verdana', 'Charcoal',
  'Brush Script MT', 'Comic Sans MS', 'Copperplate', 
  'Frank Ruhl Libre', 'Optima', 'Palatino', 'Zapfino',
  'Arial Rounded MT Bold', 'Bodoni MT', 'Goudy Old Style', 
  'Hoefler Text', 'Kaiti', 'Lucida Handwriting', 'Palatino Linotype',
  'Segoe Print', 'Trebuchet MS', 'Bodoni 72', 'Baskerville Old Face', 
  'Bodoni MT Black', 'American Typewriter', 'Rockwell Condensed',
  'Arial Unicode MS', 'Charcoal', 'Helvetica', 'Gill Sans MT', 
  'Myriad Pro', 'Segoe MDL2 Assets', 'Comic Sans MS', 'Garamond',
  'MS Serif', 'MS Sans Serif', 'Georgia', 'Baskerville'
];

// Maximalanzahl an Variationen
const maxVariations = 10000;
let currentVariation = 1;

// Holen des Canvas und seines Kontexts
const canvas = document.getElementById('patternCanvas');
const ctx = canvas.getContext('2d');

// Funktion zum Erzeugen eines zufälligen Schriftlogo
function generateFontLogo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const inputText = document.getElementById('customText').value.trim();
  const defaultText = Math.random() > 0.5 ? "MG" : "mg";
  const text = /^[a-zA-Z0-9]{2,4}$/.test(inputText) ? inputText : defaultText;

  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  const fontSize = 150;
  ctx.font = `bold ${fontSize}px ${randomFont}`;

  // Kerning logic for 2–4 characters
  const kerning = Math.floor(Math.random() * 81) - 40;

  // Measure total width
  let totalTextWidth = 0;
  const charWidths = [];
  for (let char of text) {
    const width = ctx.measureText(char).width;
    charWidths.push(width);
    totalTextWidth += width;
  }
  totalTextWidth += kerning * (text.length - 1);

  const xBase = (canvas.width - totalTextWidth) / 2;
  const yBase = canvas.height / 2 + fontSize / 3;

  const strokeWidth = Math.floor(Math.random() * 7) + 2;
  const applyStroke = Math.random() > 0.5;

  let currentX = xBase;
  for (let i = 0; i < text.length; i++) {
    if (applyStroke) {
      ctx.strokeStyle = 'black';
      ctx.lineWidth = strokeWidth;
      ctx.strokeText(text[i], currentX, yBase);
    } else {
      ctx.fillStyle = 'black';
      ctx.fillText(text[i], currentX, yBase);
    }
    currentX += charWidths[i] + kerning;
  }

  document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${maxVariations}`;
  currentVariation = (currentVariation % maxVariations) + 1;
}

function saveCanvasImage() {
  const imageDataURL = canvas.toDataURL("image/png");
  const newTab = window.open();
  newTab.document.write(`<img src="${imageDataURL}" alt="Canvas Image"><p>Click and hold on image to save</p>`);
}