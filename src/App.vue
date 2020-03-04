<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Lista de tarefas
      </h1>
      <p class="subtitle">
        Minha aplicação de lista de tarefas usando <strong>Vue</strong>!
      </p>

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/gallery">Galeria</router-link> |
        <a href="https://github.com/lubien" target="_blank">Quem fez?</a>
      </div>

      <router-view />
    </div>
  </section>
</template>

<style lang="scss">
@import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
