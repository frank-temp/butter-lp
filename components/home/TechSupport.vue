<template lang="html">
    <section class='relative flex flex-col items-center justify-center text-center'>
        <picture class='relative'>
            <source media="(max-width:720px)" srcset="~/assets/img/tech-bg-720.webp">
            <source media="(max-width:1440px)" srcset="~/assets/img/tech-bg-1440.webp">
            <img src="~/assets/img/tech-bg-1920.webp" alt="Techs Background" style="width:auto;">
        </picture>
        <article class='absolute top-0 z-10 w-full max-w-[880px] h-full flex flex-col items-center justify-center gap-y-6'>
            <h2>We Support Your Tech Stack</h2>
            <p>Whether you're using a custom tech stack or popular frameworks, ButterCMS integrates seamlessly with your setup.</p>
            <a class='bg-blue-dark capitalize text-white-default w-[100%] max-w-[400px] px-2 py-4 rounded-[100px] text-center cursor-pointer'>See Supported Technologies</a>
        </article>
    </section>
</template>
<script>
export default {
    
}
</script>