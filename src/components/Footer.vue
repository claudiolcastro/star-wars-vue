<template>
  <footer>
    <p>Star Wars - Cláudio Luiz Castro</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
  footer {
    background-color: $main-color;
    bottom: 0;
    color: $white;
    height: 100px;
    width: 100%;

    p {
      display: inline-block;
      font-size: 12px;
      margin-top: 80px;
      text-align: center;
    }
  }
</style>
