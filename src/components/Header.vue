<script>
export default {
  name: "Header",
  data() {
    return {
      mobileMenu: false,
    };
  },
  methods: {
    nav(id) {
      const element = document.querySelector(`#${id}`);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      this.mobileMenu = false;
    },
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
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
                <button
                  class="btn btn--primary text-shadow"
                  @click="nav('SectionOne')"
                >
                  Presentation
                </button>
              </li>
              <li>
                <a
                  class="btn btn--primary text-shadow"
                  href="https://www.facebook.com/people/Les-Crini%C3%A8res-des-Cimes/100093817391165/"
                  target="_blank"
                  aria-label="liens vers la page facebook des Crinieres des Cimes"
                >
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m17.525 9h-3.525v-2c0-1.032.084-1.682 1.563-1.682h1.868v-3.18c-.909-.094-1.823-.14-2.738-.138-2.713 0-4.693 1.657-4.693 4.699v2.301h-3v4l3-.001v9.001h4v-9.003l3.066-.001z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <button class="btn btn--secondary" @click="nav('contact')">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div
          class="header__burgermenu"
          :class="{ 'header__burgermenu--toggle': mobileMenu }"
        >
          <button @click="toggleMenu()">
            <svg
              height="64"
              version="1.1"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <g>
                <path
                  fill="none"
                  stroke-width="2"
                  stroke-linejoin="bevel"
                  d="m 5.0916789,20.818994 53.8166421,0"
                ></path>
                <path
                  fill="none"
                  stroke-width="2"
                  stroke-linejoin="bevel"
                  d="m 5.1969746,31.909063 53.8166424,0"
                ></path>
                <path
                  fill="none"
                  stroke-width="2"
                  stroke-linejoin="bevel"
                  d="m 5.0916788,42.95698 53.8166422,0"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <Transition name="fade">
          <div class="header__menu-mobile" v-if="mobileMenu">
            <nav>
              <ul>
                <li>
                  <button class="btn btn--primary" @click="nav('SectionOne')">
                    Presentation
                  </button>
                </li>
                <li>
                  <a
                    class="btn btn--primary text-shadow"
                    href="https://www.facebook.com/people/Les-Crini%C3%A8res-des-Cimes/100093817391165/"
                    target="_blank"
                    aria-label="liens vers la page facebook des Crinieres des Cimes"
                  >
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m17.525 9h-3.525v-2c0-1.032.084-1.682 1.563-1.682h1.868v-3.18c-.909-.094-1.823-.14-2.738-.138-2.713 0-4.693 1.657-4.693 4.699v2.301h-3v4l3-.001v9.001h4v-9.003l3.066-.001z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <button class="btn btn--secondary" @click="nav('contact')">
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: $c-white;
  z-index: 10;

  nav {
    margin: 0 0 0 auto;
  }

  ul {
    @include reset-list();

    display: flex;

    li {
      margin-left: 1.2vw;
      svg path {
        fill: $c-white;
      }

      button {
        @include reset-button();

        cursor: pointer;
      }
    }
  }

  &__menu {
    display: none;
    padding-top: 2.3vw;
    padding-bottom: 2.3vw;

    @include breakpoint(medium) {
      display: flex;
    }
  }

  &__burgermenu {
    position: relative;
    z-index: 100;
    display: flex;
    width: 100%;
    padding-top: 1rem;

    @include breakpoint(medium) {
      display: none;
    }

    &--toggle {
      button svg g path {
        stroke: $c-dark;
      }
    }
    button {
      @include reset-button();
      margin-left: auto;

      svg path {
        stroke: $c-white;
        transition: all 0.5s ease;
      }
    }
  }

  &__menu-mobile {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;
    background: $c-white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    nav {
      margin: 0;

      ul {
        flex-direction: column;

        li {
          margin: 0;
          text-align: center;
        }

        svg path {
          fill: $c-dark;
        }

        button {
          color: $c-dark;
          font-size: 2.5rem;
        }
      }
    }
  }
}
</style>
