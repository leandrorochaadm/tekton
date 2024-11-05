<template>
  <div class="home">
    <!-- Seção de Cabeçalho -->
    <header class="home__header">
      <h1>Bem-vindo à Tekton Softwares</h1>
      <p>Inovação e precisão em soluções de software para pequenas empresas.</p>

    </header>

    <!-- Seção de botões -->
    <section class="home__services">
      <h2>Nossos Serviços</h2>
      <div class="home__services-list">
        <NuxtLink to="/services" class="service-card" tabindex="0" aria-label="Desenvolvimento Mobile">
          <h3>Serviços</h3>
          <p>Soluções sob medida para dispositivos móveis, adaptadas às necessidades do seu negócio.</p>
        </NuxtLink>
        <NuxtLink to="/contact" class="service-card" tabindex="0" aria-label="Desenvolvimento Web">
          <h3>Contatos</h3>
          <p>Sites e plataformas de alta performance, projetados para crescer com seu negócio.</p>
        </NuxtLink>
        <NuxtLink to="/about" class="service-card" tabindex="0" aria-label="Consultoria em Software">
          <h3>Sobre</h3>
          <p>Auxiliamos na transformação digital da sua empresa com nossa experiência e expertise.</p>
        </NuxtLink>
      </div>
    </section>


    <!-- Seção de Rodapé -->
    <footer class="home__footer">
      <p>&copy; 2024 Tekton Softwares. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const contactSection = ref(null)

const scrollToContact = () => {
  contactSection.value.scrollIntoView({behavior: 'smooth'})
}
</script>

<style scoped lang="scss">
@use "sass:color";

/* Variáveis de Cores */
$primary-blue: #1a469d;
$light-blue: #e0e9f5;
$white: #ffffff;
$gray: #666666;

/* Estilos Gerais */
.home {
  font-family: Arial, sans-serif;
  color: $primary-blue;
  background-color: $light-blue;
  padding: 20px;
  text-align: center;
  animation: fadeIn 1s ease-in-out;

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
      transition: background-color 0.3s, transform 0.3s;
      outline: none;

      &:hover, &:focus {
        background-color: color.mix(black, $white, 90%); // Darkens white by 10%
        transform: scale(1.05);
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
        cursor: pointer;
        outline: none;

        &:hover, &:focus {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
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

  &__contact {
    padding: 50px 20px;
    background-color: $primary-blue;
    color: $white;

    h2 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 20px;
    }

    .home__contact-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      max-width: 400px;
      margin: 0 auto;

      input, textarea {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 1rem;
        outline: none;
        transition: box-shadow 0.3s;

        &:focus {
          box-shadow: 0 0 5px rgba(26, 70, 157, 0.5);
        }
      }

      .home__cta-button {
        background-color: $white;
        color: $primary-blue;
        font-size: 1rem;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
        outline: none;

        &:hover, &:focus {
          background-color: color.mix(black, $white, 90%); // Darkens white by 10%
          transform: scale(1.05);
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

/* Animação de fade-in */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .home__services-list {
    flex-direction: column;
  }

  .home__header h1 {
    font-size: 2rem;
  }

  .home__services-list .service-card {
    max-width: 100%;
  }
}
</style>

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
