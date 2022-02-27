<template>
  <div class="oferta">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <oferta />







  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'


import oferta from '@/components/oferta'



export default {
  name: 'Home',
  components: {
    oferta
  }
}
</script>