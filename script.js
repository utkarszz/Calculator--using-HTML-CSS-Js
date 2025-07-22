let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;
        if (value === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            document.querySelector('#display').value = string;
        } else if (value === 'C') {
            string = "";
            document.querySelector('#display').value = string;
        } else if (["M+", "M-", "%"].includes(value)) {
            // Ignore unsupported buttons
            return;
        } else {
            string = string + value;
            document.querySelector('#display').value = string;
        }
    });
});