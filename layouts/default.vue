<template>
  <NuxtLayout>
    <Header/>
    <NuxtPage/>
    <Footer/>
  </NuxtLayout>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
/* Estilos globais */
body {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 0;
}
</style>
