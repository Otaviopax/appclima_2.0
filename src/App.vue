<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="layout">
    <header>
      <RouterLink :to="{ name: 'home' }" class="logo">☁️ ClimaClean</RouterLink>
      <div class="input">
        <input class="input-cidade"
          type="text"
          id="cityinput"
          placeholder="Digite o nome da cidade que deseja ver o clima:"
        >
        <button class="botao-busca" @click="clicaNoBotao">
          <img
            class="img-busca"
            alt="buscar"
            src="https://www.svgrepo.com/show/488200/find.svg"
          />
        </button>
      </div>
      <nav class="nav">
        <RouterLink :to="{ name: 'about' }">Sobre o app</RouterLink>
        <span> | </span>
        <a href="https://github.com/Jkvua/AppClima" target="_blank">Github do projeto</a>
      </nav>
    </header>
    <RouterView />
    
    <footer>
      <p>☁️ ClimaClean</p>
      <p>Versão 2.0/2024</p>
    </footer>
  </div>
</template>

<style scoped>
  
  /* #layout {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items:normal;
    color: #2c3e50;
  } */

  /* Cabeçalho */
  header { 
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 10px 20px; 
    grid-area: header;
    background-color: rgb(153, 203, 245);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 200;
  }

  header .logo {
    text-decoration: none;
    font-size: 24px;
    text-decoration: none;
    color: white;
    margin-right: 5rem;
  }

  header:nth-child(1) {
    text-align: center;
}

  .input-cidade {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 15px;
    font-size: 15px;
    background-color: #b3ccec;
    color: hsla(0, 0%, 0%, 0.966);
    width: calc(110% - 110px);
  }

  .botao-busca {
    background-color: #b3ccec;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
    float: right;
  }

  .img-busca {
    width: 15px;
  }

 

  /* Navegação */
  .nav {
    display: flex;
    align-items:center;
    gap: 10px; /* Espaçamento entre os itens */
    margin-left: 10rem;
  }

  .nav a, .nav span {
    font-weight: bold;
    color: rgb(5, 11, 48);
    text-decoration: none;
  }

  .nav a.router-link-exact-active {
    color: #2c1580;
  }

  /* Footer */
  footer {
    grid-area: footer;
    background-color: rgb(153, 203, 245);
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

  footer p {
    margin: 10px 0;
  }

 
  @media screen and (min-width: 601px) {
    header {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
    }

    .input {
      justify-content: center;
    }
  }

  @media screen and (max-width: 600px) {
    header {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      align-items: center;
    }

    .input {
      justify-content: center;
    }
  } 
  </style>
