<template lang="html">
    <nav class='block md:hidden'>
        <button @click="MenuOpen()">
            <SvgHamburgerMenu />
        </button>
        <div class='fixed flex flex-col items-center justify-between gap-4 z-50 w-screen h-screen bg-white-default left-0 text-blue-dark p-4 transition-all' :class="[open ? 'top-0' : 'top-[-150%]']">
            <button class='self-end' @click="MenuOpen()">
                <SvgCloseIcon />
            </button>

            <div class='h-dvh max-h-dvh w-full mt-6 flex flex-col gap-5 overflow-scroll'>
                <!-- PRODUCTS -->
                <details class='w-full mobile-accordion'>
                    <summary class='w-full flex flex-row items-center justify-between capitalize text-blue-dark'>
                        <span class='text-xl'>product</span>
                        <div class='i-plus text-xl'>+</div>
                        <div class='i-minus text-xl'>-</div>
                    </summary>
                    <ul class='w-full flex flex-col gap-4 px-4 py-5'>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgSettingsIcon />
                                <span>Create & customize</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgSquareDots />
                                <span>multisite</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgCollaborateIcon />
                                <span>Collaborate</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgLibraryIcon />
                                <span>media library</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgApiIcon />
                                <span>API first</span>
                            </a>
                        </li>
                    </ul>
                </details>
                <!-- USE CASES -->
                <details class='w-full mobile-accordion'>
                    <summary class='w-full flex flex-row items-center justify-between capitalize text-blue-dark'>
                        <span class='text-xl'>use cases</span>
                        <div class='i-plus text-xl'>+</div>
                        <div class='i-minus text-xl'>-</div>
                    </summary>
                    <ul class='w-full flex flex-col gap-4 px-4 py-5'>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgScreensIcon />
                                <span>websites</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgEcommerceIcon />
                                <span>E-Commerce Sites</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgCellphoneIcon />
                                <span>Mobile Apps</span>
                            </a>
                        </li>
                    </ul>
                </details>
                <!-- RESOURCES -->
                <details class='w-full mobile-accordion'>
                    <summary class='w-full flex flex-row items-center justify-between capitalize text-blue-dark'>
                        <span class='text-xl'>resources</span>
                        <div class='i-plus text-xl'>+</div>
                        <div class='i-minus text-xl'>-</div>
                    </summary>
                    <ul class='w-full flex flex-col gap-4 px-4 py-5'>
                        <li>
                            <span class='font-light'>Learn</span>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgPaperIcon />
                                <span>knowledge base</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgEditIcon />
                                <span>blog</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgPodcastIcon />
                                <span>podcast</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgHandIcon />
                                <span>events</span>
                            </a>
                        </li>
                        <li>
                            <span class='font-light mt-4'>Developer Tools</span>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgDevIcon />
                                <span>Developer documentation</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgFileIcon />
                                <span>API Documentation</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgStatsIcon />
                                <span>starter projects</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgPlaneIcon />
                                <span>quick start guide</span>
                            </a>
                        </li>
                    </ul>
                </details>
                <!-- PARTNERS -->
                <details class='w-full mobile-accordion'>
                    <summary class='w-full flex flex-row items-center justify-between capitalize text-blue-dark'>
                        <span class='text-xl'>partners</span>
                        <div class='i-plus text-xl'>+</div>
                        <div class='i-minus text-xl'>-</div>
                    </summary>
                    <ul class='w-full flex flex-col gap-4 px-4 py-5'>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgSearchIcon />
                                <span>find a partner</span>
                            </a>
                        </li>
                        <li>
                            <a class='text-grey-light flex flex-row items-center gap-2 capitalize'>
                                <SvgUserPlus />
                                <span>become a partner</span>
                            </a>
                        </li>
                    </ul>
                </details>
            </div>

            <div class='w-full flex flex-col gap-6'>
                <div class='w-full flex flex-row items-center justify-between text-sm capitalize font-extrabold'>
                    <a>pricing</a>
                    <a>About</a>
                    <a>Log In</a>
                </div>
                <div class='w-full flex flex-col gap-3 items-center'>
                    <a href='/' class='bg-blue-dark text-white-default p-4 rounded-full w-full'>
                        <div class='flex flex-row gap-3 items-center justify-center w-full'>
                            <h5 class='whitespace-nowrap capitalize'>start building</h5>
                            <SvgNextArrow />
                        </div>
                    </a>
                    <a class='text-sm underline underline-offset-2 capitalize'>Get a demo</a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue'

const open = ref(false)

function MenuOpen() {
    open.value = !open.value
}
</script>
<style lang="">
    
</style>