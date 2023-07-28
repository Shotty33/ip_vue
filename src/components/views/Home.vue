<template>
    <div class="let-us">
        <h2 class="rainbow-text" id="phrase">Let us show you what we see...</h2>
    </div>
    <div>
        <carouselSection>{{ carouselSection }}</carouselSection>
    </div>
    <div class="image-footer">
        <h3>Photography for all</h3>
    </div>
</template>

<script>
import CarouselSection from "@/components/views/Carousel.vue";

export default {
    name: "homeSection",
    components: {
        CarouselSection,
    },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap');

.rainbow-text {
  background-image: linear-gradient(45deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  background-size: 100% 100%;
  animation: rainbow-animation 1s ease infinite;
  background-clip: text;
  -webkit-background-clip: text; /* For Safari/WebKit */
  color: transparent;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  font: "Edu SA Beginner", roboto sans-serif;
}

.image-footer{
    font: "Edu SA Beginner", roboto sans-serif;
}

@media screen and (max-width: 768px) {
 .rainbow-text{
    font-size: 20px;
    font: "Edu SA Beginner", roboto sans-serif;
 }
}

</style>