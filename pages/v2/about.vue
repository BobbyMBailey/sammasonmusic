<template>
  <main>
    <mason-header :block-modifiers="['transparent-background', 'typography-invert', 'smallscreen-only']"/>
    <mason-section
      id="hero"
      background-image="/v2/images/5015.jpg"/>
    <mason-section
      id="ShortVersion"
      title="Short Version">
      <p>
        I’m a non-touring, folk and alt-country singer/songwriter focused on Christmas music.
        My birthday falls on Christmas each year and I was born into an affinity for the music that decorates the holiday season.
        I bring my little piece of country and Texas to the winter season.
        In a world where musicians are measured by the number of likes on Facebook or the followers on Instagram and not by the quality of their craft, I am navigating the musical industry unconventionally.
        Consider me a working man’s musician. I work a job 8-5, support my wife and kids, and write music when I can squeeze any ounce of free time from my day.
        I don’t believe in the millennial ideology that surrounds us that “if you’re not getting ahead, you’re falling behind.”
        I’m right where I’m supposed to be. Writing songs, recording them, and sharing them with the people around me. With you.
      </p>
    </mason-section>
    <mason-section
      id="image"
      background-image="/v2/images/4987_about.jpg"/>
    <mason-section
      id="LongVersion"
      title="Long Version">
      <p>
        I am a folk and alt-country singer/songwriter from Texas with a wife who was born in Mexico.
        We have a son who is a red-headed, half-mexican, spanish-speaking boy who occupies a majority of our heart space.
        These two human beings and my faith in God shape the man I am today, and the man I hope to be.
        I began writing songs in college when a room mate challenged me to write my own song, rather than sing someone else's.
        This idea was revolutionary. I had never considered it, to be honest. I took the challenge and wrote my first song.
        It was just ok but it was the crack of sunlight that peaks through the black curtains covering the windows in the room.
        Since that first song, I have released a solo EP, Give Me a Sign, which is receiving regular radio play in North Texas and collaborative Christmas EP, Lonestar Christmas, which includes five original christmas songs written with Matt Jones (aka Songbird Jones).
        Another Christmas EP is set to release in 2018.
        Most of my material was written out of hope. Hope of becoming famous - to be completely honest.
        There is a friction that exists in all of us: the desire to be known and the desire to know the creator of our universe.
        To be validated. To be known. I want to be known. My daily confession. Our daily confession.
        This confession is the first note in the melody of our song that is worth of only one.
        A song that flows from the humble, shallow rivers of our soul and meets the deep waters of the gospel.
        I now hope to write from these waters. To make God known and make less my own desire to be known.
      </p>
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
