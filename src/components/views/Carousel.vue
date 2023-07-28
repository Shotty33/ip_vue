<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <transition-group name="slide" tag="div" class="image-wrapper">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          v-show="index === currentIndex"
          :style="{
            transform:
              index === currentIndex ? 'translateX(0)' : 'translateX(100%)',
            position: index === currentIndex ? 'relative' : 'absolute',
            left: index === currentIndex ? '0' : '100%',
          }"
        />
      </transition-group>
    </div>
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
        "https://ipwebapp.s3.us-east-2.amazonaws.com/images/carousel/sue.jpg",
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
.carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px; /* Adjust the height as needed */
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
}

.carousel img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.5s;
}

.image-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-move {
  transition: transform 0.5s;
}
</style>
