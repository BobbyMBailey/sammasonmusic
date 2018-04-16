<template>
  <article>
    <mason-section title="Atoms & Molecules">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: blue;"/>
      <h2><font-awesome-icon
        :icon="['fa', 'quote-left']"
        class="atom-text-color--tertiary"/></h2>
      <p>
        If atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.
      </p>
      <p>
        In the context of a pattern library, atoms demonstrate all your base styles at a glance, which can be a helpful reference to keep coming back to as you develop and maintain your design system. But like atoms in the natural world, interface atoms don’t exist in a vacuum and only really come to life with application.
      </p>
      <p class="mason-typography--fineprint">Brad Frost</p>
    </mason-section>
    <mason-section
      title="Typography"
      content-modifiers="mason-section__content--column">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: lightgreen;"/>
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
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: lightgreen;"/>
      <span>Primary</span>
      <div class="mason-swatch atom-background-color--primary"/>
      <span>Secondary</span>
      <div class="mason-swatch atom-background-color--secondary"/>
      <span>Tertiary</span>
      <div class="mason-swatch atom-background-color--tertiary"/>
      <hr>
      <span>Primary Dark</span>
      <div class="mason-swatch atom-background-color--primary-dark"/>
      <span>Secondary Dark</span>
      <div class="mason-swatch atom-background-color--secondary-dark"/>
      <span>Tertiary Dark</span>
      <div class="mason-swatch atom-background-color--tertiary-dark"/>
    </mason-section>
    <mason-section
      title="Colors Typography"
      content-modifiers="mason-section__content--column">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: lightgreen;"/>
      <p class="atom-text-color--primary atom-background-color--primary">Primary</p>
      <p class="atom-text-color--secondary">Secondary</p>
      <p class="atom-text-color--primary-dark">Primary Dark</p>
      <p class="atom-text-color--secondary-dark">Secondary Dark</p>
      <p class="atom-text-color--tertiary-dark">Tertiary Dark</p>
    </mason-section>
    <mason-section title="Links">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: lightgreen;"/>
      <div class="atom-background-color--secondary">
        <a href="#">Take Me Away!</a>
      </div>
    </mason-section>
    <mason-section title="Section Default">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: lightgreen;"/>
      <img src="http://via.placeholder.com/200x200">
      <p>Nullam et odio quam. Aenean interdum, nisl vitae dapibus tempor</p>
    </mason-section>
    <mason-section
      title="Section as Column"
      content-modifiers="mason-section__content--column">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: lightgreen;"/>
      <img src="http://via.placeholder.com/200x200">
      <p>Fusce eget sapien eget neque euismod euismod.</p>
    </mason-section>
    <mason-section title="Cards">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: lightgreen;"/>
      <mason-card>
        <img
          slot="media"
          src="http://via.placeholder.com/350x200">
        <h3 slot="title">Card Title</h3>
        <p slot="text">Suspendisse euismod nunc</p>
      </mason-card>
      <mason-card>
        <img
          slot="media"
          src="http://via.placeholder.com/350x200">
        <p slot="text">Card Text</p>
      </mason-card>
      <mason-card>
        <img
          slot="media"
          src="http://via.placeholder.com/350x200">
        <h3 slot="title">Card Title</h3>
      </mason-card>
      <mason-card class="mason-card--full">
        <img
          slot="media"
          src="http://via.placeholder.com/1048x200">
        <h3 slot="title">Full Card</h3>
        <p slot="text">Suspendisse euismod nunc</p>
      </mason-card>
      <mason-card class="mason-card--medium">
        <img
          slot="media"
          src="http://via.placeholder.com/540x200">
        <h3 slot="title">Medium Card</h3>
        <p slot="text">Suspendisse euismod nunc</p>
      </mason-card>
      <mason-card class="mason-card--small">
        <img
          slot="media"
          src="http://via.placeholder.com/356x200">
        <h3 slot="title">Small Card</h3>
        <p slot="text">Suspendisse euismod nunc</p>
      </mason-card>
    </mason-section>
    <mason-section
      title="Button"
      content-modifiers="mason-section__content--column">
      <mason-button label="Button"/>
      <p/>
      <mason-button
        label="Material Design"
        link="https://material.io/guidelines/components/buttons.html"
        target="_blank"/>
    </mason-section>
    <hr>
    <mason-section
      id="Organisms"
      title="Organisms">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: blue;"/>
      <h2><font-awesome-icon
        :icon="['fa', 'quote-left']"
        class="atom-text-color--tertiary"/></h2>
      <p>
        Building up from molecules to more elaborate organisms provides designers and developers with an important sense of context. Organisms demonstrate those smaller, simpler components in action and serve as distinct patterns that can be used again and again. The product grid organism can be employed anywhere a group of products needs to be displayed, from category listings to search results to related products.
      </p>
      <p class="mason-typography--fineprint">Brad Frost</p>
    </mason-section>
    <mason-section title="Footer">
      <font-awesome-icon
        slot="title"
        :icon="['fa', 'check']"
        style="color: lightgreen;"/>
      <mason-footer/>
    </mason-section>
  </article>
</template>

<script>
import MasonSection from '~/components/Section.vue'
import MasonFooter from '~/components/Footer.vue'
import MasonCard from '~/components/Card.vue'
import MasonButton from '~/components/Button.vue'

export default {
  layout: 'styleguide',
  components: {
    MasonFooter,
    MasonSection,
    MasonCard,
    MasonButton
  }
}
</script>

<style lang="scss" scoped>
  .mason-swatch {
    border-radius: 4px;
    width: 1em;
    height: 1em;
    border: 4px solid transparent;
  }
</style>
