<template>
  <div class="home">
    <!-- Seção de Cabeçalho -->
    <header class="home__header">
      <h1>Bem-vindo à Tekton Softwares</h1>
      <p>Inovação e precisão em soluções de software para pequenas empresas.</p>
      <button @click="handleContact" class="home__cta-button">Fale Conosco</button>
    </header>

    <!-- Seção de Serviços -->
    <section class="home__services">
      <h2>Nossos Serviços</h2>
      <div class="home__services-list">
        <div class="service-card">
          <h3>Desenvolvimento Mobile</h3>
          <p>Soluções sob medida para dispositivos móveis, adaptadas às necessidades do seu negócio.</p>
        </div>
        <div class="service-card">
          <h3>Desenvolvimento Web</h3>
          <p>Sites e plataformas de alta performance, projetados para crescer com seu negócio.</p>
        </div>
        <div class="service-card">
          <h3>Consultoria em Software</h3>
          <p>Auxiliamos na transformação digital da sua empresa com nossa experiência e expertise.</p>
        </div>
      </div>
    </section>

    <!-- Seção de Contato -->
    <footer class="home__footer">
      <p>&copy; 2024 Tekton Softwares. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
const handleContact = () => {
  alert("Entre em contato com a Tekton Softwares para mais informações.");
};
</script>

<script>
export default {
  head() {
    return {
      title: 'Bem-vindo à Tekton Softwares',
      script: [
        {
          hid: 'json-ld',
          type: 'application/ld+json',
          json: {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Tekton Softwares",
            "url": "https://tektonsoftwares.com",
            "logo": "https://tektonsoftwares.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/tekton-softwares",
              "https://twitter.com/tekton_softwares"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-99999-9999",
              "contactType": "Customer Service"
            }
          }
        }
      ]
    }
  }

}
</script>


<style scoped lang="scss">
/* Variáveis de Cores */
$primary-blue: #1a469d;
$light-blue: #e0e9f5;
$white: #ffffff;
$gray: #666666;

/* Estilos Gerais */
.home {
  font-family: Arial, sans-serif;
  color: $primary-blue;
  text-align: center;
  background-color: $light-blue;
  padding: 20px;

  &__header {
    padding: 50px 0;
    background-color: $primary-blue;
    color: $white;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }

    .home__cta-button {
      background-color: $white;
      color: $primary-blue;
      padding: 10px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: darken($white, 10%);
      }
    }
  }

  &__services {
    padding: 40px 20px;

    h2 {
      font-size: 2rem;
      color: $primary-blue;
      margin-bottom: 30px;
    }

    .home__services-list {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      flex-wrap: wrap;

      .service-card {
        background-color: $white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        max-width: 300px;
        text-align: left;
        transition: transform 0.3s;

        &:hover {
          transform: translateY(-5px);
        }

        h3 {
          font-size: 1.5rem;
          color: $primary-blue;
          margin-bottom: 10px;
        }

        p {
          font-size: 1rem;
          color: $gray;
        }
      }
    }
  }

  &__footer {
    margin-top: 40px;
    padding: 20px;
    background-color: $primary-blue;
    color: $white;

    p {
      font-size: 0.9rem;
    }
  }
}
</style>
