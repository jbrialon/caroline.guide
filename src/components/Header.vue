<script >
export default {
  name: "Header",
  methods: {
    nav (index) {
      console.log(index)
    }
  },
};
</script>

<template>
<header class="header">
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell small-12 header__menu">
        <nav>
          <ul>
            <li>
              <button class="btn btn--primary" @click="nav(0)">
                Presentation
              </button>
            </li>
            <li>
              <button class="btn btn--primary" @click="nav(1)">
                Portage Muletier
              </button>
            </li>
            <li>
              <button class="btn btn--primary" @click="nav(2)">
                Voyage Muletier
              </button>
            </li>
            <li>
              <button class="btn btn--secondary" @click="nav(3)">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
</template>

<style lang="scss" scoped>

.header {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: $c-white;
  z-index: 10;

  @include breakpoint (medium) {
    display: block;
  }

  &__menu {
    display: flex;
    padding-top: 2.3vw;
    padding-bottom: 2.3vw;

    nav {
      margin: 0 0 0 auto;
    }

    ul {
      @include reset-list();

      display: flex;
      
      li {
        margin-left: 1.2vw;

        button {
          @include reset-button();

          cursor: pointer;
        }
      }
    } 
  }
}
</style>
