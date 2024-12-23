<template lang="html">
    <section class='relative flex flex-col items-center justify-center text-center px-4 md:px-0 py-8 md:py-0'>
        <picture class='relative hidden md:block'>
            <source media="(max-width:720px)" srcset="~/assets/img/tech-bg-720.webp">
            <source media="(max-width:1440px)" srcset="~/assets/img/tech-bg-1440.webp">
            <img src="~/assets/img/tech-bg-1920.webp" alt="Techs Background" width='100%' style="width:auto;">
        </picture>
        <article class='static md:absolute top-0 z-10 w-full max-w-[880px] h-full flex flex-col items-center justify-center gap-y-6'>
            <h2>We Support Your Tech Stack</h2>
            <p>Whether you're using a custom tech stack or popular frameworks, ButterCMS integrates seamlessly with your setup.</p>
            <a href='/' class='btn-txt bg-blue-dark capitalize text-white-default w-[100%] max-w-[400px] px-2 py-4 rounded-[100px] text-center cursor-pointer'>See Supported Technologies</a>
        </article>
        <div class='flex flex-row flex-wrap md:hidden gap-x-4 gap-y-3 justify-center mt-6'>
            <SvgIosIcon />
            <SvgAndroidIcon />
            <SvgAngularIcon />
            <SvgDJangoIcon />
            <SvgJavascriptIcon />
            <SvgPhytonIcon />
            <SvgReactIcon />
            <SvgRailsIcon />
            <span class='text-[12px]'>25+ more platforms & apps</span>
        </div>
    </section>
</template>