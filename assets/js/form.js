class Form {
    constructor() {
        this.form = document.getElementById('register-form');
        this.validateForm();
        this.inputs = this.form.querySelectorAll('.input-to-validate');
        this.expenses = [];
    }

    validateForm() {
        this.form.addEventListener('submit', event => {
            this.verifyInputs();
            this.handleSubmit(event);
            this.inputsStorage();
            if (this.verifyInputs()) {
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

    inputsStorage () {
        if(this.verifyInputs()) {
            this.expenses.push({
                month: this.form.querySelector('#month').value,
                wage : Number(this.form.querySelector('#wage').value),
                type: this.form.querySelector('#type').value,
                value: Number(this.form.querySelector('#value').value), 
                description: this.form.querySelector('#description').value
            });

            const expensesJSON = JSON.stringify(this.expenses);
            localStorage.setItem('expenses', expensesJSON);
            console.log(localStorage.getItem('expenses'));
        }
    }

}

const registerForm = new Form();
