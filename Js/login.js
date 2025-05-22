document.querySelector('.login-btn').addEventListener('click', function (event) {
  event.preventDefault(); // impede o clique de seguir o link

  // Evita criar o formulário múltiplas vezes
  if (document.getElementById('form-login')) return;

  const fundo = document.createElement('div');
  fundo.id = 'form-login';
  fundo.style.position = 'fixed';
  fundo.style.top = 0;
  fundo.style.left = 0;
  fundo.style.width = '100%';
  fundo.style.height = '100%';
  fundo.style.backgroundColor = 'rgba(0,0,0,0.5)';
  fundo.style.display = 'flex';
  fundo.style.justifyContent = 'center';
  fundo.style.alignItems = 'center';
  fundo.style.zIndex = 999;

  const container = document.createElement('div');
  container.style.backgroundColor = '#fff';
  container.style.padding = '30px';
  container.style.borderRadius = '10px';
  container.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
  container.style.width = '300px';
  container.style.textAlign = 'center';

  const titulo = document.createElement('h3');
  titulo.textContent = 'Entrar na Conta';
  container.appendChild(titulo);

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'E-mail';
  inputEmail.style.display = 'block';
  inputEmail.style.margin = '10px auto';
  inputEmail.style.width = '100%';
  inputEmail.style.padding = '10px';
  container.appendChild(inputEmail);

  const inputSenha = document.createElement('input');
  inputSenha.type = 'password';
  inputSenha.placeholder = 'Senha';
  inputSenha.style.display = 'block';
  inputSenha.style.margin = '10px auto';
  inputSenha.style.width = '100%';
  inputSenha.style.padding = '10px';
  container.appendChild(inputSenha);

  const btnEntrar = document.createElement('button');
  btnEntrar.textContent = 'Entrar';
  btnEntrar.style.backgroundColor = '#007BFF';
  btnEntrar.style.color = 'white';
  btnEntrar.style.border = 'none';
  btnEntrar.style.padding = '10px 20px';
  btnEntrar.style.marginTop = '10px';
  btnEntrar.style.cursor = 'pointer';
  btnEntrar.style.borderRadius = '6px';
  btnEntrar.style.fontSize = '16px';
  container.appendChild(btnEntrar);

  const btnCancelar = document.createElement('button');
  btnCancelar.textContent = 'Cancelar';
  btnCancelar.style.marginLeft = '10px';
  btnCancelar.style.marginTop = '10px';
  btnCancelar.style.padding = '10px 20px';
  btnCancelar.style.cursor = 'pointer';
  btnCancelar.style.borderRadius = '6px';
  btnCancelar.style.fontSize = '16px';
  btnCancelar.style.backgroundColor = '#ccc';
  btnCancelar.style.border = 'none';
  container.appendChild(btnCancelar);

  fundo.appendChild(container);
  document.body.appendChild(fundo);

  btnCancelar.addEventListener('click', () => {
    document.body.removeChild(fundo);
  });

  btnEntrar.addEventListener('click', () => {
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();

    if (email === '' || senha === '') {
      alert('Preencha todos os campos!');
      return;
    }

    alert(`E-mail: ${email}\nSenha: ${senha}`);
    document.body.removeChild(fundo);
  });
});
