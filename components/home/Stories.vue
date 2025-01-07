<template lang="">
    <section class='flex flex-col md:gap-8 items-center justify-center w-screen overflow-hidden'>
        <article class='flex flex-col md:gap-6 items-center justify-center text-blue-dark px-4 md:px-28'>
            <h2>Success Stories from Top Innovators</h2>
            <p>Leading companies use ButterCMS to smoothly create, manage, and scale web, eCommerce, and mobile content.</p>
        </article>
        <article class='w-full max-w-screen overflow-hidden'>
            <article class='mt-8 flex flex-row gap-x-6 justify-start pl-32 flex-nowrap w-full overflow-x-scroll'>
                <story-card v-for="item in data" :id="item.id" :story="item" :key="item.id" />
            </article>
        </article>
    </section>
</template>
<script>
import StoryCard from "~/components/organisms/StoryCard.vue"
import stories from "~/assets/data/stories.json"

export default {
    data(){
        return{
            data: stories
        }
    },
    components: {
        StoryCard
    }
}
</script>