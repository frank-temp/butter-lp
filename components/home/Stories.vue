<template lang="html">
    <section class='flex flex-col md:gap-8 items-center justify-center w-screen overflow-hidden text-center md:text-left pt-4 pb-4 md:pt-6 md:pb-8'>
        <article class='flex flex-col md:gap-6 items-center justify-center text-blue-dark px-4 md:px-28 max-w-full md:max-w-[1440px]'>
            <h2>Success Stories from Top Innovators</h2>
            <p>Leading companies use ButterCMS to smoothly create, manage, and scale web, eCommerce, and mobile content.</p>
        </article>
        <article class='w-full overflow-hidden max-w-full md:max-w-[1440px]'>
            <!-- <article class='mt-8 flex flex-row gap-x-6 justify-start pl-4 md:pl-32 pr-4 md:pr-32 flex-nowrap w-full overflow-x-scroll no-scrollbar'>
                <story-card v-for="item in data" :id="item.id" :story="item" :key="item.id" />
            </article> -->
            <article class='w-full flex items-center justify-center mt-8'>
                <Carousel v-bind="config" class='max-w-full md:max-w-[1200px] flex flex-row'>
                    <Slide v-for="slide in data">
                        <story-card :id="slide.id" :story="slide" :key="slide.id" />
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </article>
        </article>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

// Carousel configuration
const config = {
  itemsToShow: 3,
  snapAlign: 'start',
  breakpointMode: 'carousel',
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1,
      snapAlign: 'start',
    },
    // 400px and up
    400: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    // 500px and up
    500: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
  },
};

</script>
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