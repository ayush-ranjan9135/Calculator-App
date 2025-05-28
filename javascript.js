let display = document.querySelector('input[name="display"]');


let buttons = document.querySelectorAll('input[type="button"]');


buttons.forEach(button => {
    button.addEventListener('click', () => {

        let value = button.value;
       
        if (value === "AC") {
            display.value = "";
        }
        
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }
 
        else if (value === "=") {
            try {
                display.value = eval(display.value); // Use eval(it is a function in js) to calculate result
            } catch {
                display.value = "Error"; // Show error if something goes wrong
            }
        }
        
        else {
            display.value += value;
        }
    });
});
