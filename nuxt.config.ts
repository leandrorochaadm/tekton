// nuxt.config.ts
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    // Configurações de renderização
    ssr: true,         // Habilita a renderização do lado do servidor

    app: {
        head: {
            title: 'Tekton Softwares - Inovação em Desenvolvimento',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Inovação e precisão em soluções de software para pequenas empresas.'
                },
                {name: 'keywords', content: 'software, desenvolvimento, web, mobile, consultoria, tekton'},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ]
        }
    },

    modules: [
        // '@nuxtjs/axios',
        // '@nuxtjs/sitemap',
        // '@nuxt/image'  // Módulo de otimização de imagens para performance
    ],

    // Configurações para geração estática
    generate: {
        routes: [
            '/',          // Página inicial
            '/about',     // Página Sobre
            '/services',  // Página Serviços
            '/contact',   // Página Contato
        ]
    }

})
