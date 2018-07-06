/**
 * Created by Neil
 * 2018-06-30 10:28
 */
import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('n-icon', Icon)
Vue.component('n-button', Button)
Vue.component('n-button-group', ButtonGroup)
Vue.component('n-input', Input)

new Vue({
    el: '#app',
    data: {
        loading: false,
    }
})
// import chai from 'chai'
// const expect = chai.expect
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//           icon: 'setting'
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-setting')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//       const Constructor = Vue.extend(Button)
//       const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//             loading: true
//         }
//       })
//       vm.$mount()
//       let useElement = vm.$el.querySelector('use')
//       let href = useElement.getAttribute('xlink:href')
//       expect(href).to.eq('#icon-jiazai')
//       vm.$el.remove()
//       vm.$destroy()
// }
// {
//       const div = document.createElement('div')
//       document.body.appendChild(div)
//       const Constructor = Vue.extend(Button)
//       const vm = new Constructor({
//         propsData: {
//           icon: 'settings'
//         }
//       })
//       vm.$mount(div)
//       let svg = vm.$el.querySelector('svg')
//       let {order} = window.getComputedStyle(svg)
//       expect(order).to.eq('1')
//       vm.$el.remove()
//       vm.$destroy()
// }
// {
//       // mock
//       const Constructor = Vue.extend(Button)
//       const vm = new Constructor({
//         propsData: {
//           icon: 'setting',
//             }
//       })
//       vm.$mount()
//       vm.$on('click', function () {
//             expect(1).to.eq(1)
//           })
//       // 希望这个函数被执行
//       let button = vm.$el
//       button.click()
// }