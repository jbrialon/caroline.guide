<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <section id="intro">
      <div class="avatar">
        <img src="../src/assets/avatar.jpg" alt="Caroline Brialon - Accompagnatrice en montagne">
      </div>
      <h1>
        Caroline Brialon
      </h1>
      <h2>
        Accompagnatrice en montagne
      </h2>
      <p>
        "S'éloigner de tout pour se rapprocher de l'essentiel."
      </p>
    </section>
    <section id="text">
      <p>
        Portage en montagne dans la Vallée de l'Ubaye
        <br>
        <br>
        Les mulets et les chevaux ont été utilisés pendant des siècles pour transporter des charges sur les routes et chemins de montagne. Aujourd’hui, la plupart des transports en milieu difficile d'accès sont effectués en hélicoptère. Avec Badou nous vous proposons une alternative écologique afin de répondre à une demande croissante de portages de la part des gardiens de refuges, des éleveurs, des particuliers et bien d'autres... 
        Nous avons donc commencé les portages avec mon mulet, en été 2020 dans la vallée de l'Ubaye.
        <br>
        <br>
        Les travaux de portage en montagne sont effectués sur tous types de terrain sauf pierriers infranchissables et falaises, afin de remplacer les engins motorisés ou d'accèder là où aucune mécanique n'irait. Mon Badou et moi même déposerons le matériel, où vous le souhaitez, quand vous en avez besoin. 
        Que ce soit  des vivres, du gaz, du bois, du sel, du sable, du ciment, du matériel fragile, des piquets, des clôtures... nous trouvons la solution adaptée de portage animal pour vous. 
        <br>
        <br>
        Les devis de portage en montagne, inclueront le travail du meneur, le transport (A/R) du mulet, la mise en préparation des charges, ainsi que les frais de déplacement.
        N'hesitez pas à me contacter pour plus d'informations.
      </p>
    </section>
  </div>
</template>

<style>
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
}

#app {
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app h1 {
  color: white;
  font-size: 2.5rem;
  border: 4px solid white;
  padding: 1.5rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-shadow: 0px 0px 10px #000000;
}

#app h2 {
  color: white;
  font-size: 2.5rem;
  padding: 0 2.5rem;
  text-shadow: 0px 0px 10px #000000;
}

#app p {
  font-style: italic;
  color: white;
  font-size: 2.5rem;
  padding: 0 2.5rem;
  text-shadow: 0px 0px 10px #000000;
}

#intro {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-image: url('../src/assets/background-2.jpg');
  background-position: center center;
  background-size: cover;
}

#intro .avatar {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow:hidden;
  margin-bottom: 2.5rem;
}

#intro .avatar img {
  width: 100%;
  display: block;
}

#text {
  display: flex;
  position: relative;
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-image: url('../src/assets/background-3.jpg');
  background-position: center center;
  background-size: cover;
}

#text:after {
  position: absolute;
  content: '';
  display: block;
  background: black;
  opacity: 0.15;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#text p {
  text-align: center;
  font-size: 1.65rem;
  max-width: 90vw;
  margin-top: 5rem;
}

@media screen and (min-width: 48em) {
  #app h1 {
    font-size:5rem;
    padding: 1.5rem 5rem;
  }
  #text p {
    margin-top: 15rem;
    font-size: 2rem;
    max-width: 55vw;
  }
}

</style>
