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
  // Leeren des Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Zufällige Auswahl einer Schriftart
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

  // Zufällige Entscheidung zwischen Großbuchstaben "MG" oder Kleinbuchstaben "mg"
  const text = Math.random() > 0.5 ? "MG" : "mg";

  // Konsistente Schriftgröße für beide Buchstaben
  const fontSize = 150;  // Erhöht für bessere Sichtbarkeit
  ctx.font = `bold ${fontSize}px ${randomFont}`;

  // Berechnung des Kerning (Buchstabenabstand)
  const kerning = Math.floor(Math.random() * 81) - 40;

  // Berechnung der Gesamtbreite beider Buchstaben mit Kerning
  const textWidth1 = ctx.measureText(text[0]).width;
  const textWidth2 = ctx.measureText(text[1]).width;
  const totalTextWidth = textWidth1 + textWidth2 + kerning;

  // Zentrieren des Textes auf dem Canvas
  const xBase = (canvas.width - totalTextWidth) / 2;
  const yBase = canvas.height / 2 + fontSize / 3; // Vertikale Position leicht anpassen

  // Zufällige Entscheidung für die Strichstärke (zwischen 2 und 8)
  const strokeWidth = Math.floor(Math.random() * 7) + 2;

  // Zufällige Entscheidung, ob eine Kontur angewendet wird
  const applyStroke = Math.random() > 0.5;

  if (applyStroke) {
    // Wenn eine Kontur angewendet wird, nur die Kontur zeichnen
    ctx.strokeStyle = 'black';
    ctx.lineWidth = strokeWidth;
    ctx.strokeText(text[0], xBase, yBase);
    ctx.strokeText(text[1], xBase + textWidth1 + kerning, yBase);
  } else {
    // Wenn keine Kontur angewendet wird, fülle den Text schwarz
    ctx.fillStyle = 'black';
    ctx.fillText(text[0], xBase, yBase);
    ctx.fillText(text[1], xBase + textWidth1 + kerning, yBase);
  }

  // Aktualisieren der Variationsinformationen
  document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${maxVariations}`;
  currentVariation = (currentVariation % maxVariations) + 1;
}

// Initiales Logo beim Laden der Seite generieren
document.fonts.ready.then(() => {
  generateFontLogo();
});