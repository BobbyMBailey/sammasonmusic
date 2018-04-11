<template>
  <article>
    <mason-section title="Typography">
      <div>
        <h1>Primary Heading</h1>
      </div>
      <div>
        <h2>Secondary Heading</h2>
      </div>
      <div>
        <h3>Tertiary Heading</h3>
      </div>
      <div>
        <p>Body Text</p>
      </div>
      <div>
        <p class="mason-typography--caption">Caption Text</p>
      </div>
      <div>
        <p class="mason-typography--fineprint">Sam Mason 2018 &copy;</p>
      </div>
    </mason-section>
    <mason-section title="Colors">
      <p class="atom-text-color--black">Hello this is a text color</p>
      <p class="atom-text-color--darkteal">Hello this is a text color</p>
      <p class="atom-text-color--lightteal">Hello this is a text color</p>
      <p class="atom-text-color--lighterteal">Hello this is a text color</p>
      <p class="atom-text-color--fadedgray atom-background-color--gray">Hello this is a text color</p>
      <p class="atom-text-color--gray">Hello this is a text color</p>
      <p class="atom-text-color--darkblue">Hello this is a text color</p>
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
