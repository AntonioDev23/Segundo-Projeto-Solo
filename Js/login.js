document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('.login-btn');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Se o formulário já estiver visível, não recria
    if (document.getElementById('login-form')) return;

    // Cria o overlay
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

    // Cria o formulário
    const form = document.createElement('div');
    form.id = 'login-form';
    form.style.backgroundColor = '#fff';
    form.style.padding = '30px';
    form.style.borderRadius = '10px';
    form.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
    form.style.width = '300px';
    form.innerHTML = `
      <h2 style="margin-bottom: 20px;">Login</h2>
      <input type="text" placeholder="Usuário" style="width:100%; padding:10px; margin-bottom:10px;"/>
      <input type="password" placeholder="Senha" style="width:100%; padding:10px; margin-bottom:20px;"/>
      <button style="width:100%; padding:10px; background-color:#007BFF; color:#fff; border:none; border-radius:5px;">Entrar</button>
      <p style="margin-top: 10px; text-align:center;">
        <a href="#" id="fechar-login" style="color:#007BFF;">Cancelar</a>
      </p>
    `;

    // Adiciona o formulário ao overlay
    overlay.appendChild(form);
    document.body.appendChild(overlay);

    // Evento de fechar
    document.getElementById('fechar-login').addEventListener('click', (e) => {
      e.preventDefault();
      overlay.remove();
    });
  });
});
