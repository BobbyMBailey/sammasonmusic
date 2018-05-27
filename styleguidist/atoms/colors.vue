<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'Colors'
}
</script>

<style lang="scss" src="../../src/assets/atoms.scss"/>

<style lang="scss" scoped>
  .mason-swatch {
    border-radius: 4px;
    width: 1em;
    height: 1em;
    border: 4px solid transparent;
  }
</style>

<docs>
  ```jsx
    <Colors/>
  ```
</docs>
