<template>
  <div id="app">
    <div class="center">
      <img src="./assets/vue-lazyload-text.png" style="width: 600px; height:500px" >
      <h1 style="margin-bottom: 60px">vue-lazyload-text</h1>
      <h2>Start Line: {{startLine}}   End Line:{{endLine}} </h2>
    </div>
    <lazy-text :src="demo" :separator="separator" :intervalLine="intervalLine" @getScope="textScope"></lazy-text>
  </div>
</template>

<script>

  // import directive from './demo/directive'
  import LazyText from 'vue-lazyload-text-dev/src/components/lazy-text'

  import server from './lib/api'

  export default {
    name: 'app',
    components: {
      LazyText,
      //directive,
    },
    data() {
      return {
        left: 0,
        right: 50,
        intervalLine: 50,
        isStop: false,
        demo: '',
        separator: ' ',
        startLine: 0,
        endLine: 0
      }
    },
    mounted() {
      server.Mock('/result')
        .then(res => {
          this.demo = this.mockHandleServer(this.left, this.right, this.separator, res)
        })
      // this.demo = "172.16.217.240\\r\\n=============\\r\\ngivenchy: stopped\\r\\ngivenchy\\r\\nDockerfile\\r\\nGopkg.lock\\r\\nGopkg.toml\\r\\nMakefile\\r\\nREADME.md\\r\\nbackend/.python-version\\r\\nbackend/Dockerfile\\r\\nbackend/Makefile\\r\\nbackend/README.md\\r\\nbackend/celerybeat-schedule\\r\\nbackend/cmdb.sql\\r\\nbackend/coco.ini\\r\\nbackend/deploy/__init__.py\\r\\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\\r\\nbackend/deploy/__pycache__/admin.cpython-36.pyc\\r\\nbackend/deploy/__pycache__/base.cpython-36.pyc\\r\\nbackend/deploy/__pycache__/urls.cpython-36.pyc\\r\\nbackend/deploy/__pycache__/utils.cpython-36.pyc\\r\\nbackend/deploy/admin.py\\r\\nbackend/deploy/apps.py\\r\\nbackend/deploy/base.py\\r\\nbackend/deploy/core/__init__.py\\r\\nbackend/deploy/migrations/0001_initial.py\\r\\nbackend/\\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n"
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
