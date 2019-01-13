/**
 * Created by Neil
 * 2018-06-30 10:28
 */
import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row'
import Col from './col'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-panel'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'


Vue.component('n-icon', Icon)
Vue.component('n-button', Button)
Vue.component('n-button-group', ButtonGroup)
Vue.component('n-input', Input)
Vue.component('n-row', Row)
Vue.component('n-col', Col)
Vue.use(plugin)
Vue.component('n-tabs', Tabs)
Vue.component('n-tabs-head', TabsHead)
Vue.component('n-tabs-body', TabsBody)
Vue.component('n-tabs-item', TabsItem)
Vue.component('n-tabs-panel', TabsPane)
Vue.component('n-popover', Popover)
Vue.component('n-collapse', Collapse)
Vue.component('n-collapse-item', CollapseItem)
Vue.component('n-cascader', Cascader)



new Vue({
    el: '#app',
    data: {
        selectedTab: '1',
        loading: false,
        message:"哈哈哈哈哈哈",
        source: [{
            name: '浙江',
            children: [
                {
                    name: '杭州',
                    children: [
                        {name: '上城'},
                        {name: '下城'},
                        {name: '江干'},
                    ]
                },
                {
                    name: '嘉兴',
                    children: [
                        {name: '南湖'},
                        {name: '秀洲'},
                        {name: '嘉善'},
                    ]
                },
            ]
        }, {
            name: '福建',
            children: [
                {
                    name: '福州',
                    children: [
                        {name: '鼓楼'},
                        {name: '台江'},
                        {name: '仓山'},
                    ]
                },
            ]
        }, {
            name: '安徽',
            children: [{
                name: '合肥',
                children: [{
                    name: '瑶海'
                }, {
                    name: '庐阳'
                }]
            }]
        }]
    },
    methods:{
        yyy(){
            console.log('yyy')
        },
        showToast(){
            this.$toast("<strong>123</strong>",{enableHtml:true,position:"middle"})
        }
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