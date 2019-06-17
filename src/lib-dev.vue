<script>
import { VueLazyloadText } from './main';
export default {
    name:  'VueLazyloadTextLibDev', // vue library dev component
    components: {
        VueLazyloadText,
    },
}
</script>

<template>
    <div class="vue-lazyload-text-lib-dev">
        <vue-lazyload-text></vue-lazyload-text>
    </div>
</template>

<style scoped>
    .vue-lazyload-text-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
