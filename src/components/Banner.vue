<script setup></script>

<template>
  <section class="banner">
    <div class="grid-container">
      <div class="grid-x">
        <div class="cell small-12 medium-12">
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>S'éloigner de tout pour se rapprocher de l'essentiel.</p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  padding-top: 8.5vmax;
  padding-bottom: 8.5vmax;
  background-image: url("@/assets/background-banner.jpg");
  background-position: center center;
  background-size: cover;
  text-align: center;

  blockquote {
    margin: 0;
    color: $c-white;
  }

  blockquote p::before {
    content: "« ";
  }

  blockquote p::after {
    content: " »";
  }
}
</style>
