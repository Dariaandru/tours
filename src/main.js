import { createApp } from 'vue'
import App from '@/App.vue'
import routes from '@/routes'

const app = createApp(App)

app.use(routes)

app.mount('#app')

import { createYmaps } from 'vue-yandex-maps'

const settings = {
    apiKey: 'f5a4dded-f97b-40a9-a607-f14494f98cef',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
}

app.use(createYmaps(settings))
