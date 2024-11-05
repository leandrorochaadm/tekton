<template>
  <section>
    <h2>Sobre Nós</h2>
    <p>A Tekton é especializada em desenvolvimento de software personalizado, oferecendo soluções inovadoras e
      confiáveis.</p>
  </section>
</template>

<style scoped>
section {
  padding: 50px;
}
</style>

<script>
export default {
  head() {
    return {
      title: 'Sobre Nós',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Tekton oferece desenvolvimento de software personalizado com precisão e inovação.'
        }
      ]
    }
  }
}
</script>
