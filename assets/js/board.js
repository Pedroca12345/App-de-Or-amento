const expensesRow = document.getElementById('expenses-row');

class Expense {
    constructor () {
        this.expenses = JSON.parse(localStorage.getItem('expenses'));
        this.expensesTable = document.getElementById('expenses-table');
        this.clearButton = document.querySelector('.expenses-clear');
        this.saveExpense();
        this.expensesClear();
    }

    expensesClear() {
        this.clearButton.addEventListener('click', () => {
            localStorage.clear();
            this.expenses = [];
            expensesRow.innerHTML = '';
        });
    }

    saveExpense() {
        this.expenses.forEach(expense => {
            expensesRow.innerHTML = `
                <td>${expense.month}</td>
                <td>R$${expense.wage}</td>
                <td>${expense.type}</td>
                <td>R$${expense.value}</td>
                <td>${expense.description}</td>
            `;
            this.expensesTable.appendChild(expensesRow);
        });
    }
}

const expense = new Expense();
