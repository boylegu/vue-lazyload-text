<template>
  <div class="terminal" :style="getBgColor">
    <output class="sentinel" ref="lazyText">
      <div v-text="template" v-for="template in templates"></div>
    </output>
    <div>
      <output class="sentinel" ref="lazyText"></output>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LazyText',
    props: {
      src: {
        type: String,
        required: true
      },
      intervalLine: {
        type: Number,
        default: 10
      },
      defer: {
        type: Number,
        default: 2000
      },
      separator: {
        type: String,
        default: '\n'
      },
      bgColor: {
        type: String,
        required: false,
        default: 'rgba(0, 150, 0, 0.75)'
      },
    },
    data: () => (
      {
        observer: null,
        intersected: false,
        templates: [],
        startLine: 0,
      }),
    computed: {
      getBgColor() {
        return {
          backgroundImage: `radial-gradient(${this.bgColor}, black 120%)`
        }
      }
    },
    methods: {
      calcScope(n, counter) {
        const lines = this.src.split(this.separator);
        const startLine = this.startLine
        const endLine = n + this.startLine
        this.$emit('getScope', startLine, endLine)
        // let scope = lines.slice(startLine, endLine)
        this.startLine += n
        if (lines.toString() === this.templates.toString()) {
          this.templates = lines
        } else {
          for (let i of lines) {
            this.templates.push(i)
            counter++
          }
        }
      }
    },
    mounted() {
      let self = this
      setTimeout(function () {
        let counter = 0;
        let loadLines = (n => {
          self.calcScope(n, counter)
        })
        self.observer = new IntersectionObserver(entries => {
          if (entries[0].intersectionRatio <= 0) {
            return;
          }
          loadLines(self.intervalLine);
          //loadLines(self.intervalLine);
        });
        self.observer.observe(self.$refs.lazyText);
      }, self.defer);
    },
    destroyed() {
      this.observer.disconnect();
    }
  }

</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  .terminal {
    background-color: black;
    background-image: radial-gradient(
        rgba(0, 150, 0, 0.75), black 120%
    );
    height: 70vh;
    margin: 0;
    overflow: auto;
    padding: 2rem;
    color: white;
    font: 1.3rem Inconsolata, monospace;
    text-shadow: 0 0 5px #C8C8C8;
    //&::after {
    //  content: "";
    //  position: absolute;
    //  top: 0;
    //  width: 100vw;
    //  height: 100vh;
    //  background: repeating-linear-gradient(
    //      0deg,
    //      rgba(black, 0.15),
    //      rgba(black, 0.15) 1px,
    //      transparent 1px,
    //      transparent 2px
    //  );
    //  pointer-events: none;
    //}
  }

  ::selection {
    background: #0080FF;
    text-shadow: none;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

</style>
