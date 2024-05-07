function somar(a, b) {
    return a + b;
}

const btnSomar = document.createElement('button');
btnSomar.textContent = 'Somar'; 

function handleSomar() {
    const a = 5; 
    const b = 3; 
    const resultado = somar(a, b); 
    alert(`Resultado da soma: ${resultado}`); 
}

btnSomar.addEventListener('click', handleSomar);

document.body.appendChild(btnSomar);