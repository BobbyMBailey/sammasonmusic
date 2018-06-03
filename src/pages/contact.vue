<template>
  <main>
    <mason-header
      :block-modifiers="['pushdown']"/>
    <mason-section
      :content-modifiers="['column']"
      title="Contact">
      <mason-contact/>
    </mason-section>
    <hr>
    <mason-section
      id="Subscribe"
      :content-modifiers="['center', 'mobile-wrap', 'column']"
      title="Subscribe">
      <p>Enter Email for Free Music and Updates</p>
      <signup/>
    </mason-section>
  </main>
</template>

<script>
import MasonContact from '~/components/Contact.vue'
import MasonHeader from '~/components/Header.vue'
import MasonSection from '~/components/Section.vue'
import Signup from '~/components/Signup.vue'

export default {
  name: 'Contact',
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: 'Booking Sam Mason and other inquiries including Social Media outlets' }
      ]
    }
  },
  components: {
    MasonContact,
    MasonHeader,
    MasonSection,
    Signup
  }
}
</script>

<style lang="scss" scoped>
  hr {
    margin: 2em 10%;
  }
</style>
