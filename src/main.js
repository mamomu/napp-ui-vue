import * as components from './components'
import "./styles/main.css";

const NappUI = {
  install(Vue = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default NappUI

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(NappUI)
}