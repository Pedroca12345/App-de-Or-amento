class Expense {
    constructor () {
        this.expenses = localStorage.getItem('expenses');
        this.expensesList = JSON.parse(this.expenses);
        this.expensesTable = document.getElementById('expenses-table');
        this.clearButton = document.querySelector('.expenses-clear');
        this.saveExpense();
        this.expensesClear();
    }

    expensesClear() {
        this.clearButton.addEventListener('click', () => {
            localStorage.clear();
            this.expenses = [];
            this.expensesTable.innerHTML = `
                        <tr>
                            <th>Mês</th>
                            <th>Salário</th>
                            <th>Despesa</th>
                            <th>Valor</th>
                            <th>Descrição</th>
                        </tr>`;
        });
    }

    saveExpense() {
        this.expensesList.forEach(expense => {
                const expensesRow = this.createRow();
                expensesRow.innerHTML = `
                <td>${expense.month}</td>
                <td>R$${expense.wage}</td>
                <td>${expense.type}</td>
                <td>R$${expense.value}</td>
                <td>${expense.description}</td>
            `;

            this.expensesTable.innerHTML += expensesRow.innerHTML;

        });
    }

    createRow() {
        const row = document.createElement('tr');
        return row;
    }

}

const expense = new Expense();
