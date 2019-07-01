<template>

  <div id="app">
    <div class="center">
      <img src="./assets/vue-lazyload-text.png" style="width: 500px; height:400px">

      <h1 style="margin-bottom: 30px;color: azure;">vue-lazyload-text</h1>

      <div><h2>Usage of in different way: </h2>
        <h2>
          <nav>
            <router-link to='/'>Component</router-link>
            <router-link to='/directive-demo'>Directive</router-link>
          </nav>
        </h2>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 10px;
    padding-top: 5px;
    .center {
      text-align: center;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }

  }

</style>
