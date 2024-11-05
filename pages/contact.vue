<template>
  <section>
    <h2>Fale Conosco</h2>
    <form @submit.prevent="sendMessage">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="form.name" />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" />

      <label for="message">Mensagem:</label>
      <textarea id="message" v-model="form.message"></textarea>

      <button type="submit">Enviar</button>
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
