<template>
    <div class="toast">
        <slot></slot>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
                {{closeButton.text}}
    </span>
    </div>
</template>

<script>
    export default{
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            closeButton: {
                type: Object,
                default () {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            }
        },
        mounted () {
//            this.updateStyles()
            this.execAutoClose()
        },
        methods:{
            execAutoClose () {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close () {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose () {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)//this === toast实例
                }
            }
        }
    }
</script>

<style lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        height: $toast-height;
        line-height: 1.8;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        color: white;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        padding: 0 16px;
        .close{
            padding-left: 16px;
            /*&::before{*/
                /*content:'';*/
                /*position:absolute;*/
                /*top:0;*/
                /*height: 100px;*/
                /*border-left:1px solid red;*/
            /*}*/
        }
        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }
</style>
