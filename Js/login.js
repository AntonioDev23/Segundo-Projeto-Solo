document.addEventListener('DOMContentLoaded', () => {
  const loginBtns = document.querySelectorAll('.login-btn');
  const fundo = document.querySelector('.fundo');
  let overlay = null;

  loginBtns.forEach((loginBtn) => {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (overlay) return; // evita abrir múltiplos
      mostrarFormularioLogin();
      if (fundo) fundo.classList.add('fundo-escurecido');
    });
  });

  function criarOverlay() {
    overlay = document.createElement('div');
    overlay.id = 'login-overlay';
    Object.assign(overlay.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    });
    document.body.appendChild(overlay);
  }

  function mostrarFormularioLogin() {
    if (!overlay) criarOverlay();
    overlay.innerHTML = `
      <div id="login-form" style="
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        width: 300px;
      ">
        <h2 style="margin-bottom: 20px; color: #C50A0A;">Login</h2>
        <input type="text" placeholder="Usuário" style="width:100%; padding:10px; margin-bottom:10px; border: 1px solid #C50A0A; color: #C50A0A;" />
        <input type="password" placeholder="Senha" style="width:100%; padding:10px; margin-bottom:20px; border: 1px solid #C50A0A; color: #C50A0A;" />
        <button style="width:100%; padding:10px; background-color:#C50A0A; color:#fff; border:none; border-radius:5px;">Entrar</button>
        <p style="margin-top: 20px; text-align:center;">
          <a href="#" id="cadastro-link" style="color:#C50A0A; display:block; margin-bottom:10px;">Não tem conta? Cadastre-se</a>
          <a href="#" id="fechar-login" style="color:#C50A0A;">Cancelar</a>
        </p>
      </div>
    `;
    setEventos();
  }

  function mostrarFormularioCadastro() {
    overlay.innerHTML = `
      <div id="login-form" style="
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        width: 300px;
      ">
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
      </div>
    `;
    setEventos();
  }

  function setEventos() {
    document.getElementById('fechar-login').addEventListener('click', (e) => {
      e.preventDefault();
      overlay.remove();
      overlay = null;
      if (fundo) fundo.classList.remove('fundo-escurecido');
    });
    const cadastroLink = document.getElementById('cadastro-link');
    if (cadastroLink) {
      cadastroLink.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarFormularioCadastro();
      });
    }
    const voltarLogin = document.getElementById('voltar-login');
    if (voltarLogin) {
      voltarLogin.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarFormularioLogin();
      });
    }
  }
});
