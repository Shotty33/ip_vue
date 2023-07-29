<template>
  <footer class="site-footer">

    <div class="social-media">
      <p id="follow-us">Follow us on social media for updates:</p>
      <div class="social-icons">

        <a href="https://www.facebook.com/search/top?q=inclusion%20photography" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a>

        <a href="" class="social-icon">
          <i class="fab fa-instagram"></i>
        </a>

      </div>
    </div>


    <div class="center-column">
      <div class="image-footer">
        <h3>Photography for all</h3>
      </div>

      <div class="copyright-text">
        Copyright Inclusion Photography &copy;{{ currentYear }}
      </div>
    </div>

    <div class="contact-info">
      <p>Email: info@inclusionphotography.com</p>
      <p>Phone: 123-456-7890</p>
    </div>

  </footer>
</template>
<script>
export default {
  name: "footerSection",
  data() {
    return {
      currentYear: null,
    };
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  },
};
</script>

<style>
.site-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas: "social-media center-column contact-info";
  background-color: #26272b;
  padding: 5px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.image-footer {
  font-family: "Edu SA Beginner", roboto sans-serif;
  font-size: 36px;
  color: whitesmoke;
}

.footer-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

#follow-us {
  display: flex;
  justify-content: center;
  font-family: "Edu SA Beginner", roboto sans-serif;
  font-size: 28px;
  color: whitesmoke;
}

.social-media {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
}

.social-icons {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

.social-icon {
  font-size: 24px;
  color: #fff;
  margin: 0 10px;
}

.social-icon:hover {
  color: aqua;
}

.center-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  color: #fff;
}

.contact-info p {
  display: flex;
  flex-direction: column;
  margin: 10px;}

@media screen and (max-width: 768px) {
  .site-footer {
    grid-template-columns: auto;
    grid-template-areas:
      "center-column"
      "social-media"
      "contact-info";
    font-size: 10px;
  }

  .social-media {
    justify-content: center;
  }

  .contact-info {
    text-align: center;
}
}
</style>
