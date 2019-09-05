import VueYwHelloWorld from './hello-world'

VueYwHelloWorld.install = Vue => Vue.component(VueYwHelloWorld.name, VueYwHelloWorld);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueYwHelloWorld);
}

export default VueYwHelloWorld