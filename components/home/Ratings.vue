<template lang="html">
    <section class='w-screen bg-blue-dark text-white-default py-14 overflow-hidden'>
        <div class='w-full max-w-full md:max-w-[1440px] flex flex-col items-center justify-start'>
            <article class='w-full flex flex-col items-center justify-center px-4 md:px-32 gap-y-6'>
                <div class='flex flex-row items-center gap-3 py-2 px-3 rounded-[8px] bg-[rgba(255,255,255,.1)]'>
                    <SvgGIcon />
                    <div class='flex flex-row gap-1 items-center'>
                        <SvgRatingStars />
                        <span class='font-[300]'>4.7 Rating</span>
                    </div>
                </div>
                <div class='flex flex-row justify-center md:justify-between items-center w-full max-w-full md:max-w-[888px] gap-5 flex-wrap'>
                    <SvgCertBER class='w-14 h-16 md:w-24 md:h-28' />
                    <SvgCertES class='w-14 h-16 md:w-24 md:h-28' />
                    <SvgCertHP class='w-14 h-16 md:w-24 md:h-28' />
                    <SvgCertHPUK class='w-14 h-16 md:w-24 md:h-28' />
                    <SvgCertLeader class='w-14 h-16 md:w-24 md:h-28' />
                    <SvgCertULU class='w-14 h-16 md:w-24 md:h-28' />
                    <SvgCertFI class='w-14 h-16 md:w-24 md:h-28' />
                </div>
                <h2 class='text-center'>6,500+ Sites Rely on ButterCMS for Success</h2>
            </article>
            <article class='mt-8 flex flex-row gap-x-6 justify-start pl-4 md:pl-32 pr-4 md:pr-32 flex-nowrap w-full overflow-x-scroll'>
                <rating-card v-for="item in data" :id="item.id" :user="item" :key="item.id" />
            </article>
        </div>
    </section>
</template>
<script>
import RatingCard from '~/components/organisms/RatingCard.vue'
import ratings from '~/assets/data/ratings.json'

export default {
    data(){
        return{
            data: ratings
        }
    },
    components: {
        RatingCard
    }
}
</script>