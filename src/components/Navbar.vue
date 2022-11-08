<template>
  <section
    class="section section--separated section--no-spacing standard-header standard-header--standard"
    role="banner">
    <div class="container">
      <a href="/" class="standard-header__logo-link">
        <img
          src="https://www.goodthingsfoundation.org/wp-content/uploads/2021/01/good-things-foundation-logo.png"
          alt="Good Things Foundation"
          class="standard-header__logo"
      /></a>

      <button
        class="btn btn--primary standard-header__menu-button"
        aria-expanded="false"
        aria-controls="mobile-menu">
        <svg
          aria-hidden="true"
          class="icon standard-header__menu-icon"
          width="46"
          height="36"
          viewBox="0 0 46 36"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M42.923 5.755H2.77a2.77 2.77 0 010-5.538h40.154a2.77 2.77 0 010 5.538zM35.146 20.77H2.77a2.77 2.77 0 010-5.54h32.386a2.77 2.77 0 010 5.54h-.009zM23.33 35.783H2.77a2.77 2.77 0 110-5.538h20.57a2.77 2.77 0 110 5.538h-.01z"
            fill="currentColor"></path>
        </svg>
        <span class="standard-header__menu-text">Menu</span>
      </button>

      <nav class="standard-header__nav" role="navigation">
        <ul id="montere-desktop-menu" class="standard-header__menu">
          <li
            v-for="navbar in menuList"
            :id="navbar.id"
            :key="navbar.id"
            :class="navbar.id === selected ? 'current_page_item' : ''"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 standard-header__menu-item">
            <RouterLink
              @click="store.commit('SET_CURRENT_PAGE', navbar.id)"
              class="standard-header__menu-link"
              :to="navbar.url"
              ><span>{{ navbar.name }}</span></RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const menuList = computed(() => store.state.menuList);
const selected = computed(() => store.state.selected);
</script>

<style scoped>
.standard-header {
  background: #fff;
}
.section--separated {
  border-top: 1px solid #ccc;
}
.standard-header .container {
  align-items: center;

  display: flex;

  -ms-flex-pack: justify;
  justify-content: space-between;
}
.section--no-spacing > .container {
  padding-bottom: 0;
  padding-top: 0;
}

.standard-header__logo-link {
  display: block;
  height: 3rem;
}
.standard-header__menu-button {
  display: none;
}

.standard-header__nav {
  display: flex;
}
.standard-header__menu {
  align-items: center;
  margin-top: 0;
}
.standard-header__menu {
  display: flex;
  align-items: center;
  margin-top: 0;
}
.standard-header__menu-item {
  list-style: none;
  margin-left: 0;
  margin-top: 0;
}
.standard-header__nav
  .standard-header__menu-item
  .current-page-ancestor
  .standard-header__menu-link,
.standard-header__nav
  .standard-header__menu-item.current_page_item
  .standard-header__menu-link {
  background: none;
  color: #2f8375;
}
.standard-header__menu-link {
  color: #000;
  display: block;
  padding: 2.16667rem 0.66667rem;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
}
.standard-header__menu-link span {
  position: relative;
}
.standard-header__nav
  .standard-header__menu-item.current-page-ancestor
  .standard-header__menu-link
  span:after,
.standard-header__nav
  .standard-header__menu-item.current_page_item
  .standard-header__menu-link
  span:after {
  display: block;
}
.standard-header__menu-link span:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.25rem;
  background-color: #2f8375;
  display: none;
  left: 0;
  right: 0;
  bottom: -0.5rem;
}
.standard-header__menu-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.66667rem;
}

.standard-header__logo-link {
  display: block;
  height: 3rem;
}
.standard-header .container {
  align-items: center;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.standard-header__logo {
  height: 100%;
  width: auto;
  margin-right: 1rem;
}
img {
  border: none;
  display: block;
  max-width: 100%;
  height: auto;
}

@media only screen and (max-width: 500px) {
  .standard-header__nav {
    margin-top: 0;
    display: none;
  }
  .standard-header__menu-button {
    margin: 1rem 0 1rem 1rem;
    width: auto;

    display: flex;

    -ms-flex: 0 1 auto;
    flex: 0 1 auto;

    align-items: center;
  }
}
@media only screen and (max-width: 25em) {
  .standard-header__menu-button {
    padding: 0.66667em;
  }
}
@media only screen and (min-width: 65em) {
  .standard-header__logo-link {
    height: 3.66667rem;
  }
}
@media only screen and (min-width: 1024px) {
  .standard-header__menu-button {
    display: none;
  }
  .standard-header__logo-link {
    height: 3.66667rem;
  }
}
</style>
