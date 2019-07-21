var startLine = 0
var counter = 0
let addEventsListen = (vnode, name, data) => {
  let handlers = (vnode.data && vnode.data.on) ||
    (vnode.componentOptions && vnode.componentOptions.listeners);
  if (handlers && handlers[name]) {
    handlers[name].fns(data);
  }
}

function calcScope(n, counter, src, separator, vnode) {
  let separatorValue = separator ? separator : '\n'
  const lines = src.split(separatorValue);
  const endLine = n + startLine
  addEventsListen(vnode, 'getScope', {start: startLine, end: endLine});
  startLine += n
  const scroller = vnode.elm
  for (let i of lines) {
    let newItem = document.createElement('div');
    newItem.textContent = i
    scroller.appendChild(newItem)
    counter++
  }

}

const lazyloadText = {

  bind(el, binding, vnode) {
    const intervalValue = binding.value.intervalLine
    let intervalLine = intervalValue ? intervalValue : 10
    let src = binding.value.src
    const lastChildren = vnode.children
    const scroller = vnode.elm
    const sentinel = lastChildren[lastChildren.length - 1].elm
    let loadLines = (n => {
      calcScope(n, counter, src, binding.value.separator, vnode)
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
  update(ele, binding, vnode, oldVnode) {
  }
}

export default lazyloadText
