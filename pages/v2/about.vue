<template>
  <main>
    <mason-header :block-modifiers="['transparent-background', 'typography-invert', 'smallscreen-only']"/>
    <mason-section
      id="hero"
      background-image="/v2/images/5015.jpg"/>
    <mason-section :content-modifiers="['no-bottom-space']">
      <mason-card class="mason-card--quote mason-card--full">
        <p slot="text">When I first heard Sam's music, I knew I was dealing with a deep thinker and an authentic artist. And now that I know him -- and his fantastic music -- a lot better, I know my first instincts were right. He writes truthful, poetic, soul-baring songs that deserve to be heard.</p>
        <p slot="cite">Ross King</p>
      </mason-card>
    </mason-section>
    <mason-section :content-modifiers="['space-between', 'mobile-column']">
      <div class="mason-grid__cell-half mason-grid__cell-full--mobile mason-grid__cell-full--tablet">
        <p>
          Sam Mason’s story includes surviving freezing temperatures at the age of 21 while lost in the Colorado wilderness. Mason was forced to find shelter overnight from a rock, which left him to recover in a wheelchair with third degree frostbite. It was through this mountaintop experience that God spoke to him and told him to pursue music. This near death experience gave birth to the vision and calling on his life, music. He began writing songs to fulfill this vision.
        </p>
        <p>
          In the wake of releasing his first two EPs, Give Me a Sign and Lonestar Christmas, Mason received regular radio airplay and continues to hold a strong radio presence in the Dallas/Ft. Worth market on The Ranch 95.9fm, KTCU 88.7fm and The Pirate 97.5fm, to name a few.
        </p>
        <p>
          He is currently recording a follow-up EP to his first Christmas album, Lonestar Christmas, released in 2013, a collaborative writing project with singer-songwriter Matt Jones. Mason is continuing to write new alt-country and folk material for his debut full-length release.
        </p>
        <p>
          Mason’s birthday falling on December 25th has fueled his passion for writing Christmas music and spreading hope, joy and laughter throughout the holiday season.
        </p>
      </div>
      <div class="mason-grid__cell-half mason-grid__cell-full--mobile mason-grid__cell-full--tablet">
        <img
          src="/v2/images/sam-mason-promo-photo-2.jpg"
          width="100%">
      </div>
    </mason-section>
  </main>
</template>

<script>
import MasonCard from '~/components/Card.vue'
import MasonHeader from '~/components/Header.vue'
import MasonNavigation from '~/components/Navigation.vue'
import MasonSection from '~/components/Section.vue'

export default {
  name: 'About',
  components: {
    MasonCard,
    MasonHeader,
    MasonNavigation,
    MasonSection
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/Grid';
 #hero {
    height: 750px;
    background-size: cover;
    background-repeat: no-repeat;
  }

 #image {
   height: 180px;
 }

  @media (max-width: 890px) {
    #hero {
      background-position-x: center;
    }
  }

  @media (max-width: 480px) {
    #image {
      background-position-x: 10%;
    }
  }
</style>
