// fontlogo.js

// Array of common web fonts including Arial as a fallback
const fonts = [
    'ABeeZee', 'ADLaM Display', 'AR One Sans', 'Abel', 'Abhaya Libre', 'Aboreto',
    'Abril Fatface', 'Abyssinica SIL', 'Aclonica', 'Acme', 'Actor', 'Adamina', 'Advent Pro',
    'Aguafina Script', 'Akronim', 'Aladin', 'Alegreya', 'Aleo', 'Alice', 'Alike',
    'Allerta', 'Allura', 'Almendra', 'Amaranth', 'Amatic SC', 'Amiri', 'Anaheim',
    'Andika', 'Anton', 'Arapey', 'Arbutus Slab', 'Arima Madurai', 'Armata', 'Arvo',
    'Asap', 'Asar', 'Assistant', 'Athiti', 'Atma', 'Aubrey', 'Averia Libre', 'Averia Sans Libre',
    'Azeret Mono', 'Bad Script', 'Bai Jamjuree', 'Ballet', 'Baloo', 'Balthazar', 'Bangers',
    'Baskerville', 'Beau Rivage', 'Bevan', 'Big Shoulders Display', 'Big Shoulders Text', 'Bitter',
    'Bungee', 'Cabin', 'Cabin Condensed', 'Cabin Sketch', 'Candal', 'Cantata One', 'Cardo',
    'Carlito', 'Caveat', 'Charmonman', 'Chewy', 'Chivo', 'Cinzel', 'Cinzel Decorative',
    'Clicker Script', 'Coda', 'Coda Caption', 'Comic Sans MS', 'Courgette', 'Dancing Script',
    'Darker Grotesque', 'Dawning of a New Day', 'Dosis', 'Droid Sans', 'Droid Serif',
    'EB Garamond', 'Euphoria Script', 'Fauna One', 'Fjalla One', 'Fredoka One', 'Gloock',
    'Gloria Hallelujah', 'Gochi Hand', 'Granada', 'Great Vibes', 'Hanalei', 'Hind',
    'Hind Madurai', 'Homemade Apple', 'Inconsolata', 'Indie Flower', 'Julius Sans One',
    'Just Me Again Down Here', 'Kalam', 'Kanit', 'Karla', 'Kavoon', 'Knewave', 'Lobster',
    'Lobster Two', 'Lora', 'Mali', 'Marck Script', 'Merriweather', 'Monoton', 'Montserrat',
    'Mr Dafoe', 'Mr Bedfort', 'Nanum Gothic', 'Nerko One', 'Noto Sans', 'Noto Serif',
    'Noticia Text', 'Open Sans', 'Oswald', 'Over the Rainbow', 'Pangram', 'Patua One',
    'Play', 'Playfair Display', 'Poiret One', 'Poppins', 'Quicksand', 'Raleway', 'Roboto',
    'Roboto Condensed', 'Sacramento', 'Satisfy', 'Sen', 'Shadows Into Light', 'Sigmar One',
    'Sriracha', 'Staatliches', 'Tangerine', 'Teko', 'Titillium Web', 'Ubuntu', 'Unica77 Display',
    'Unica77 Text', 'Varela Round', 'Vibur', 'Volkhov', 'Zeyada', 'Arial' // Adding Arial as a fallback
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
    ctx.font = `bold ${fontSize}px ${randomFont}, Arial`;

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
        const strokeWidth = Math.floor(Math.random() * 7) + 2;
        ctx.lineWidth = strokeWidth;

        // Draw only the stroke for both letters
        ctx.strokeText(text[0], xBase, yBase);
        ctx.strokeText(text[1], xBase + textWidth1 + kerning, yBase);
    } else {
        // Randomly decide fill color (either white or black)
        ctx.fillStyle = Math.random() > 0.5 ? 'white' : 'black';
        
        // Draw the first letter
        ctx.fillText(text[0], xBase, yBase);
        // Draw the second letter, applying kerning
        ctx.fillText(text[1], xBase + textWidth1 + kerning, yBase);
    }

    // Update variation info
    document.getElementById('variation-info').textContent = `Current Variation: ${currentVariation}/${maxVariations}`;
    currentVariation = (currentVariation % maxVariations) + 1;
}

// Generate an initial logo on page load
generateFontLogo();