const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        const displayValue = display.value;

        switch (buttonText) {
            case 'C':
                display.value = '';
                break;
            case '=':
                try {
                    display.value = eval(displayValue);
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            case '←':
                display.value = displayValue.slice(0, -1);
                break;
            default:
                display.value += buttonText;
        }
    });
});