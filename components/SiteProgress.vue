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
  @import 'assets/SiteProgress';
</style>
