<template>
  <div id="app">
    <h1>
      Caroline Brialon
    </h1>
    <h2>
      Accompagnatrice en montagne
    </h2>
    <p>
      "S'eloigner de tout pour se rapprocher de l'essentiel"
    </p>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
}

#app {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('../src/assets/background.jpg');
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app h1 {
  color: white;
  font-size: 5rem;
  border: 4px solid white;
  padding: 1.5rem 5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-shadow: 0px 0px 10px #000000;
}

#app h2 {
  color: white;
  font-size: 2.5rem;
}

#app p {
  font-style: italic;
  color: white;
  font-size: 2.5rem;
}
</style>
