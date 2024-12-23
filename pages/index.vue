<template lang="html">
    <main class=''>
        <hero />
        <first-scroll />
        <only-text />
        <spread-the-word />
        <two-cards />
        <tech-support />
        <start-building />
    </main>
</template>
<script>
import StartBuilding from '~/components/home/StartBuilding.vue'
import TechSupport from '~/components/home/TechSupport.vue'
import OnlyText from '~/components/home/OnlyText.vue'
import TwoCards from '~/components/home/TwoCards.vue'
import SpreadTheWord from '~/components/home/SpreadTheWord.vue'
import Hero from '~/components/home/Hero.vue'
import FirstScroll from '~/components/home/FirstScroll.vue'

export default {
    components: {
            Hero,
            FirstScroll,
            StartBuilding,
            TechSupport,
            OnlyText,
            TwoCards,
            SpreadTheWord
        }
}
</script>