import "./login.css";
import React from "react";

const Login = () => {
  return (
    <div>
      <main>
        <a href="https://larnuapp.web.app/" class="btn-back">
          <i class="fa-solid fa-chevron-left"></i>
        </a>
        <div class="container-btn">
          <img
            src="https://i.postimg.cc/fLDFsmzw/larnup.webp"
            alt="Imagen-larnu"
          />
          <p>Bienvenido</p>
          <span>busca tu perfil de discord</span>
          <form class="box-input">
            <input type="email" placeholder="E-mail" id="mail" required />
            <input type="password" placeholder="Discord ID" required />
            <button class="btn-form">Buscar</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
