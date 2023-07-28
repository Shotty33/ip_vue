<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="social-media">
        <p id="follow-us">Follow us on social media for updates:</p>
        <div class="social-icons">
          <a href="#" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-icon">
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
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas: "social-media center-column contact-info";
  background-color: #26272b;
  padding: 5px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.footer-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 20px;
}

.image-footer {
  font-family: "Edu SA Beginner", roboto sans-serif;
  font-size: 36px;
  color: whitesmoke;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 20px;
}

#follow-us{
  font-family: "Edu SA Beginner", roboto sans-serif;
  font-size: 28px;
  color: whitesmoke;
}

.social-media {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-icons {
  display: flex;
  align-items: center;
  margin-top: 5px; /* Add some spacing between the text and icons */
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
  text-align: right;
  font-size: 14px;
  color: #fff;
}

.contact-info p {
  margin: 5px 0;
}

@media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  .contact-info {
    text-align: center;
  }
}
</style>