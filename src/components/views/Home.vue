<template>
  <div class="let-us">
    <h2 id="phrase">Let us show you what we see...</h2>
  </div>
  <div>
    <carouselSection>{{ carouselSection }}</carouselSection>
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
#phrase {
  font-family: "Edu SA Beginner", roboto sans-serif;
  font-size: 36px;
  color: rgb(87, 238, 97);
}

@media screen and (max-width: 768px) {
  .rainbow-text {
    font-size: 20px;
    font: "Edu SA Beginner", roboto sans-serif;
  }
}
</style>
