<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        Progress
      </h2>
      <div class="links">
        <nuxt-link
          to="/v2/styleguide"
          class="button--green"
          replace>StyleGuide Molecules</nuxt-link>
        <nuxt-link
          to="/v2/styleguide#Organisms"
          class="button--blue"
          replace>StyleGuide Organisms</nuxt-link>
        <div class="button--blue">Home</div>
        <div class="button--blue">About Me</div>
        <div class="button--disabled">Music</div>
        <div class="button--disabled">Media</div>
        <div class="button--disabled">Press</div>
        <div class="button--disabled">Subscribe</div>
        <div class="button--disabled">Contact</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .container {
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1080px;
  }

  .links a:first-child {
    margin-right: 1em;
    margin-top: 15px;
  }

  .links .button--green,
  .links .button--blue,
  .links .button--disabled {
    margin-top: 15px;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--blue {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #0002ff;
    color: #0002ff;
    text-decoration: none;
    margin-left: 15px;
    padding: 10px 30px;
  }

  .button--blue:hover {
    color: #fff;
    background-color: #62a4ff;
    border-color: #62a4ff;
  }

  .button--disabled {
    cursor: default;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--disabled:hover {
    color: #35495e;
    background-color: white;
  }
</style>
