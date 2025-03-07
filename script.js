//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById('display');

    // Function to update the display
    function updateDisplay(value) {
        display.value = value;
    }

    // Function to handle button clicks
    function handleButtonClick(e) {
        const value = e.target.innerText;

        if (value === "C") {
            updateDisplay("");
        } else if (value === "←") {
            updateDisplay(display.value.slice(0, -1));
        } else if (value === "=") {
            try {
                updateDisplay(eval(display.value));
            } catch (error) {
                updateDisplay("Error");
            }
        } else {
            updateDisplay(display.value + value);
        }
    }

    // Add event listeners to all buttons
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
