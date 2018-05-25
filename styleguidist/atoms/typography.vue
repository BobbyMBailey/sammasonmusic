<template>
  <div>
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
    <div>
      <p class="atom-text-color--primary atom-background-color--primary">Primary</p>
      <p class="atom-text-color--secondary">Secondary</p>
      <p class="atom-text-color--primary-dark">Primary Dark</p>
      <p class="atom-text-color--secondary-dark">Secondary Dark</p>
      <p class="atom-text-color--tertiary-dark">Tertiary Dark</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Typography'
}
</script>

<style lang="scss" src="../../src/assets/atoms.scss"/>

<docs>
  ```jsx
  <Typography/>
  ```
</docs>
