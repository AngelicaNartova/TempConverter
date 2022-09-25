const celInput = document.getElementById('celcius');
const farhenInput = document.getElementById('fahrenheit');
let newClassBackground = document.getElementById('main');

const inputs = document.getElementsByClassName('input');
const inputArray = [...inputs];

inputArray.forEach((input, index, arr) => {
    input.addEventListener('input', (event) => {

        const value = event.target.value;
        
        if (event.target.name == 'celcius') {
            farhenInput.value = Math.round((value * 1.8) + 32);
        } else {
            celInput.value = Math.round((value - 32) / 1.8);
        }       

        if (celInput.value >= 25) {
            newClassBackground.className = "hot-background";
        } else if (celInput.value < 25 && celInput.value >= 10) {
            newClassBackground.className = 'warm-background';
 
        }else {
            newClassBackground.className = 'cold-background';
        }
    });
});


