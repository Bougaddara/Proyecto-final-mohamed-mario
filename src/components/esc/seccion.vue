<template>
  <div class="seccion">
  <!-- Example single danger button -->

    <body>
        <div class="alquiler" >
        <h1>CARS FOR YOU </h1>
        <p>Coches segunda mano, nuevos y Km0 en nuestra gama de vehículos de alta gama.</p>
        <div class="buscar">
                <div class="row g-2 ">
                    <select class="col-sm form-select " id="inputState" >
                    <option selected>marca</option>
                            <option>BMW</option>
                            <option>Seat</option>
                            <option>Audi</option>

                    </select>
                    <select class="col-sm form-select " id="inputState" >
                    <option selected>marca</option>
                            <option>BMW</option>
                            <option>Seat</option>
                            <option>Audi</option>

                    </select>
                      <select class="col-sm form-select " id="inputState" >
                    <option selected>marca</option>
                            <option>BMW</option>
                            <option>Seat</option>
                            <option>Audi</option>

                    </select>
                      <div class="col-sm">
                        <button type="submit" class="btn btn-primary"> SHOW RESULT </button>
                      </div>
                </div>
        </div>
        </div>

          <div class="car" v-for="car in carList" :key="car.codcoche" :car="car" >

            <router-link Class="mascar" :to="{name: 'Detalles', params: {codcoche: car.codcoche}}">
            <div class="namecar"> <img :src="car.imagen" alt=""></div>
            <nav class="info" > {{car.nombre}} {{car.codcoche}} </nav> 
            <nav class="precio" >  {{car.Precio}}€ </nav>  
            <nav class="ano" > • {{car.Ano}} • {{car.Kilometros}} Km </nav>  
            </router-link>
          </div>
    </body>
  </div> 

</template>
  
<script>
// @ is an alias to /src
import seccion from '@/components/esc/seccion.vue'

/*****************************/ 
import { useQuery, useResult } from '@vue/apollo-composable'
import { ref } from 'vue'
import carListQuery from '../../graphql/car.query.gql'






import gql from 'graphql-tag'

export default {
  name: 'Home',
  components: {  
    seccion, 
  },
  props: ["codcoche"],



  setup() {
    //const message = ref('hola mohamed')
    const { result } = useQuery(carListQuery)

  console.log(result)
  const carList = useResult(result, null,  data => data.carList)


   return {  carList }
  },

        
}
  
</script>





<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}
html {
  font-size: 10pt;
  line-height: 1.4;
  font-weight: 400;
  font-family: 'Source Sans Pro', 'Open Sans', Roboto, 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Myriad Pro', 'Segoe UI', Myriad, Helvetica, 'Lucida Grande', 'DejaVu Sans Condensed', 'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, Arial, sans-serif;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  background: #eee; 
}
/**************************** SELECT COCHES ******************************* */
div .buscar  {
      text-align: center;
      width: 90%;
      margin: 0 5% 0 5%  ;
      padding: 0 100px;
}
div .buscar select {
    margin: 10px ;
    text-align: center;

}


/*************************** LOS DATOS DE COCHES ********************************** */
div .car {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 32.5%;
    height: auto;
}

div .car a {
  color:black;
  text-decoration: none;

  }
div .info {
    font-size: 20pt;
    padding-left: 10px;
    float: left;
    font-weight: bold;  
    margin-bottom: 30px;
}

div .precio {
        font-weight: bold;  
    font-size: 20pt;
    padding-left: 80%;
        
}
div .ano {
    font-size: 15pt;
    float: right;
    padding-right: 10px ;
    
}


div .car:hover {
    border: 1px solid #777;
}

div.namecar img {
    width: 100%;
    height: 350px;
}


.alquiler {
 width: 100%;
  height: 200px;
}
div h1 {
	color: black;
  margin: 0;
  font-size: 400%;
  text-align: center;
  line-height: 1;
  padding-top: calc(20vh - 90pt);
  display: block;
  font-weight: 700;
}
div p {
	color: grid;
  margin: 0;
  padding-top: 10px ;
  padding-bottom: 15px;
  font-size: 20px;
  text-align: center;
  line-height: 1;
  display: block;
  font-weight: 700;
}




/****************************************************************** */



</style >