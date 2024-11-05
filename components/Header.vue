<template>
  <header class="header">
    <h1>Tekton Softwares</h1>
    <nav class="navigation">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">Sobre</NuxtLink>
      <NuxtLink to="/services" class="nav-link">Serviços</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Contatos</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #1a469d;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation {
  display: flex;
  gap: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0f3569;
  }
}
</style>
