<template lang="html">
    <section class='w-full'>
        <article class='w-full px-4 md:px-28 py-6 md:py-16 flex flex-col md:flex-row gap-4 md:gap-20'>
            <div class='text-center md:text-left text-blue-dark flex flex-col gap-4 items-center justify-center'>
                <h1><ins class='underline underline-offset-8 decoration-[4px] md:decoration-[8px] decoration-yellow-default'>Smooth</ins> Content Management</h1>
                <p>Crafted by developers for everyone, Butter CMS lets you create, manage and scale content smoothly.</p>
                <div class='w-full flex flex-col md:flex-row gap-3 mt-2'>
                    <a class='btn-txt bg-blue-dark text-white-default rounded-full py-4 w-full text-center' href='/'>Why Marketers Love Butter</a>
                    <a class='btn-txt bg-blue-dark text-white-default rounded-full py-4 w-full text-center' href='/'>Start Building with Butter</a>
                </div>
            </div>
            <picture class=''>
                <source media="(max-width:720px)" srcset="~/assets/img/hero-Small.webp" alt="Hero Image" style="width:auto;" data-twe-lazy-src>
                <img src="~/assets/img/hero-Big.webp" alt="Hero Image" width='100%' style="width:auto;" data-twe-lazy-src>
            </picture>
        </article>
    </section>
</template>
<script>
export default {
    
}
</script>