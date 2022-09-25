const celInput = document.getElementById('celcius');
const farhenInput = document.getElementById('fahrenheit');

const inputs = document.getElementsByClassName('input');
const inputArray = [...inputs];

inputArray.forEach((input, index, arr) => {
    input.addEventListener('input', (event) => {

        const value = event.target.value;
        
        if (event.target.name == 'celcius') {
            farhenInput.value = (value * 1.8) + 32;
        } else {
            celInput.value = (value - 32) / 1.8;
        }  
        
        let newClassBackgrnd = document.getElementById('main');     

        if (celInput.value >= 25) {
            newClassBackgrnd.className = "hotBackground";
        } else if (celInput.value < 25 && celInput.value >= 10) {
            newClassBackgrnd.className = 'warmBackground';
 
        }else {
            newClassBackgrnd.className = 'coldBackground';
        }
    });
});


