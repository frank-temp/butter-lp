<template lang="html">
    <header class='flex w-screen items-center justify-center'>
        <div class='flex-col w-svw items-center justify-center bg-yellow-default'>
            <announcement-bar />
            <article class='flex flex-row items-center justify-center bg-blue-dark text-light-default w-full'>
                <div class='flex items-center justify-between w-full md:max-w-[1440px] px-4 py-3 md:py-0 md:px-28'>
                    <a href='/' aria-label='ButterCMS' class='cursor-pointer'>
                        <SvgButterLogo />
                    </a>
                    <desktop-header-menu />
                    <ul class='hidden md:flex flex-row gap-x-2 w-screen items-center justify-center'>
                        <li><a class='btn-txt bg-yellow-default hover:bg-white-default text-blue-dark px-6 py-3 rounded-full cursor-pointer' href='/'>Book a demo</a></li>
                        <li><a class='btn-txt-w-icon bg-yellow-default hover:bg-white-default text-blue-dark px-6 py-3 rounded-full cursor-pointer' href='/'>get started <SvgNextArrow /></a></li>
                    </ul>
                    <mobile-header-menu />
                </div>
            </article>
        </div>
    </header>
</template>
<script>
import DesktopHeaderMenu from '~/components/molecules/DesktopHeaderMenu.vue'
import AnnouncementBar from '~/components/atoms/AnnouncementBar.vue'
import MobileHeaderMenu from '~/components/molecules/MobileHeaderMenu.vue'

export default {
    components: {
        DesktopHeaderMenu,
        MobileHeaderMenu,
        AnnouncementBar
    }
}
</script>
<style lang="">
    
</style>