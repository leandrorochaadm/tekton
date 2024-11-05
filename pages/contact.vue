<template>

  <!-- Seção de Contato -->
  <section class="home__contact" ref="contactSection">
    <h2>Entre em Contato</h2>
    <p>Estamos prontos para ajudar a transformar seu negócio. Preencha o formulário abaixo para iniciar a
      conversa.</p>
    <form class="home__contact-form" aria-label="Formulário de Contato">
      <input type="text" placeholder="Seu Nome" required aria-label="Nome"/>
      <input type="email" placeholder="Seu Email" required aria-label="Email"/>
      <textarea placeholder="Sua Mensagem" rows="4" required aria-label="Mensagem"></textarea>
      <button type="submit" class="home__cta-button" aria-label="Enviar Mensagem">Enviar</button>
    </form>
  </section>

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    sendMessage() {
      alert('Mensagem enviada com sucesso!');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
section {
  padding: 50px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}

input, textarea {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px;
  background-color: #1a469d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
