<template>
  <main>
    <mason-header
      :block-modifiers="['background-invert', 'typography-invert', 'smallscreen-only']"/>
    <mason-section
      id="hero"
      background-image="/v2/images/4749.jpg"/>
    <mason-section :block-modifiers="['center']">
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
