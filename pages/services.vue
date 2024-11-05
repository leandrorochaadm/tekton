<template>
  <section>
    <h2>Nossos Serviços</h2>
    <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
    />
  </section>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue';

export default {
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {title: 'Desenvolvimento Mobile', description: 'Soluções móveis sob medida para seu negócio.'},
        {title: 'Desenvolvimento Web', description: 'Sites e plataformas personalizadas com alta performance.'},
        {title: 'Consultoria em Software', description: 'Auxiliamos na transformação digital da sua empresa.'}
      ]
    };
  },

  head() {
    return {
      title: 'Nossos Serviços',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça os serviços de desenvolvimento de software da Tekton para soluções web e mobile.'
        }
      ]
    }
  }
};
</script>

<style scoped>
section {
  padding: 50px;
}
</style>
