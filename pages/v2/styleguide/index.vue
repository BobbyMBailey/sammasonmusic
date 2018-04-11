<template>
  <article>
    <mason-section title="Typography">
      <div>
        <p>Hello I am a paragraph</p>
      </div>
      <div>
        <h1>I am a header 1</h1>
      </div>
      <div>
        <h2>I am a header 2</h2>
      </div>
      <div>
        <h3>I am a header 3</h3>
      </div>
      <div>
        <h4>I am a header 4</h4>
      </div>
      <div>
        <h5>I am a header 5</h5>
      </div>
      <div>
        <h6>I am a header 6</h6>
      </div>
    </mason-section>
    <mason title="Foreground text colors">
      <p class="atom-text-color--black">Hello this is a text color</p>
      <p class="atom-text-color--darkteal">Hello this is a text color</p>
      <p class="atom-text-color--lightteal">Hello this is a text color</p>
      <p class="atom-text-color--lighterteal">Hello this is a text color</p>
      <p class="atom-text-color--fadedgray atom-background-color--gray">Hello this is a text color</p>
      <p class="atom-text-color--gray">Hello this is a text color</p>
      <p class="atom-text-color--darkblue">Hello this is a text color</p>
    </mason>
    <mason-section title="Neutral Colors">
      <div class="mason-swatch atom-background-color--black"/>
      <div class="mason-swatch atom-background-color--darkteal"/>
      <div class="mason-swatch atom-background-color--lightteal"/>
      <div class="mason-swatch atom-background-color--lighterteal"/>
      <div class="mason-swatch atom-background-color--gray"/>
    </mason-section>
    <mason-section title="Links">
      <div class="atom-background-color--black">
        <a href="#">Take Me Away!</a>
      </div>
    </mason-section>
    <mason-section
      title="Footer">
      <mason-footer/>
    </mason-section>
  </article>
</template>

<script>
import MasonSection from '~/components/Section.vue'
import MasonFooter from '~/components/Footer.vue'

export default {
  layout: 'styleguide',
  components: {
    MasonFooter,
    MasonSection
  }
}
</script>

<style scoped>
.mason-swatch {
  border-radius: 4px;
  width: 1em;
  height: 1em;
  border: 4px solid transparent;
}
</style>
