<template>
  <main>
    <mason-header
      :block-modifiers="['no-background', 'typography-invert', 'smallscreen-only']"/>
    <mason-section
      id="hero"
      background-image="/v2/images/4749.jpg"/>
    <mason-section>
      <mason-card class="mason-card">
        <h3 slot="title">Preston Jones</h3>
        <a
          slot="title"
          class="mason-typography--caption"
          href="http://www.star-telegram.com/entertainment/music/"
          target="_blank">Fort Worth Star Telegram</a>
        <p slot="text">"Mason's laid-back vocals are perfectly matched to Tatsch's spacious, lap steel-laced soundscapes and his evocative lyrics, particularly on the title track, <i>Give Me a Sign</i>, suggest sideman Mason would fare just fine if he decided to make himself the focus full-time."<br></p>
      </mason-card>

      <mason-card class="mason-card">
        <h3 slot="title">Jeff Prince</h3>
        <a
          slot="title"
          class="mason-typography--caption"
          href="https://www.fwweekly.com/2013/12/23/killer-or-filler-19/"
          target="_blank">Fort Worth Weekly</a>
        <p slot="text">"Behold, a gift! A pretty looking five song EP called Lonestar Christmas by up-and-coming Fort Worth singer-songwriters Sam Mason and Matt 'Songbird' Jones."<br></p>
      </mason-card>

      <mason-card class="mason-card">
        <h3 slot="title">Preston Jones</h3>
        <a
          slot="title"
          class="mason-typography--caption"
          href="http://www.star-telegram.com/entertainment/music/"
          target="_blank">Fort Worth Star Telegram</a>
        <p slot="text">"A terrific blend of rock and country, with Jones’ pleasant voice threading through cuts like Empty Tree (All I Want for Christmas) or I’m Leaving Santa Lonestar, the album is a winning dose of cheer."<br></p>
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
/* its really annoying that I can't edit css the normal way*/
  .mason-section__content {
    display: flex;
    flex-direction: row;
    flex-wrap: inherit;
  }
</style>
