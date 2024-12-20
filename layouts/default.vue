<template lang="html">
    <div class='main-layout'>
        <main-header />
        <slot />
        <main-footer />
    </div>
</template>
<script>
    import MainHeader from '~/components/header/MainHeader.vue';
    import MainFooter from '~/components/footer/MainFooter.vue'

    export default {
        components: {
            MainHeader,
            MainFooter
        }
    }
</script>