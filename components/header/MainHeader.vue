<template lang="html">
    <header class='flex w-screen'>
        <div class='flex-col w-svw'>
            <article class='flex w-svw justify-center items-center gap-1.5 bg-blue-light text-blue-dark p-2'>
                <span class=''> ButterCMS vs WordPress: Headless CMS vs Traditional CMS </span>
                <a class='capitalize underline cursor-pointer' href='https://www.google.com' target='_blank'>check it out</a>
            </article>
            <article class='flex items-center justify-center bg-blue-dark text-light-default'>
                <div class='flex items-center justify-between w-screen px-28'>
                    <a>
                        <SvgButterLogo />
                    </a>

                    <nav class='relative'>
                        <ul class='flex gap-x-1'>
                            <li class='hoverable px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark'>
                                <a class='flex items-center gap-x-2'>Product <SvgDownArrow class='svg-arrow' /></a>
                                <div class='mega-menu pt-10'>
                                    <div class='bg-light-default px-8 py-6 rounded-xl flex gap-x-12'>
                                        <div class='min-w-80 flex-col gap-y-'>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>Create & Customize</h6>
                                                <p class='text-grey-light text-sm'>Design your content structure to fit your needs</p>
                                            </article>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>Multisite</h6>
                                                <p class='text-grey-light text-sm'>Manage multiple brands and languages easily</p>
                                            </article>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>Collaborate</h6>
                                                <p class='text-grey-light text-sm'>Work together, preview, and schedule content</p>
                                            </article>
                                        </div>
                                        <div class='min-w-80'>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>Media Library</h6>
                                                <p class='text-grey-light text-sm'>Manage all your multimedia assets in one place</p>
                                            </article>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>API First</h6>
                                                <p class='text-grey-light text-sm'>Connect your content to any frontend via API</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class='hoverable px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark'>
                                <a class='flex items-center gap-x-2'>Use cases <SvgDownArrow class='svg-arrow' /></a>
                                <div class='mega-menu pt-10'>
                                    <div class='bg-light-default px-8 py-6 rounded-xl flex gap-x-12'>
                                        <div class='min-w-[340px] flex-col gap-y-'>
                                            <span class='text-blue-dark text-sm font-normal pl-2 mb-8'>Create, manage and scale (CMS) your content</span>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>Websites</h6>
                                                <p class='text-grey-light text-sm'>Brands, locales, languages. Build blogs, portals, knowledge centers</p>
                                            </article>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>e-commerce sites</h6>
                                                <p class='text-grey-light text-sm'>Build engaging, personalized shopping experiences integrated to your ecommerce stack</p>
                                            </article>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>Mobile Apps</h6>
                                                <p class='text-grey-light text-sm'>Mobile experiences</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class='hoverable px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark'>
                                <a class='flex items-center gap-x-2 capitalize'>resources <SvgDownArrow class='svg-arrow' /></a>
                                <div class='mega-menu pt-10'>
                                    <div class='bg-light-default px-8 py-6 rounded-xl flex gap-x-12'>
                                        <div class='min-w-72 flex-col'>
                                            <span class='text-blue-dark text-sm font-normal pl-2 mb-8 capitalize'>learn</span>
                                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <a class='text-blue-dark font-bold text-sm w-[100%] capitalize' href='#'>knowledge base</a>
                                            </article>
                                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <a class='text-blue-dark font-bold text-sm w-[100%] capitalize' href='#'>blog</a>
                                            </article>
                                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <a class='text-blue-dark font-bold text-sm w-[100%] capitalize' href='#'>podcast</a>
                                            </article>
                                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <a class='text-blue-dark font-bold text-sm w-[100%] capitalize' href='#'>events</a>
                                            </article>
                                        </div>
                                        <div class='min-w-72'>
                                            <span class='text-blue-dark text-sm font-normal pl-2 mb-8 capitalize'>developer tools</span>
                                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <a class='text-blue-dark font-bold text-sm w-[100%] capitalize' href='#'>Developer documentation</a>
                                            </article>
                                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <a class='text-blue-dark font-bold text-sm w-[100%] capitalize' href='#'>aPI Documentation</a>
                                            </article>
                                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <a class='text-blue-dark font-bold text-sm w-[100%] capitalize' href='#'>Starter projects</a>
                                            </article>
                                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <a class='text-blue-dark font-bold text-sm w-[100%] capitalize' href='#'>quick start guide</a>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class='hoverable px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark'>
                                <a class='flex items-center gap-x-2 capitalize'>partners <SvgDownArrow class='svg-arrow' /></a>
                                <div class='mega-menu pt-10 left-80'>
                                    <div class='bg-light-default px-8 py-6 rounded-xl flex gap-x-12'>
                                        <div class=''>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>Create & Customize</h6>
                                                <p class='text-grey-light text-sm'>Design your content structure to fit your needs</p>
                                            </article>
                                            <article class='w-fit hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                                <h6 class='text-blue-dark font-bold text-sm capitalize'>Multisite</h6>
                                                <p class='text-grey-light text-sm'>Manage multiple brands and languages easily</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class='px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark capitalize'>pricing</li>
                            <li class='px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark capitalize'>log in</li>
                        </ul>
                    </nav>

                    <ul class='flex gap-x-2 capitalize'>
                        <li><a class='bg-yellow-default text-blue-dark px-6 py-3 rounded-full'>Book a demo</a></li>
                        <li><a class='bg-yellow-default text-blue-dark px-6 py-3 rounded-full'>get started</a></li>
                    </ul>
                </div>
            </article>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>