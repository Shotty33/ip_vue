<template>
    <h1 class="mb-4">About Us</h1>
  <div class="about-section">
    <p class="about-us">
      Hi everyone! We are Rachael and Lisa. We are an energetic, talented duo
      who loves working with individuals and groups of all shapes, sizes, and
      orientations! We started taking photos for fun and quickly realized our
      passion for creativity and social interaction.
      <br />
      When working with us, you get twice the shots, double the fun, and two
      times the passion. We are quick-witted, open-minded, and we are exercising
      our innovative visions to give our clients the best experience.
    </p>
    <img class="our-picture" src="https://ipwebapp.s3.us-east-2.amazonaws.com/images/us.jpg" alt="Rachael and Lisa" />
  </div>
</template>

<script>
export default {
  name: "aboutSection",
};
</script>

<style>
.about-section {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    "about-us our-picture"
    "about-us our-picture";
  padding: 5px 0 20px;
  font-size: 35px;
  line-height: 24px;
  color: #737373;
}

.about-us {
  margin: 0 auto;
  max-width: 1000px;
  padding: 10px 20px;
  font-family: "Edu SA Beginner", roboto sans-serif;
  font-size: 35px;
  font-weight: 300;
  color: purple;
}

.our-picture {
  grid-area: our-picture;
  width: auto;
  height: 500px;
  margin: 0 auto;
  max-width: 1000px;
  padding: 10px 20px;
  border-radius: 50%;
  border: 5px solid purple;
}
</style>
