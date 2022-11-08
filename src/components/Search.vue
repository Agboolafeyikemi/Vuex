<template>
  <section
    class="section section--no-spacing utility-header utility-header--standard">
    <div class="container">
      <ul class="utility-header__menu">
        <li class="utility-header__menu-item">
          <a
            href="#"
            class="utility-header__menu-link utility-header__menu-link--search"
            aria-labelledby="utility-header-label"
            role="button"
            aria-expanded="true">
            <svg
              aria-hidden="true"
              class="icon utility-header__menu-icon"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor">
                <path
                  d="M15.055 30.391a15.034 15.034 0 1110.627-4.403 14.936 14.936 0 01-10.627 4.403zm0-25.743a10.706 10.706 0 107.56 3.135 10.638 10.638 0 00-7.56-3.135z"></path>
                <path
                  d="M33.44 35.906a2.16 2.16 0 01-1.526-.633l-9.284-9.285a2.16 2.16 0 013.052-3.056l9.288 9.288a2.16 2.16 0 01-1.53 3.686z"></path>
              </g>
            </svg>
            <span id="utility-header-label" class="utility-header__menu-label">
              Search
            </span>
          </a>
        </li>
        <li class="utility-header__menu-item">
          <a
            href="https://www.goodthingsfoundation.org/learn/"
            class="utility-header__menu-link utility-header__menu-link--secondary-action">
            <span class="utility-header__menu-label"> Learn </span>
          </a>
        </li>
        <li class="utility-header__menu-item">
          <a
            href="https://www.goodthingsfoundation.org/get-involved/donate/"
            class="utility-header__menu-link utility-header__menu-link--main-action">
            <span class="utility-header__menu-label"> Donate </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.utility-header {
  background: #fff;
}
.utility-header .container {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.section--no-spacing > .container {
  padding-bottom: 0;
  padding-top: 0;
}
.utility-header__menu {
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 0;
  width: 100%;
}
.utility-header .container,
.utility-header__menu,
.utility-header__menu-item,
.utility-header__menu-link {
  display: flex;
}
.utility-header__menu-item:first-child {
  margin-right: auto;
}

.utility-header__menu-item {
  align-items: stretch;
  list-style: none;
  margin-left: 0;
  margin-top: 0;
}
.utility-header__menu-link--search {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.utility-header__menu-link {
  -ms-flex-align: center;
  align-items: center;
  color: #000;
  padding: 0.66667em;
  text-decoration: none;
}
.utility-header__menu-link--secondary-action {
  border-left: 1px solid #ccc;
  position: relative;
}
.utility-header__menu-link--main-action:visited {
  color: #fff;
}
.utility-header__menu-link--main-action {
  background: #cf1b46;
  /* color: #fff; */
}
.utility-header__menu-link span {
  position: relative;
}
.utility-header__menu-label {
  margin-top: 0;
}
.utility-header__menu-link--secondary-action:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.25rem;
  background-color: #2f8375;
  display: block;
  left: 0;
  right: 0;
  bottom: 0;
}

.utility-header__menu-link--search .utility-header__menu-icon {
  margin-right: 0;
}
.utility-header__menu-icon {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.66667em;
}

@media only screen and (min-width: 25em) {
  .utility-header__menu-link {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
}
@media only screen and (max-width: 800px) {
  .utility-header__menu-link--search .utility-header__menu-label {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
  }
}
</style>
