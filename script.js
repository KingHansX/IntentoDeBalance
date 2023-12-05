let balance = 0;

// Función para obtener el sueldo inicial
function setInitialSalary(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    const initialSalaryInput = document.getElementById('initialSalaryInput');
    const initialSalary = parseFloat(initialSalaryInput.value);

    if (isNaN(initialSalary) || initialSalary < 0) {
        alert("Por favor, ingresa un sueldo válido.");
        return;
    }

    balance = initialSalary;
    updateBalance();

    // Ocultar el formulario y mostrar el contenido principal
    document.getElementById('initialSalaryForm').style.display = 'none';
    document.getElementById('balance').style.display = 'block';
}

// Inicializar el sueldo al cargar la página
let initialSalary = setInitialSalary();
balance = initialSalary;
updateBalance();

function updateBalance() {
    const balanceElement = document.getElementById('balanceAmount');
    balanceElement.textContent = balance.toFixed(2);
}

function addTransaction() {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');

    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        alert('Por favor, introduce una cantidad válida.');
        return;
    }

    balance += amount;

    updateBalance();

    const transactionList = document.getElementById('transactionList');
    const transactionItem = document.createElement('li');
    transactionItem.textContent = `${description}: $${amount.toFixed(2)}`;
    transactionList.appendChild(transactionItem);

    // Limpiar campos de entrada
    descriptionInput.value = '';
    amountInput.value = '';
}

function showBalance() {
    document.getElementById('balance').style.display = 'block';
    document.getElementById('transactions').style.display = 'none';
}

function showTransactions() {
    document.getElementById('balance').style.display = 'none';
    document.getElementById('transactions').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    updateBalance();
});
