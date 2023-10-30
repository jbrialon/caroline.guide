<script setup>
import image1 from "@/assets/presentation/image-1.jpg";
import image2 from "@/assets/presentation/image-2.jpg";
import image3 from "@/assets/presentation/image-3.jpg";
</script>

<template>
  <section id="SectionOne" class="section">
    <div class="grid-container">
      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 center-content">
          <h3>Balade au fil de l'eau</h3>
          <span class="section__info">
            1 heure, 30€ par adulte et 20€ par enfant</span
          >
          <p>
            Au départ du plan d’eau de Rioclar. Venez profiter d’une balade le
            long de la rivière nous offrant de jolis points de vue sur l'Ubaye.
          </p>
        </div>
        <div class="cell small-12 medium-6 medium-offset-1">
          <img v-lazy="image1" class="right" alt="" />
        </div>
      </div>

      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 small-order-2 medium-order-1">
          <img v-lazy="image2" class="left" alt="" />
        </div>
        <div
          class="cell small-12 medium-5 medium-offset-1 small-order-1 medium-order-2 center-content"
        >
          <h3>Balade dans le vallon de Rioclar</h3>
          <span class="section__info"
            >1 heure, 30€ par adulte et 20€ par enfant</span
          >
          <p>
            Au départ de Rioclar, venez prendre le temps de découvrir un joli
            vallon de montagne marqué par le pastoralisme.
          </p>
        </div>
      </div>

      <div class="grid-x section__subsection">
        <div class="cell small-12 medium-5 center-content">
          <h3>Balade gourmande</h3>
          <span class="section__info">
            3 heures, 65€ par adulte et 35€ par enfant
            <br />
            Possibilité de privatiser la calèche pour un couple : 100€ par pers
          </span>
          <p>
            Au départ de Rioclar, venez déguster un petit panier de produits
            locaux lors d'une balade dans le vallon, au rythme des chevaux.
          </p>
        </div>
        <div class="cell small-12 medium-6 medium-offset-1">
          <img v-lazy="image3" class="right" alt="" />
        </div>
      </div>

      <div class="grid-x section__subsection section__subsection--last">
        <div class="small-12 medium-8 medium-offset-2">
          <p>
            Balade en musique - supplément 20 € <br />
            Prestations mariages et évènementielles - à définir ensemble
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
