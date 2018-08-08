/**
 * Created by Neil
 * 2018-07-28 11:33
 */
import Toast from './toast.vue'
export default {
    install(Vue,optins){
        Vue.prototype.$toast=function (message,toastOptions) {
        // var div=document.createElement('div')
        //     div.textContent=message
        //     document.body.appendChild(div)
        let Constructor=Vue.extend(Toast)
        let toast=new Constructor({
            propsData:toastOptions
        })
            toast.$slots.default=[message]
            toast.$mount()
        document.body.appendChild(toast.$el)
        }
    }
}
