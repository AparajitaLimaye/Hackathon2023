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

const maxWrongGuesses = 6;
var wordToGuess = '';
var guessedLetters = [];
var wrongGuesses = 0;
const imageCount = 1;

function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function initializedGame() {
  wordToGuess = selectRandomWord();
  //console.log(wordToGuess);
  guessedLetters = Array(wordToGuess.length).fill('_');

  updateWordDisplay();
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
      var check = handleGuess(letter);
      if (check)
        button.style.backgroundColor = "green";
      else
        button.style.backgroundColor = "gray";
    });
    lettersContainer.appendChild(button);
  }

  // Clear any previous win/lose message
  const messageContainer = document.querySelector('.message');
  messageContainer.innerText = '';
}

function updateWordDisplay() {
  const wordContainer = document.querySelector('.word');
  wordContainer.innerText = guessedLetters.join(' ');
}

function handleGuess(letter) {
  var rT;
  console.log("Guessed Letter: " + wordToGuess);
  console.log("Letter: " + letter);
  
  // If the letter has already been guessed, do nothing
  if (guessedLetters.includes(letter)) {
    return;
  }

  // Add the letter to the list of guessed letters
  guessedLetters.forEach((guessedLetter, index) => {
    if (wordToGuess[index] === letter) {
      guessedLetters[index] = letter;
    }
  });

  // If the letter is not in the hidden word, increment the wrong guesses count and update the Melting Snowman graphic
  if (!wordToGuess.includes(letter)) {
    rT = false;
    wrongGuesses++;
  }
  else
  {
    rT = true;
  }

  // Update the word display
  updateWordDisplay();

  // Check if the game has been won or lost
  checkWinOrLose();

  return rT;
}


function checkWinOrLose() {
  if (guessedLetters.join('') === wordToGuess) {
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = 'You win!';
    const letterButtons = document.querySelectorAll('.letters button');
    letterButtons.forEach(button => {
      button.disabled = true;
      button.removeEventListener('click', handleGuess);
    });
  } else if (wrongGuesses >= maxWrongGuesses) {
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = `You lose! The word was "${wordToGuess}".`;
    const letterButtons = document.querySelectorAll('.letters button');
    letterButtons.forEach(button => {
      button.disabled = true;
      button.removeEventListener('click', handleGuess);
    });
  }
}

// Initialize the game when the page loads
window.addEventListener('load', initializedGame);