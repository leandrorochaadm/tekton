<template>
  <header>
    <h1>Tekton</h1>
    <nav>
      <NuxtLink to="/public">Home</NuxtLink>
      <NuxtLink to="/about">Sobre</NuxtLink>
      <NuxtLink to="/services">Serviços</NuxtLink>
      <NuxtLink to="/contact">Contato</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #1a469d;
  color: #fff;
}
nav a {
  margin-left: 20px;
  color: #fff;
  text-decoration: none;
}
</style>
