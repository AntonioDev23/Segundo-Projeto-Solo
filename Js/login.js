document.addEventListener('DOMContentLoaded', () => {
  const loginBtns = document.querySelectorAll('.login-btn');
  const fundo = document.querySelector('.fundo');

  loginBtns.forEach((loginBtn) => {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (document.getElementById('login-overlay')) return;
      mostrarFormularioLogin();
      if (fundo) fundo.classList.add('fundo-escurecido');  // adiciona desfoque no fundo principal
    });
  });

  function mostrarFormularioLogin() {
    const overlay = document.createElement('div');
    overlay.id = 'login-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    const form = document.createElement('div');
    form.id = 'login-form';
    form.style.backgroundColor = '#fff';
    form.style.padding = '30px';
    form.style.borderRadius = '10px';
    form.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
    form.style.width = '300px';

    form.innerHTML = `
      <h2 style="margin-bottom: 20px; color: #C50A0A;">Login</h2>
      <input type="text" placeholder="Usuário" style="width:100%; padding:10px; margin-bottom:10px; border: 1px solid #C50A0A; color: #C50A0A;" />
      <input type="password" placeholder="Senha" style="width:100%; padding:10px; margin-bottom:20px; border: 1px solid #C50A0A; color: #C50A0A;" />
      <button style="width:100%; padding:10px; background-color:#C50A0A; color:#fff; border:none; border-radius:5px;">Entrar</button>
      <p style="margin-top: 20px; text-align:center;">
        <a href="#" id="cadastro-link" style="color:#C50A0A; display:block; margin-bottom:10px;">Não tem conta? Cadastre-se</a>
        <a href="#" id="fechar-login" style="color:#C50A0A;">Cancelar</a>
      </p>
    `;

    overlay.appendChild(form);
    document.body.appendChild(overlay);

    document.getElementById('fechar-login').addEventListener('click', (e) => {
      e.preventDefault();
      overlay.remove();
      if (fundo) fundo.classList.remove('fundo-escurecido'); // remove desfoque ao fechar
    });

    document.getElementById('cadastro-link').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarFormularioCadastro(overlay);
    });
  }

  function mostrarFormularioCadastro(overlay) {
    const form = document.getElementById('login-form');
    form.innerHTML = `
      <h2 style="margin-bottom: 20px; color: #C50A0A;">Cadastro</h2>
      <input type="text" placeholder="Nome completo" style="width:100%; padding:10px; margin-bottom:10px; border: 1px solid #C50A0A; color:#C50A0A;" />
      <input type="email" placeholder="E-mail" style="width:100%; padding:10px; margin-bottom:10px; border: 1px solid #C50A0A; color:#C50A0A;" />
      <input type="text" placeholder="Usuário" style="width:100%; padding:10px; margin-bottom:10px; border: 1px solid #C50A0A; color:#C50A0A;" />
      <input type="password" placeholder="Senha" style="width:100%; padding:10px; margin-bottom:10px; border: 1px solid #C50A0A; color:#C50A0A;" />
      <input type="password" placeholder="Confirmar senha" style="width:100%; padding:10px; margin-bottom:20px; border: 1px solid #C50A0A; color:#C50A0A;" />
      <button style="width:100%; padding:10px; background-color:#C50A0A; color:#fff; border:none; border-radius:5px;">Cadastrar</button>
      <p style="margin-top: 20px; text-align:center;">
        <a href="#" id="voltar-login" style="color:#C50A0A; display:block; margin-bottom:10px;">Já tem conta? Fazer login</a>
        <a href="#" id="fechar-login" style="color:#C50A0A;">Cancelar</a>
      </p>
    `;

    document.getElementById('fechar-login').addEventListener('click', (e) => {
      e.preventDefault();
      overlay.remove();
      if (fundo) fundo.classList.remove('fundo-escurecido'); // remove desfoque ao fechar
    });

    document.getElementById('voltar-login').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarFormularioLogin();
    });
  }
});
