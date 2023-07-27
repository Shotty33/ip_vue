<template>
    <mainNav> {{ main-nav }} </mainNav>
    <div class="home-view">
        <h1>Home View</h1>
    </div>
    <div class="let-us">
        <h2 class="heading" id="phrase">Let us show you what we see...</h2>
    </div>
    <footerSection>{{ footer-section }}</footerSection>
</template>

<script>
import mainNav from './components/main-nav.vue'

export default {
    name: "homeView",
};

</script>

<style>
#phrase{
    color: aquamarine;
    background: grey;
}
</style>