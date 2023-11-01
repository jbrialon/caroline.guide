<script setup>
import backgroundUrl from "@/assets/background-top.jpg";
</script>

<template>
  <section id="intro" class="intro" v-lazy:background-image="backgroundUrl">
    <div class="grid-container height100">
      <div class="grid-x height100">
        <div class="cell small-12 medium-9 medium-offset-1 intro__content">
          <a href="#" class="intro__logo">
            <img src="logo.png" alt="logo de la Crinieres des Cimes" />
          </a>
          <h1 class="text-shadow">Les crinières des cimes</h1>
          <h3 class="text-shadow">Vous proposent des balades en calèche</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  position: relative;
  z-index: 5;
  width: 100vw;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  color: $c-white;

  &:after {
    position: absolute;
    content: "";
    display: block;
    background: $c-black;
    opacity: 0.15;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    @include breakpoint(medium) {
      display: none;
    }
  }

  &__logo img {
    max-width: 200px;
    width: 100%;
    @include breakpoint(medium) {
      max-width: 220px;
    }
  }

  &__content {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 10;

    @include breakpoint(medium) {
      justify-content: flex-end;
      text-align: left;
      margin-bottom: 6vw;
    }

    h1 {
      line-height: 1;
      padding-bottom: 2rem;
    }
  }
}
</style>
