<template lang="html">
    <article v-if="(story.type === 'left')" class='rounded-[10px] p-6 bg-gradient-blue-lg  flex flex-col gap-4 items-start justify-start mx-3 h-full'>
        <div class='flex flex-col items-start justify-between gap-4'>
            <div class='flex flex-row gap-4 items-center justify-center text-blue-dark'>
                <img class='w-10 h-10 rounded-full' :src="story.picture" :alt="story.user_name" />
                <div class='flex flex-col items-start justify-start text-blue-dark'>
                    <span class='text-[14px] font-[600]'>{{ story.user_name }}</span>
                    <span class='text-[14px] font-[400]'>{{ story.position }}</span>
                </div>
            </div>
            <p v-if="(story.user_name === 'Justin Ludlow')" class='text-[34px] font-[700] grow'>"{{ story.testimonial }}"</p>
            <p v-else-if="(story.user_name === 'Jamey Meeker')" class='text-[18px] font-[700] grow'>"{{ story.testimonial }}"</p>
            <p v-else class='text-[20px] font-[700] grow'>"{{ story.testimonial }}"</p>
            <p class='text-[14px] font-[400]'>{{ story.sub }}</p>
        </div>
        <img class='h-[30px]' :src="story.logo" :alt="story.user_name" />
    </article>
    <article v-else class='relative bg-gradient-blue-linear p-6 rounded-[10px] text-white-default text-center flex flex-col gap-4 items-center justify-center mx-3 h-full'>
        <p v-if="(story.user_name === 'Todd Dunning')" class='text-[26px] font-[700] z-[2]'>"{{ story.testimonial }}"</p>
        <p v-else-if="(story.user_name === 'Riley Venable')" class='text-[18px] font-[700] z-[2]'>"{{ story.testimonial }}"</p>
        <p v-else="(story.user_name === 'Jake Kring')" class='text-[20px] font-[700] z-[2]'>"{{ story.testimonial }}"</p>
        <div class='flex flex-col items-center justify-center z-[2] text-[14px]'>
            <span class='font-[700]'>{{ story.user_name }}</span>
            <span class='font-[400]'>{{ story.position }}</span>
        </div>
        <img class='h-[20px] z-[2]' :src="story.logo" :alt="story.user_name" />
        <img v-if="(story.background.length > 0)" class='absolute z-[0] w-full h-full' :src="story.background" :alt="story.user_name" />
    </article>
</template>
<script setup>
    defineProps(['story'])
</script>