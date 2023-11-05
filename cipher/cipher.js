var choice = "";
var phrase = "";
var encoded = "";

const options = ["bacon"];
const phrases = ["sunhacks", "who are you", "what", "solve this", "another one", "hello"];

function pickCipher() {
    choice = options[Math.floor(Math.random() * 1)];
    phrase = phrases[Math.floor(Math.random() * 6)];

    // use bacon cipher
    if (choice == "bacon") {
        // remove spaces
        phrase = phrase.replace(/\s+/g, '');
        //alert(phrase);
        baconCipher();
    }
}

function integerToBinary5Digits(number) {
    if (number >= 0 && number <= 31) {
        // Convert the number to binary and pad it with leading zeros
        const binaryString = number.toString(2).padStart(5, '0');
        return binaryString;
    } else {
        return null; // Return null for numbers outside the valid range
    }
}


function baconCipher() {
    // cycle through each character and convert it into a binary number for the bacon cipher
    for (let i = 0; i < phrase.length; i++) {
        var temp = phrase.charAt(i).charCodeAt(0) - 97;
        encoded += integerToBinary5Digits(temp) + " ";
    }

    // remove extra space from string
    encoded = encoded.substring(0, encoded.length - 1);

    //alert(encoded);

    encoded = encoded.replace(/0/g, 'a').replace(/1/g, 'b');

    //alert(encoded);

    document.getElementById("cipher").innerHTML = encoded;
}

// when the user presses enter on the input
function handleKeyPress(event) {
    if (event.key === "Enter") {
        // Get the text from the input element
        var inputElement = document.getElementById("textBox");
        var input = inputElement.value;

        // check if input was correct
        if (input.toLowerCase() == phrase.toLowerCase()) {
            // correct
            document.getElementById("results").innerHTML = "Correct!";
            document.getElementById("results").classList.remove("textFancyWrong");
            document.getElementById("results").classList.add("textFancyRight");
            //alert("Correct!");
        } else {
            // incorrect
            document.getElementById("results").innerHTML = "Incorrect!";
            document.getElementById("results").classList.remove("textFancyRight");
            document.getElementById("results").classList.add("textFancyWrong");
            //alert("Incorrect");
        }
    }
}

// Create an example table structure
const baconTable = [
    ["Letter", "Code", "Letter", "Code"],
    ["A", "AAAAA", "B", "AAAAB"],
    ["C", "AAABA", "D", "AAABB"],
    ["E", "AABAA", "F", "AABAB"],
    ["G", "AABBA", "H", "AABBB"],
    ["I", "ABAAA", "J", "ABAAB"],
    ["K", "ABABA", "L", "ABABB"],
    ["M", "ABBAA", "N", "ABBAB"],
    ["O", "ABBBA", "P", "ABBBB"],
    ["Q", "BAAAA", "R", "BAAAB"],
    ["S", "BAABA", "T", "BAABB"],
    ["U", "BABAA", "V", "BABAB"],
    ["W", "BABBA", "X", "BABBB"],
    ["Y", "BBAAA", "Z", "BBAAB"]
];

// Function to generate an HTML table from a 2D array
function generateTable(data) {
    let tableHTML = "<table>";

    for (const row of data) {
        tableHTML += "<tr>";
        for (const cell of row) {
            tableHTML += `<td>${cell}</td>`;
        }
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";
    return tableHTML;
}

const toggleButton = document.getElementById("toggleButton");
const toggleButton2 = document.getElementById("toggleButton2");
const displayText = document.getElementById("displayText");
const displayText2 = document.getElementById("displayText2");

let isTextVisible = false;
let isTextVisible2 = false;

toggleButton.addEventListener("click", function () {
    if (isTextVisible) {
        // If the text is currently visible, hide it
        displayText.style.display = "none";
        isTextVisible = false;
    } else {
        // If the text is not visible, show it
        displayText.style.display = "block";
        if (choice == "bacon") {
            displayText.innerHTML = "Consider how the text might relate to binary.";
        }
        isTextVisible = true;
    }
});

toggleButton2.addEventListener("click", function () {
    if (isTextVisible2) {
        // If the text is currently visible, hide it
        displayText2.style.display = "none";
        isTextVisible2 = false;
    } else {
        // If the text is not visible, show it
        displayText2.style.display = "block";
        if (choice == "bacon") {
            // Generate the table HTML and insert it into the element
            const tableHTML = generateTable(baconTable);
            displayText2.innerHTML = tableHTML;
        }
        isTextVisible2 = true;
    }
});


pickCipher();