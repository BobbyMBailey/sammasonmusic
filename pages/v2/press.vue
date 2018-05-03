<template>
  <main>
    <mason-header
      :block-modifiers="['background-invert', 'typography-invert', 'smallscreen-only']"/>
    <mason-section
      id="hero"
      background-image="/v2/images/4749.jpg"/>
    <mason-section :block-modifiers="['center']">
      <mason-card class="mason-card--quote mason-card--full">
        <p slot="text">When I first heard Sam's music, I knew I was dealing with a deep thinker and an authentic artist. And now that I know him -- and his fantastic music -- a lot better, I know my first instincts were right. He writes truthful, poetic, soul-baring songs that deserve to be heard.</p>
        <p slot="cite">Ross King</p>
      </mason-card>

      <mason-card class="mason-card--quote mason-card--full">
        <p slot="text">Sam Mason’s music bleeds. It is raw, honest, and gritty. Haunting melodies and gut-wrenching lyrics confront the listener and demand a response. Humanity, however light or dark it can be, drives Mason to reflect it’s essence in his songs.</p>
        <p slot="cite">Randy Fuller</p>
        <p
          slot="cite"
          class="mason-typography--caption">The Village Church – Worship Leader</p>
      </mason-card>

      <mason-card class="mason-card--quote mason-card--full">
        <p slot="text">Mazzy Star meets Mojave 3! Could listen to it for hours.</p>
        <p slot="cite">Taylor Tatsch</p>
      </mason-card>

      <mason-card class="mason-card--quote mason-card--full">
        <p slot="text">Mason's laid-back vocals are perfectly matched to Tatsch's spacious, lap steel-laced soundscapes and his evocative lyrics, particularly on the title track, <i>Give Me a Sign</i>, suggest sideman Mason would fare just fine if he decided to make himself the focus full-time.</p>
        <p slot="cite">Preston Jones</p>
        <a
          slot="cite"
          class="mason-typography--caption"
          href="http://www.star-telegram.com/entertainment/music/"
          target="_blank">Fort Worth Star Telegram</a>
      </mason-card>

      <mason-card class="mason-card--quote mason-card--full">
        <p slot="cite">Jeff Prince</p>
        <a
          slot="cite"
          class="mason-typography--caption"
          href="https://www.fwweekly.com/2013/12/23/killer-or-filler-19/"
          target="_blank">Fort Worth Weekly</a>
        <p slot="text">Behold, a gift! A pretty looking five song EP called Lonestar Christmas by up-and-coming Fort Worth singer-songwriters Sam Mason and Matt 'Songbird' Jones.</p>
      </mason-card>

      <mason-card class="mason-card--quote mason-card--full">
        <p slot="cite">Preston Jones</p>
        <a
          slot="cite"
          class="mason-typography--caption"
          href="http://www.star-telegram.com/entertainment/music/"
          target="_blank">Fort Worth Star Telegram</a>
        <p slot="text">A terrific blend of rock and country, with Jones’ pleasant voice threading through cuts like Empty Tree (All I Want for Christmas) or I’m Leaving Santa Lonestar, the album is a winning dose of cheer.</p>
      </mason-card>
    </mason-section>
  </main>
</template>

<script>
import MasonCard from '~/components/Card.vue'
import MasonHeader from '~/components/Header.vue'
import MasonSection from '~/components/Section.vue'

export default {
  name: 'Press',
  components: {
    MasonCard,
    MasonHeader,
    MasonSection
  }
}
</script>

<style lang="scss" scoped>
  #hero {
    height: 600px;
    background-position-x: center;
  }

  @media (max-width: 460px) {
    #hero {
      height: 380px;
      background-position-x: 90%;
    }
  }
</style>
