document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const messages = document.getElementById('messages');
  
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obtenemos los valores de los campos
      const email = registrationForm.elements['email'].value;
      const password = registrationForm.elements['password'].value;
  
      // Realiza validaciones (puedes agregar más validaciones si es necesario)
  
      // Creamos un objeto con los datos del usuario
      const userData = {
        email: email,
        password: password
      };
  
      // Realizamos una solicitud al servidor para guardar el usuario
      fetch('/registro', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            showMessage('Registro exitoso. Bienvenido!', true);
            registrationForm.reset();
            // Redirige al usuario al "index.html" después de 2 segundos
            setTimeout(function () {
              window.location.href = '/index.html';
            }, 2000);
          } else {
            showMessage('Error al registrar el usuario.');
          }
        })
        .catch(error => {
          showMessage('Error al registrar el usuario.');
        });
    });
  
    function showMessage(message, success = false) {
      messages.textContent = message;
      if (success) {
        messages.classList.add('success');
      } else {
        messages.classList.remove('success');
      }
    }
  });
  