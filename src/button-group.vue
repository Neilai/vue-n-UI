<template>
<div class="n-button-group">
    <slot></slot>
</div>
</template>

<script type="text/ecmascript-6">
//主要通过CSS解决border重叠的问题 hover的时候z-index改为1
</script>

<style lang="scss">
    .n-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .n-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
