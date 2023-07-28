<template>
    <div class="about-section">
        <h1>Who are we</h1>
    </div>
    <div class="let-us">
        <h2 class="rainbow-text" id="phrase">Let us show you what we see...</h2>
    </div>
    <div>
        <img src="" alt="" width="100%" height="auto">
    </div>
    <div class="image-footer">
        <h3>Photography for all</h3>
    </div>
</template>

<script>
export default {
    name: "contactSection",
};

</script>

<style>
.rainbow-text {
  background-image: linear-gradient(45deg, #f00, #ff0, #0f0, #f0f, #f00);
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
</style>