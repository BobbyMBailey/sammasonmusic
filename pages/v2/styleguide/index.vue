<template>
  <article>
    <mason-section
      title="Typography"
      content-modifiers="mason-section__content--column">
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
    <mason-section
      title="Colors"
      content-modifiers="mason-section__content--column">
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
    <mason-section title="Section Default">
      <img src="http://via.placeholder.com/200x200">
      <p>Nullam et odio quam. Aenean interdum, nisl vitae dapibus tempor</p>
    </mason-section>
    <mason-section
      title="Section as Column"
      content-modifiers="mason-section__content--column">
      <img src="http://via.placeholder.com/200x200">
      <p>Fusce eget sapien eget neque euismod euismod.</p>
    </mason-section>
    <mason-section
      title="Cards"
      class="atom-background-color--lightteal">
      <mason-card
        class="mason-card">
        <img
          slot="media"
          src="http://via.placeholder.com/200x200">
        <h1 slot="title">Cards are cool!</h1>
        <p
          slot="text"
          class="mason-card__text">Suspendisse euismod nunc</p>
      </mason-card>
      <mason-card
        class="mason-card">
        <img
          slot="media"
          src="http://via.placeholder.com/200x200">
        <p
          slot="text"
          class="mason-card__text">Just the text</p>
      </mason-card>
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
import MasonCard from '~/components/Card.vue'

export default {
  layout: 'styleguide',
  components: {
    MasonFooter,
    MasonSection,
    MasonCard
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
