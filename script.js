document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar dados do formulário
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const apartment = document.getElementById('apartment').value.trim();
    const animals = document.getElementById('animals').value;
    const garage = document.getElementById('garage').value;

    // Validar dados
    if (!name || !dob || !age || !apartment || !animals || !garage) {
        showMessage('Por favor, preencha todos os campos.', 'error');
        return;
    }

    // Exemplo de envio de dados via fetch (para uma API backend)
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, dob, age, apartment, animals, garage })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showMessage('Cadastro realizado com sucesso!', 'success');
            document.getElementById('registrationForm').reset(); // Limpa o formulário
        } else {
            showMessage('Ocorreu um erro. Tente novamente.', 'error');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        showMessage('Ocorreu um erro. Tente novamente.', 'error');
    });
});

function showMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type;
}
