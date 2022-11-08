<template>
  <section
    id="page-section-4"
    class="section section--separated useful-information"
    style="">
    <div class="container box">
      <h2 class="medium useful-information__title subtitle">
        How can we help you?
      </h2>
      <p class="standard useful-information__excerpt">
        Let us know who you are and what you're looking for, and we'll help get
        you to the right place.
      </p>

      <form id="useful-information-form" method="post" action="/">
        <!-- Base Options -->

        <label class="standard">I am an</label>
        <select
          class="standard"
          name="Useful Information Options"
          id="useful-information-options">
          <option value="individual">Individual</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>

        <!-- Sub Options -->
        <label class="standard">and I </label>
        <div id="useful-information-suboptions">
          <select
            class="standard"
            name="Useful Information Sub Options"
            id="person"
            style="display: block">
            <option value="want to learn">want to learn</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>

        <input type="submit" class="btn btn--primary" value="Start now" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.useful-information {
  position: relative;
  z-index: 11;
  background-color: #ececec;
}
.useful-information form {
  background-color: #fff;
  padding: 2.25em;

  display: flex;

  align-items: flex-start;

  justify-content: flex-start;

  box-direction: normal;
  align-items: center;
  justify-content: center;
}
.useful-information form label {
  margin: 0.66667rem 0.6rem;
  font-weight: 300;
  white-space: pre;
}
.useful-information .btn {
  white-space: pre-wrap;
  margin-top: 1rem;
  margin-left: 0.6rem;
  white-space: pre;
}
@media only screen and (max-width: 500px) {
  .box {
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
  }
  .useful-information form {
    display: block;
  }
  .box p {
    font-size: 12px;
    text-align: center;
  }
}
</style>
