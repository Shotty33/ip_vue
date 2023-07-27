<template>
  <footer class="site-footer">
    Copyright Inclusion Photography &copy;{{ currentYear }}
  </footer>
</template>
<script>
export default {
  name: 'footerSection',
  data() {
    return {
      currentYear: null
    };
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  }
};
</script>

<style>
.site-footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
</style>