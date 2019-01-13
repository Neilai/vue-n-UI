/**
 * Created by Neil
 * 2018-07-28 11:33
 */
import Toast from './toast'


let currentToast

export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}

/* helpers */
function createToast ({Vue, message, propsData, onClose}) {
    //动态生成组件并传递slot
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    //监听close 一旦关闭将current设为null
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}