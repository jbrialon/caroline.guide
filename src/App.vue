<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CHeader from "./components/Header.vue";
import SectionIntro from "./components/Intro.vue";
import SectionPresentation from "./components/Presentation.vue";
import SectionBanner from "./components/Banner.vue";
import SectionContact from "./components/Contact.vue";
</script>

<template>
  <div id="app">
    <c-header></c-header>
    <section-intro></section-intro>
    <section-presentation></section-presentation>
    <section-banner></section-banner>
    <section-contact></section-contact>
  </div>
</template>

<style>
#app {
  position: relative;
  overflow: hidden;
}
</style>
