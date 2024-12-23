<template lang="html">
    <nav class='hidden relative sm:hidden md:block'>
        <ul class='flex gap-x-1'>
            <li class='hoverable px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark'>
                <a href='/' class='flex items-center gap-x-2 heading whitespace-nowrap'>Product <SvgDownArrow class='svg-arrow' /></a>
                <div class='mega-menu pt-10'>
                    <div class='bg-light-default px-8 py-6 rounded-xl flex gap-x-12 shadow-md'>
                        <div class='min-w-80 flex-col'>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgSettingsIcon />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>Create & Customize</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Design your content structure to fit your needs</p>
                                </a>
                            </article>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgSquareDots />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>Multisite</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Manage multiple brands and languages easily</p>
                                </a>
                            </article>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgCollaborateIcon />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>Collaborate</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Work together, preview, and schedule content</p>
                                </a>
                            </article>
                        </div>
                        <div class='min-w-80'>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgLibraryIcon />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>Media Library</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Manage all your multimedia assets in one place</p>
                                </a>
                            </article>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgApiIcon />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>API First</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Connect your content to any frontend via API</p>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </li>
            <li class='hoverable px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark'>
                <a href='/' class='flex items-center gap-x-2 heading whitespace-nowrap'>Use cases <SvgDownArrow class='svg-arrow' /></a>
                <div class='mega-menu pt-10'>
                    <div class='bg-light-default px-8 py-6 rounded-xl flex gap-x-12 shadow-md'>
                        <div class='min-w-fit flex-col'>
                            <span class='text-blue-dark text-sm font-normal pl-2'>Create, manage and scale (CMS) your content</span>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg mt-5'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgScreensIcon />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>Websites</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Brands, locales, languages. Build blogs, portals, knowledge centers</p>
                                </a>
                            </article>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgEcommerceIcon />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>e-commerce sites</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Build engaging, personalized shopping experiences integrated to your ecommerce stack</p>
                                </a>
                            </article>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgCellphoneIcon />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>Mobile Apps</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Mobile experiences</p>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </li>

            <li class='hoverable px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark'>
                <a href='/' class='flex items-center gap-x-2 heading whitespace-nowrap'>resources <SvgDownArrow class='svg-arrow' /></a>
                <div class='mega-menu pt-10'>
                    <div class='bg-light-default px-8 py-6 rounded-xl flex gap-x-12 shadow-md'>
                        <div class='min-w-72 flex-col'>
                            <span class='text-blue-dark text-sm font-normal pl-2 mb-8 capitalize'>learn</span>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg mt-4'>
                                <a class='text-blue-dark font-bold text-sm w-full capitalize' href='#'>
                                    <div class='flex flex-row gap-2 items-center'>
                                        <SvgPaperIcon />
                                        <h5>knowledge base</h5>
                                    </div>
                                </a>
                            </article>
                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                <a class='text-blue-dark font-bold text-sm w-full capitalize' href='#'>
                                    <div class='flex flex-row gap-2 items-center'>
                                        <SvgEditIcon />
                                        <h5>blog</h5>
                                    </div>
                                </a>
                            </article>
                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                <a class='text-blue-dark font-bold text-sm w-full capitalize' href='#'>
                                    <div class='flex flex-row gap-2 items-center'>
                                        <SvgPodcastIcon />
                                        <h5>podcast</h5>
                                    </div>
                                </a>
                            </article>
                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                <a class='text-blue-dark font-bold text-sm w-full capitalize' href='#'>
                                    <div class='flex flex-row gap-2 items-center'>
                                        <SvgHandIcon />
                                        <h5>events</h5>
                                    </div>
                                </a>
                            </article>
                        </div>
                        <div class='min-w-72'>
                            <span class='text-blue-dark text-sm font-normal pl-2 mb-8 capitalize'>developer tools</span>
                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg mt-4'>
                                <a class='text-blue-dark font-bold text-sm w-full capitalize' href='#'>
                                    <div class='flex flex-row gap-2 items-center'>
                                        <SvgDevIcon />
                                        <h5>Developer documentation</h5>
                                    </div>
                                </a>
                            </article>
                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                <a class='text-blue-dark font-bold text-sm w-full capitalize' href='#'>
                                    <div class='flex flex-row gap-2 items-center'>
                                        <SvgFileIcon />
                                        <h5>API documentation</h5>
                                    </div>
                                </a>
                            </article>
                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                <a class='text-blue-dark font-bold text-sm w-full capitalize' href='#'>
                                    <div class='flex flex-row gap-2 items-center'>
                                        <SvgStatsIcon />
                                        <h5>starter projects</h5>
                                    </div>
                                </a>
                            </article>
                            <article class='w-[100%] hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                <a class='text-blue-dark font-bold text-sm w-full capitalize' href='#'>
                                    <div class='flex flex-row gap-2 items-center'>
                                        <SvgPlaneIcon />
                                        <h5>quick start guide</h5>
                                    </div>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </li>
            <li class='hoverable px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark'>
                <a href='/' class='flex items-center gap-x-2 heading whitespace-nowrap'>partners <SvgDownArrow class='svg-arrow' /></a>
                <div class='mega-menu pt-10 left-80 w-max'>
                    <div class='bg-light-default px-8 py-6 rounded-xl flex gap-x-12 shadow-md'>
                        <div class=''>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-2 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgSearchIcon />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>find a partner</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Certified integration partner agencies</p>
                                </a>
                            </article>
                            <article class='w-full hover:bg-blue-light cursor-pointer px-1.5 pt-1.5 pb-3 rounded-lg'>
                                <a href='/'>
                                    <div class='flex flex-row items-center gap-2 text-blue-dark'>
                                        <SvgUserPlus />
                                        <h5 class='text-blue-dark font-bold text-sm capitalize'>Become a partner</h5>
                                    </div>
                                    <p class='text-grey-light text-sm body-light'>Integrate Butter for your clients</p>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </li>
            <li class='px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark heading whitespace-nowrap'><a href='/'>pricing</a></li>
            <li class='px-4 py-6 cursor-pointer hover:border-b-yellow-default hover:text-yellow-default border-b-2 border-b-blue-dark heading whitespace-nowrap'><a href='/'>log in</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>