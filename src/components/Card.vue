<template>
  <div class="grid__item">
    <div class="block cta-card block--card">
      <div class="container flex-center">
        <div class="cta-card__label">
          <h2 class="standard">{{ title }}</h2>
        </div>
        <p>{{ detail }}</p>

        <div class="buttons-grouped">
          <a href="/" class="btn card-btn"> Read More </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {};
  },

  props: {
    detail: {
      require: true,
      type: String,
    },
    title: {
      require: true,
      type: String,
    },
  },
};
</script>
<style>
.background--4 {
  background-color: #367d91;
}
.box-container {
  text-align: center;
}

.section--separated {
  border-top: 1px solid #ccc;
}
.flex-center {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.cta-card {
  height: 100%;

  display: flex;

  flex: 1 1 auto;
  -webkit-box-orient: vertical;
  box-direction: normal;

  flex-direction: column;

  flex-wrap: nowrap;
}
.block--card {
  background: #fff;

  box-shadow: 0 0 2.25em rgb(0 0 0 / 20%);
  border: none;
}
.card-btn {
  border-color: black;
  color: red;
}

.text--center-flex {
  display: flex;

  justify-content: center;
}
</style>
