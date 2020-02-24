<template>
  <div id='app'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: "Welcome to Aaron's App using Vue!" 
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>