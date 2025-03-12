// Function to add characters to the display
function appendCharacter(char) {
    document.getElementById("display").value += char;
}

// Function to clear the entire display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression and show the result
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Function to handle keyboard input
document.addEventListener("keydown", function (event) {
    let key = event.key;

    // If the key is a number (0-9) or a valid operator, append it
    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendCharacter(key);
    }
    // If Enter key is pressed, calculate the result
    else if (key === "Enter") {
        calculateResult();
    }
    // If Backspace key is pressed, delete the last character
    else if (key === "Backspace") {
        deleteLast();
    }
    // If Escape (Esc) key is pressed, clear the display
    else if (key === "Escape") {
        clearDisplay();
    }
});
