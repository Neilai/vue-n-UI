<template>
    <button class="n-button" :class="[`icon-${iconPosition}`]"  @click="$emit('click')">
        <n-icon class="icon" v-if="icon&&!loading" :name="icon"/>
        <n-icon class="loading icon" v-if="loading" name="loading"/>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script type="text/ecmascript-6">
    //[] 意味着里面是个js 变量   {}键是否显示取决于值
    import Icon from './icon.vue'
    export default{
        components:{
            'n-icon':Icon
        },
        props:{
            icon:{},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value === 'left' || value === 'right';
                }
            }
        },
    }
</script>
<style lang="scss">
    @keyframes spin{
        0% {transform:rotate(0deg);}
        100% {transform:rotate(360deg);}
    }
    .n-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        .content {
            order: 2;
        }
        .icon {
            order: 1;
            margin-right: .3em;
        }
        .n-icon {width: 1em; height: 1em; }
        &.icon-right {
             .content { order: 1; }
             .icon { order: 2; margin-right: 0; margin-left: .3em;}
        }
        .loading{
            animation:spin 1s infinite linear;
        }
    }
</style>
