class Form {
    constructor() {
        this.form = document.getElementById('register-form');
        this.validateForm();
        this.inputs = this.form.querySelectorAll('.input-to-validate');
    }

    validateForm() {
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event);
            this.verifyInputs();
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

        if (this.verifyInputs()) {
            this.form.submit();
            this.inputsClear();
        }
    }
}

const registerForm = new Form();
