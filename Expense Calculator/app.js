// Store expenses as an object to easily track categories
let expenses = {};

function validateInput(category, amount) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    // Trim category to remove whitespace
    category = category.trim();

    // Validate category
    if (!category) {
        errorMessage.textContent = 'Category cannot be empty';
        return false;
    }

    if (category.length > 50) {
        errorMessage.textContent = 'Category name is too long (max 50 characters)';
        return false;
    }

    // Validate amount
    if (!amount || isNaN(amount)) {
        errorMessage.textContent = 'Amount must be a valid number';
        return false;
    }

    if (amount <= 0) {
        errorMessage.textContent = 'Amount must be greater than 0';
        return false;
    }

    if (amount > 1000000000) {
        errorMessage.textContent = 'Amount is too large (max 1 billion)';
        return false;
    }

    return true;
}

function addExpense() {
    const categoryInput = document.getElementById('category');
    const amountInput = document.getElementById('amount');
    const category = categoryInput.value;
    const amount = parseFloat(amountInput.value);

    if (!validateInput(category, amount)) {
        return;
    }

    // If category exists, add to existing amount, otherwise create new entry
    if (expenses[category]) {
        expenses[category] += amount;
    } else {
        expenses[category] = amount;
    }

    updateTable();
    
    // Clear inputs
    categoryInput.value = '';
    amountInput.value = '';
}

function updateTable() {
    const tbody = document.getElementById('expensesList');
    tbody.innerHTML = '';

    // Convert expenses object to array for sorting
    const expensesArray = Object.entries(expenses).map(([category, amount]) => ({
        category,
        amount
    }));

    // Sort by category name
    expensesArray.sort((a, b) => a.category.localeCompare(b.category));

    expensesArray.forEach((expense) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.category}</td>
            <td>$${expense.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            <td><button onclick="deleteExpense('${expense.category}')">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
}

function deleteExpense(category) {
    delete expenses[category];
    updateTable();
}

function calculateExpenses() {
    const expensesArray = Object.entries(expenses).map(([category, amount]) => ({
        category,
        amount
    }));

    if (expensesArray.length === 0) {
        alert('Please add some expenses first');
        return;
    }

    // Calculate total
    const total = expensesArray.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('totalExpenses').textContent = 
        `$${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    // Calculate average daily
    const averageDaily = total / 30;
    document.getElementById('averageDaily').textContent = 
        `$${averageDaily.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    // Get top 3 expenses
    const topExpenses = [...expensesArray]
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 3);

    const topExpensesList = document.getElementById('topExpenses');
    topExpensesList.innerHTML = '';
    topExpenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.category}: $${expense.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        topExpensesList.appendChild(li);
    });
} 