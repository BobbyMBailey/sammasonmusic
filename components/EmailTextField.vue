<template>
  <div>
    <input
      :id="id"
      type="email">
    <label :for="id"/>
  </div>
</template>

<script>
export default {
  name: 'EmailTextField',
  data: function () {
    return {
      id: null
    }
  },
  created () {
    this.id = 'EmailTextField-' + Math.random().toString(36).slice(4)
  }
}
</script>

<style lang="scss" scoped>

</style>
