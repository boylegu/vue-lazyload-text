<template>

  <div id="app">
    <div class="center">
      <directive></directive>
      <img src="./assets/vue-lazyload-text.png" style="width: 500px; height:400px">

      <h1 style="margin-bottom: 60px;color: azure;">vue-lazyload-text</h1>
      <h2 style="color: azure;">Start Line: {{startLine}} End Line:{{endLine}} </h2>
    </div>
    <div style="margin:0 auto; width: 700px; height:200px">
      <lazy-text :src="demo" :separator="separator" :intervalLine="intervalLine" :bgColor="bgColor"
                 @getScope="textScope"></lazy-text>
    </div>
    <sketch :value="colors" @input="updateValue"></sketch>

  </div>
</template>

<script>

  import directive from './demo/directive'
  // import LazyText from './demo/lazytext'
  import {Sketch} from 'vue-color'
  import LazyText from 'vue-lazyload-text-dev/src/components/lazy-text'

  import server from './lib/api'

  export default {
    name: 'app',
    components: {
      Sketch,
      LazyText,
      'material-picker': Sketch,
      directive,
    },
    data() {
      return {
        bgColor: 'rgba(0, 1, 0, 0.34)',
        left: 0,
        right: 50,
        intervalLine: 50,
        isStop: false,
        demo: '',
        separator: ' ',
        startLine: 0,
        endLine: 0,
        colors: ''
      }
    },
    mounted() {
      server.Mock('/result')
        .then(res => {
          this.demo = this.mockHandleServer(this.left, this.right, this.separator, res)
        })
    },
    methods: {
      textScope(a, b) {
        if (!this.isStop) {
          server.Mock('/result')
            .then(res => {
              let response = this.mockHandleServer(a, b, this.separator, res)
              this.demo = response
              this.startLine = a
              this.endLine = b
              if (!response) {
                this.isStop = true
              }
            })
        }
      },
      updateValue(val) {
        let rgba = val.rgba
        let result = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
        this.bgColor = result
      },
      mockHandleServer(left, right, separator, data) {
        let mockSourceData = data.split(separator)
        let ScopeData = mockSourceData.slice(left, right)
        return ScopeData.join(separator)
      }
    }
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
