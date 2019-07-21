'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//

var script = {
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
  data: function () { return (
    {
      observer: null,
      intersected: false,
      templates: [],
      startLine: 0,
    }); },
  computed: {
    getBgColor: function getBgColor() {
      return {
        backgroundImage: ("radial-gradient(" + (this.bgColor) + ", black 120%)")
      }
    }
  },
  methods: {
    calcScope: function calcScope(n, counter) {
      var lines = this.src.split(this.separator);
      var startLine = this.startLine;
      var endLine = n + this.startLine;
      this.$emit('getScope', startLine, endLine);
      // let scope = lines.slice(startLine, endLine)
      this.startLine += n;
      if (lines.toString() === this.templates.toString()) {
        this.templates = lines;
      } else {
        for (var i$1 = 0, list = lines; i$1 < list.length; i$1 += 1) {
          var i = list[i$1];

          this.templates.push(i);
        }
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    setTimeout(function () {
      var counter = 0;
      var loadLines = (function (n) {
        self.calcScope(n, counter);
      });
      self.observer = new IntersectionObserver(function (entries) {
        if (entries[0].intersectionRatio <= 0) {
          return;
        }
        loadLines(self.intervalLine);
        //loadLines(self.intervalLine);
      });
      self.observer.observe(self.$refs.lazyText);
    }, self.defer);
  },
  destroyed: function destroyed() {
    this.observer.disconnect();
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;function createInjectorSSR(context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__;
  }

  if (!context) { return function () {}; }

  if (!('styles' in context)) {
    context._styles = context._styles || {};
    Object.defineProperty(context, 'styles', {
      enumerable: true,
      get: function get() {
        return context._renderStyles(context._styles);
      }
    });
    context._renderStyles = context._renderStyles || renderStyles;
  }

  return function (id, style) {
    return addStyle(id, style, context);
  };
}

function addStyle(id, css, context) {
  var group = css.media || 'default';
  var style = context._styles[group] || (context._styles[group] = {
    ids: [],
    css: ''
  });

  if (!style.ids.includes(id)) {
    style.media = css.media;
    style.ids.push(id);
    var code = css.source;

    style.css += code + '\n';
  }
}

function renderStyles(styles) {
  var css = '';

  for (var key in styles) {
    var style = styles[key];
    css += '<style data-vue-ssr-id="' + Array.from(style.ids).join(' ') + '"' + (style.media ? ' media="' + style.media + '"' : '') + '>' + style.css + '</style>';
  }

  return css;
}

var server = createInjectorSSR;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"terminal",style:(_vm.getBgColor)},[_vm._ssrNode("<output class=\"sentinel\">"+(_vm._ssrList((_vm.templates),function(template){return ("<div>"+_vm._ssrEscape(_vm._s(template))+"</div>")}))+"</output> <div><output class=\"sentinel\"></output></div>")])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-4a4040ea_0", { source: ".terminal[data-v-4a4040ea]{background-color:#000;background-image:radial-gradient(rgba(0,150,0,.75),#000 120%);height:70vh;margin:0;overflow:auto;padding:2rem;color:#fff;font:1.3rem Inconsolata,monospace;text-shadow:0 0 5px #c8c8c8}[data-v-4a4040ea]::selection{background:#0080ff;text-shadow:none}pre[data-v-4a4040ea]{white-space:pre-wrap;word-wrap:break-word}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-4a4040ea";
  /* module identifier */
  var __vue_module_identifier__ = "data-v-4a4040ea";
  /* functional template */
  var __vue_is_functional_template__ = false;

  
  var lazyText = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    server
  );/* eslint-disable import/prefer-default-export */var components = /*#__PURE__*/Object.freeze({LazyText: lazyText});var startLine = 0;
var counter = 0;
var addEventsListen = function (vnode, name, data) {
  var handlers = (vnode.data && vnode.data.on) ||
    (vnode.componentOptions && vnode.componentOptions.listeners);
  if (handlers && handlers[name]) {
    handlers[name].fns(data);
  }
};

function calcScope(n, counter, src, separator, vnode) {
  var separatorValue = separator ? separator : '\n';
  var lines = src.split(separatorValue);
  var endLine = n + startLine;
  addEventsListen(vnode, 'getScope', {start: startLine, end: endLine});
  startLine += n;
  var scroller = vnode.elm;
  for (var i$1 = 0, list = lines; i$1 < list.length; i$1 += 1) {
    var i = list[i$1];

    var newItem = document.createElement('div');
    newItem.textContent = i;
    scroller.appendChild(newItem);
  }

}

var lazyloadText = {

  bind: function bind(el, binding, vnode) {
    var intervalValue = binding.value.intervalLine;
    var intervalLine = intervalValue ? intervalValue : 10;
    var src = binding.value.src;
    var lastChildren = vnode.children;
    var scroller = vnode.elm;
    var sentinel = lastChildren[lastChildren.length - 1].elm;
    var loadLines = (function (n) {
      calcScope(n, counter, src, binding.value.separator, vnode);
    });
    var intersectionObserver = new IntersectionObserver(function (entries) {
      if (entries[0].intersectionRatio <= 0) {
        return;
      }
      loadLines(intervalLine);
      scroller.appendChild(sentinel);
      loadLines(intervalLine);
    });
    intersectionObserver.observe(sentinel);
  },
  update: function update(ele, binding, vnode, oldVnode) {
  }
};// Import vue components

function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
  Vue.directive('lazyload-text', lazyloadText);
}

var plugin = {
  install: install,
};

var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}exports.LazyText=lazyText;exports.default=plugin;