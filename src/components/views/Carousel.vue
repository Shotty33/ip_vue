<template>
  <div class="carousel">
    <transition-group name="slide" tag="div" class="image-wrapper">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :style="{ left: `${index * 100}%` }"
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "CarouselSection",
  data() {
    return {
      images: [
        "https://ipwebapp.s3.us-east-2.amazonaws.com/images/carousel/elizabeth.jpg",
        "https://ipwebapp.s3.us-east-2.amazonaws.com/images/carousel/family.jpg",
        "https://ipwebapp.s3.us-east-2.amazonaws.com/images/carousel/kid.jpg",
        "https://ipwebapp.s3.us-east-2.amazonaws.com/images/carousel/sue.jpg"
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
  mounted() {
    setInterval(this.nextImage, 5000);
  },
};
</script>
<style>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px; /* Set the desired height of the carousel */
}

.image-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}
</style>
