const expenses = [];

class Form {
    constructor() {
        this.form = document.getElementById('register-form');
        this.validateForm();
        this.loadStorage();
        this.inputs = this.form.querySelectorAll('.input-to-validate');
    }

    validateForm() {
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event);
            
            if (this.verifyInputs()) {
                this.inputsStorage();
                this.inputsClear();
            }
        });
    }

    inputsClear() {
        this.inputs.forEach(input => input.value = '');
    }

    verifyInputs() {
        let isValid = true;
        this.inputs.forEach(input => {
            input.nextElementSibling.classList.remove('active-error');

            if (!input.value) {
                input.nextElementSibling.classList.add('active-error');
                isValid = false;
            }
        });

        return isValid;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    loadStorage() {
        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
            expenses.push(...JSON.parse(storedExpenses));
        }
    }

    inputsStorage() {
        expenses.push({
            month: this.form.querySelector('#month').value,
            wage: Number(this.form.querySelector('#wage').value),
            type: this.form.querySelector('#type').value,
            value: Number(this.form.querySelector('#value').value),
            description: this.form.querySelector('#description').value
        });

        const expensesJSON = JSON.stringify(expenses);
        localStorage.setItem('expenses', expensesJSON);

        console.log(expenses);
    }

}

const registerForm = new Form();
