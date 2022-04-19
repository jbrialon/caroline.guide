<script >

</script>

<template>
  <section id="intro" class="intro">
    <div class="grid-container height100">
      <div class="grid-x height100">
        <div class="cell small-12 medium-6 medium-offset-1 intro__content">
          <h2>
            "S'éloigner de tout pour se rapprocher de l'essentiel."
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.intro {
  width: 100vw;
  height: 80vh;
  background-image: url('../src/assets/background-3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  color: $c-white;

  &__content {
    display: flex;

    h2 {
      text-align: center;
       margin: auto 0 5vh 0;

      @include breakpoint(medium) {
        text-align: left;
        margin: auto 0 10vh 0;
      }
    }
  }
}
</style>
