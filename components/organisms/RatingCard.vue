<template lang="html">
    <article class='flex flex-col p-6 rounded-[10px] gap-y-4 text-center items-center justify-center md:min-w-[384px] min-w-[90%] bg-white-default text-blue-dark'>
        <img :src="user.picture" class='w-14 h-14 rounded-full' :alt="user.user_name" />
        <p class='grow text-[16px] font-[700]'>"{{ user.testimonial }}"</p>
        <div class='text-grey-default flex flex-col gap-0.5'>
            <span class='text-[14px] font-[700]'>{{ user.user_name }}</span>
            <span class='text-[12px] font-[400]'>{{ user.position }}</span>
            <span class='text-[12px] font-[400]'>{{ user.business_size }}</span>
        </div>
    </article>
</template>

<script setup>
    defineProps(['user'])
</script>