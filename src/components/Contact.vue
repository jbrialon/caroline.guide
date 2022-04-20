<script >

</script>

<template>
  <section id="contact" class="contact">
    <div class="grid-container">
      <div class="grid-x contact__content">
        <div class="cell small-12 medium-6">
          <h3>
            Contact
          </h3>
        </div>
        <div class="cell small-12 medium-3">
          <a href="mailto:caroline.brialon@gmail.com">
            caroline.brialon@gmail.com
          </a>
        </div>
        <div class="cell small-12 medium-3">
          <a href="tel:+336 07 08 09 10">
            +336 07 08 09 10
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.contact {
  position: relative;
  color: $c-white;
  background: $c-dark;
  text-align: left;
  padding-top: 1.3vmax;
  padding-bottom: 1.3vmax;

  &__content {
    justify-content: center;

    .cell {
      margin: auto;
    }
  }
}
</style>
