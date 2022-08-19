const celInput = document.getElementById('celcius');
const farhenInput = document.getElementById('fahrenheit');
const kelvInput = document.getElementById('kelvin');

const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener('input', function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {

            case "celcius":
                
                farhenInput.value = (value * 1.8) + 32;
                kelvInput.value = value + 273.15;
               
                break;

            case "fahrenheit":
                celInput.value = (value - 32) / 1.8;
                kelvInput.value = ((value - 32) / 1.8) + 273.15;
                break;

            case "kelvin":
                celInput.value = value - 273.15;
                farhenInput.value = ((value - 273.15) * 1.8) + 32;
                break;     
        }


        if (celInput.value >= 20) {
            
            let backgroung = document.getElementById('main').classList.add('greenbackground');
           

        } else {
            let coldBackgroung = document.getElementById('main').classList.add('coldBackground');
        }
    })
};