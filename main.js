const formulario = document.getElementById('nuevoUsuarioForm');
const resultadoDiv = document.getElementById('resultado');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nuevoUsuario = document.getElementById('nuevoUsuario').value;
    const nuevaContra = document.getElementById('nuevaContra').value;

    const data = {
        nuevoUsuario: nuevoUsuario,
        nuevaContra: nuevaContra
    };

    fetch('/cgi-bin/funciones.cgi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `nuevoUsuario=${encodeURIComponent(nuevoUsuario)}&nuevaContra=${encodeURIComponent(nuevaContra)}`
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.text();
    })
    .then(text => {
        resultadoDiv.textContent = text;
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
        resultadoDiv.textContent = 'Error al crear el usuario. Intenta nuevamente.';
    });
});
