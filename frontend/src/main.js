import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import apiRequest from './mixins/apiRequest'

createApp(App)
    .use(Quasar, quasarUserOptions)
    .mixin(apiRequest)
    .mount('#app')
