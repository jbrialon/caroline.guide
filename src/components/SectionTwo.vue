<script setup>
import image4 from "@/assets/presentation/image-4.jpg";
import image5 from "@/assets/presentation/image-5.jpg";
import image6 from "@/assets/presentation/image-6.jpg";
import image7 from "@/assets/presentation/image-7.jpg";
</script>

<template>
  <section id="SectionOne" class="section">
    <div class="grid-container">
      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 center-content">
          <h3>Itinérance avec portage muletier</h3>
          <span class="section__info"> 150€ par personne</span>
          <p>
            Venez randonner avec une professionnelle de la montagne sur 2 jours
            en famille ou entre amis avec une nuit en bivouac Un sac léger à la
            journée, une soirée conviviale et les joies du partage avec l'animal
          </p>
        </div>
        <div class="cell small-12 medium-6 medium-offset-1">
          <img v-lazy="image4" class="right" alt="" />
        </div>
      </div>

      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 small-order-2 medium-order-1">
          <img v-lazy="image5" class="left" alt="" />
        </div>
        <div
          class="cell small-12 medium-5 medium-offset-1 small-order-1 medium-order-2 center-content"
        >
          <h3>Bivouac avec portage muletier</h3>
          <span class="section__info">Tarif à définir ensemble</span>
          <p>
            Une expérience sur plusieurs jours avec une accompagnatrice en
            montagne et son mulet Badou, qui deviendra vite la mascotte de
            l'expédition.
          </p>
        </div>
      </div>

      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 center-content">
          <h3>Portage muletier</h3>
          <span class="section__info">350€ par jour</span>
          <p>
            Avec le portage animal, nous proposons une alternative écologique à
            l'héliportage et aux engins motorisés. Que ce soit pour ravitailler
            des refuges ou des cabanes d'alpages, ou pour monter du materiel de
            travaux/vidéo en montagne, le portage animal est la solution.
          </p>
        </div>
        <div class="cell small-12 medium-6 medium-offset-1">
          <img v-lazy="image6" class="right" alt="" />
        </div>
      </div>

      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 small-order-2 medium-order-1">
          <img v-lazy="image5" class="left" alt="" />
        </div>
        <div
          class="cell small-12 medium-4 medium-offset-1 small-order-1 medium-order-2 center-content"
        >
          <h3>Débardage</h3>
          <span class="section__info">350€ par jour</span>
          <p>
            Profiter de la traction animale pour faire votre bois en réduisant
            votre impact carbone Les chevaux peuvent se faufiler dans des
            espaces difficiles d'accès pour les engins motorisés.
          </p>
        </div>
      </div>

      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 center-content">
          <h3>Travaux agricoles</h3>
          <span class="section__info">Tarif à définir ensemble</span>
          <p>
            La traction animale convient très bien aux travaux de maraîchage. La
            précision du travail et le respect des sols sont très appréciés dans
            les petites exploitations.
          </p>
        </div>
        <div class="cell small-12 medium-6 medium-offset-1">
          <img v-lazy="image6" class="right" alt="" />
        </div>
      </div>

      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 small-order-2 medium-order-1">
          <img v-lazy="image7" class="left" alt="" />
        </div>
        <div
          class="cell small-12 medium-4 medium-offset-1 small-order-1 medium-order-2 center-content"
        >
          <h3>Pension</h3>
          <span class="section__info">6€ par jour et par cheval</span>
          <p>
            Vous cherchez à faire garder votre dada préféré dans un troupeau de
            montagne ? Les crinières des cimes c'est aussi, un troupeau de 4 à
            15 équidés tout au long de l'année, dans différents parcs, avec
            herbe/foin et eau à volonté, ainsi que des soins à définir ensemble.
            <br />
          </p>
        </div>
      </div>

      <div class="grid-x section__subsection section__subsection--last">
        <div class="small-12 medium-8 medium-offset-2">
          <p>Contactez moi pour façonner un projet à votre image</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
