<template lang="html">
    <article v-if="(story.type === 'left')" class='rounded-[10px] p-6 bg-gradient-blue-lg min-w-[90%] md:min-w-[450px] flex flex-col gap-4 items-start justify-start'>
        <div class='flex flex-col items-start justify-start gap-4'>
            <div class='flex flex-row gap-4 items-center justify-center'>
                <img class='w-10 h-10 rounded-full' :src="story.picture" />
                <div class='flex flex-col items-start justify-start text-blue-dark text-[14px]'>
                    <span class='font-[600]'>{{ story.user_name }}</span>
                    <span class='font-[400]'>{{ story.position }}</span>
                </div>
            </div>
            <p :class="`font-[700]`" style="{'font-size': story.font_size }">"{{ story.testimonial }}"</p>
            <p class='text-[14px] font-[400]'>{{ story.sub }}</p>
        </div>
        <img class='h-[30px]' :src="story.logo" />
    </article>
    <article v-else class='relative bg-gradient-blue-linear p-6 rounded-[10px] min-w-[335px] text-white-default text-center flex flex-col gap-4 items-center justify-center'>
        <p :class="`text-[${story.font_size}] font-[700] z-[2]`">"{{ story.testimonial }}"</p>
        <div class='flex flex-col items-center justify-center z-[2] text-[14px]'>
            <span class='font-[700]'>{{ story.user_name }}</span>
            <span class='font-[400]'>{{ story.position }}</span>
        </div>
        <img class='h-[20px] z-[2]' :src="story.logo" />
        <img v-if="(story.background.length > 0)" class='absolute z-[0] w-full h-full' :src="story.background" />
    </article>
</template>
<script setup>
    defineProps(['story'])
</script>