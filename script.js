document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById('display');

    // Function to update the display
    function updateDisplay(value) {
        display.value = value;
    }

    // Function to handle button clicks
    function handleButtonClick(e) {
        const value = e.target.innerText;
        console.log("Button clicked:", value);  // Debugging line

        if (value === "C") {
            // Clear the display
            updateDisplay("");
        } else if (value === "←") {
            // Remove the last character
            updateDisplay(display.value.slice(0, -1));
        } else if (value === "=") {
            // Evaluate the expression
            try {
                let result = eval(display.value);
                
                // Handle edge cases like Infinity, -Infinity, and NaN
                if (result === Infinity || result === -Infinity || isNaN(result)) {
                    throw new Error('Invalid result');
                }
                
                // Update the display with the result
                updateDisplay(result);
            } catch (error) {
                // If there's an error (like syntax error or invalid calculation), show "Error"
                updateDisplay("Error");
            }
        } else {
            // Append the button value to the display
            updateDisplay(display.value + value);
        }
    }

    // Add event listeners to all buttons
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
