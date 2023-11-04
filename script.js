const words = [
  'JAVASCRIPT',
  'HTML',
  'CSS',
  'NODE',
  'REACT',
  'ANGULAR',
  'JQUERY',
  'VUE'
];

const wordToGuess = "";
const guessedLetters = [];
const guessedWord = "";
const wrongGuesses = 0;
const imageCount = 0;

function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function initializedGame() {
  wordToGuess = selectRandomWord();
  guessedLetters = Array(wordToGuess.length).fill('_');
  wrongGuesses = 0;

  updateWordDisplay();
  updateMeltingSnowmanGraphic();
  const lettersContainer = document.querySelector('.letters');
  while (lettersContainer.firstChild) {
    lettersContainer.removeChild(lettersContainer.firstChild);
  }

  // Generate the letter buttons
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const button = document.createElement('button');
    button.innerText = letter;
    button.addEventListener('click', function() {
      handleGuess(letter);
    });
    lettersContainer.appendChild(button);
  }

  // Clear any previous win/lose message
  const messageContainer = document.querySelector('.message');
  messageContainer.innerText = '';
}