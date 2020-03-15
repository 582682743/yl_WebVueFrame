<template>
  <router-view id="app" />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
@import './style/common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $cMain;
}
</style>
