<template>
    <div class="home-section">
        <img id="logo" src="https://ipwebapp.s3.us-east-2.amazonaws.com/images/logo.png" alt="logo" width="100%" height="auto">
    </div>
    <div class="let-us">
        <h2 class="rainbow-text" id="phrase">Let us show you what we see...</h2>
    </div>
    <div>
        <img id="image-carousel" src="https://ipwebapp.s3.us-east-2.amazonaws.com/Amy_daughter_backs_lake" alt="Amy and daughter backs to camera looking at lake">
    </div>
    <div class="image-footer">
        <h3>Photography for all</h3>
    </div>
</template>

<script>
export default {
    name: "homeSection",
};

</script>

<style>
#logo {
    margin-top: 3px;
    margin-bottom: 0px;
    padding-left: 10px;
    padding-right: 10px;
    border: 3px solid #5bd196;
    border-radius: 10px;
    width: 95%;
    height: 5%;
}

#image-carousel {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 10px;
    padding-right: 10px;
    width: 95%;
    height: 5%;
}

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
@media screen and (max-width: 768px) {
 .rainbow-text{
    font-size: 20px;
 }
}

</style>