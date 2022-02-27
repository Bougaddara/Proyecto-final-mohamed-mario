import { createApp,provide, h, Vue  } from 'vue'
import router from './router'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from './App.vue'
 import 'bootstrap/dist/css/bootstrap.css'



/********************************************************/ 

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faCoffee)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

//  require('./plugins/fontawesome')


/************************************************************** */







const defaultClient = new ApolloClient({
    uri: 'http://localhost:3029/graphql',  // esto es URI DE SERVER GRAPHQL !!!!!
    cache: new InMemoryCache()
  })

createApp(
  
    {
    setup (){
        provide( DefaultApolloClient, defaultClient)
            },
          render(){
            return h(App)
          }
    }
    
    
).use(router).mount('#app')


















//createApp(App).use(router).mount('#app')
