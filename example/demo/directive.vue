<template>
  <div class="terminal" v-lazyload-text="{ intervalLine: 20, message: message }">
    <output class="sentinel">
    </output>
  </div>
</template>

<script>
  export default {
    name: "directive",
    directives: {
      lazyloadText: {
        bind: function (el, binding, vnode) {
          let counter = 0
          let startLine = 0
          let intervalLine = binding.value.intervalLine
          const lastChildren = vnode.children
          const scroller = vnode.elm
          const sentinel = lastChildren[lastChildren.length - 1].elm

          function calcScope(n, counter) {
            let src = binding.value.message
            const lines = src.split('\n');
            const endLine = n + startLine
            console.log(2, startLine, endLine)
            // this.$emit('getScope', startLine, endLine)
            let scope = lines.slice(startLine, endLine)
            startLine += n
            for (let i of scope) {
              let newItem = document.createElement('div');
              newItem.textContent = i
              scroller.appendChild(newItem)
              counter++
            }
          }
          let loadLines = (n => {
            calcScope(n, counter)
          })
          const intersectionObserver = new IntersectionObserver(entries => {
            if (entries[0].intersectionRatio <= 0) {
              return;
            }
            loadLines(intervalLine);
            scroller.appendChild(sentinel);
            loadLines(intervalLine);
          });
          intersectionObserver.observe(sentinel);

        },
      }
    },
    data() {
      return {
        message: "172.16.217.240\\r\\n=============\\r\\ngivenchy: stopped\\r\\ngivenchy\\r\\nDockerfile\\r\\nGopkg.lock\\r\\nGopkg.toml\\r\\nMakefile\\r\\nREADME.md\\r\\nbackend/.python-version\\r\\nbackend/Dockerfile\\r\\nbackend/Makefile\\r\\nbackend/README.md\\r\\nbackend/celerybeat-schedule\\r\\nbackend/cmdb.sql\\r\\nbackend/coco.ini\\r\\nbackend/deploy/__init__.py\\r\\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\\r\\nbackend/deploy/__pycache__/admin.cpython-36.pyc\\r\\nbackend/deploy/__pycache__/base.cpython-36.pyc\\r\\nbackend/deploy/__pycache__/urls.cpython-36.pyc\\r\\nbackend/deploy/__pycache__/utils.cpython-36.pyc\\r\\nbackend/deploy/admin.py\\r\\nbackend/deploy/apps.py\\r\\nbackend/deploy/base.py\\r\\nbackend/deploy/core/__init__.py\\r\\nbackend/deploy/migrations/0001_initial.py\\r\\nbackend/\\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\n172.16.217.240\n=============\ngivenchy: stopped\ngivenchy\nDockerfile\nGopkg.lock\nGopkg.toml\nMakefile\nREADME.md\nbackend/.python-version\nbackend/Dockerfile\nbackend/Makefile\nbackend/README.md\nbackend/celerybeat-schedule\nbackend/cmdb.sql\nbackend/coco.ini\nbackend/deploy/__init__.py\nbackend/deploy/__pycache__/__init__.cpython-36.pyc\nbackend/deploy/__pycache__/admin.cpython-36.pyc\nbackend/deploy/__pycache__/base.cpython-36.pyc\nbackend/deploy/__pycache__/urls.cpython-36.pyc\nbackend/deploy/__pycache__/utils.cpython-36.pyc\nbackend/deploy/admin.py\nbackend/deploy/apps.py\nbackend/deploy/base.py\nbackend/deploy/core/__init__.py\nbackend/deploy/migrations/0001_initial.py\nbackend/\nhello",
      }
    },
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
</style>
