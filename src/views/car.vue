<template>
  <div class="car">
    <header>
  		<h1>EMVcoches</h1>
 		  <nav>
            <router-link to="/">Home</router-link>
            <router-link Class="mascar" to="/oferta">+ ADD NEW CAR</router-link>
  		</nav>
      <router-view />
	</header>
	 <section>   

          <!--  <carshow v-if=" car in carList" :key="car.codcoche" :car="car" />--> 
          <!--  
          <div class="row mt-5" v-if="carId" :key="carId.codcoche"  >
          <div class="col-4">
          <img :src="data.imagen" alt="">
          </div>
          <div class="col-8">
           <h1>{{ data.nombre }}</h1>
           <h3>{{ data.Precio }}€</h3>
          <p class="mt-4">{{ data.descripcion }}</p>
          </div>    
          </div>  

          :variables="{codcoche}" -->

       
          
        
           <div class="car" v-if="codcoche" >
             {{codcoche}}
           <!--  <div class="car" v-for="car in carId" :key="car.codcoche"   >
            <div class="namecar"> <img :src=" car.imagen" alt=""></div>
            <nav class="info" > {{ car.nombre}} {{ car.codcoche}} </nav> 
            <nav class="precio" >  {{ car.Precio}}€ </nav>  
            <nav class="ano" > • {{car.Ano}} • {{car.Kilometros}} Km </nav>    -->

            </div> 
            {{result}}



               <!-- <div v-for="car in carList" :key="car.codcoche" >

                 <h3>{{ car.nombre }}</h3>
                
               </div> -->


          <!-- 
          <ApolloQuery :query="require ('../graphql/showcar')" :variables="{codcoche}">
            <template v-slot="{ result:{ data } } ">
       
            <div v-if="data">
            <div v-for="car in data.carId" :key="car.codcoche">{{car.nombre}}</div>
            </div>
           </template>
          </ApolloQuery>  -->
          





  	</section>
  </div> 
  
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {

  props: ["codcoche"],

  setup(props) {


    const { result } = useQuery(
      gql `
        query CarId($codcoche: ID!) {
              carId(codcoche: $codcoche) {
                data {
                  id
                  codcoche
                  nombre
                  modelo
                  imagen
                  Kilometros
                  Ano
                  descripcion
                  Combustible
                  Precio
              }
            }
          
        }`
      ,
      () => ({
        codcoche: props.codcoche,
      })
    );
    console.log(result);
    return {
      result,
    };
  },
};
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

nav {
  padding-right: 70px;
}
nav .mascar {
  border :  1px solid rgba(233, 35, 35, 0.933);
  border-radius: 7px ;
  background:  rgba(233, 35, 35, 0.933);
 padding-left: 20px;
 padding-right: 20px;
  -moz-opacity:.50;opacity:.90;
}


nav a {
  display: inline-block;
  outline: none;
  text-decoration: none;
  opacity: .8;
  padding: 0 100px;
  color: white;
  transition: opacity .2s ease-in-out;
}
nav a:hover,
nav a:focus {
  opacity: 15;
}


section {
  width: 100%;
  height: 80vh;
/*	background:  url('https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/bmw-individual-m6-modelle/bmw-individual-m6-modelle-m-xl.jpg.asset.1492532730547.jpg');*/
  background-size: 100%;
  background-position: 0;
}
/*
section span {
	color: white;
  margin: 0;
  font-size: 400%;
  text-align: left;
  line-height: 1;
  padding-top: calc(50vh - 50pt);
  padding-left: 80PX;
  display: block;
  font-weight: 700;
}
*/
header {
   background: black;
   filter:alpha(opacity=70);
  -moz-opacity:.80;opacity:.80;
  width: 100%;
  padding: 1em;
  font-size: 140%;
  position: absolute;
  /*top: 100vh;*/
  left: 0;
  transition: opacity .2s ease-in-out;
  text-align: center;
}
header h1 {
  color: white;
  font-weight: 600px;
  display: inline;
  margin: 0;
  padding: 100px;
  font-size: inherit;
}




@media (min-width: 500px) {
  header {
    text-align: left;
  }
  nav {
    float: right;
  }
 
}


/* And here's the magic! EQCSS.js required */

@element html, body and (min-scroll-y: 100vh) {
  header {
    position: fixed;
    top: 0;
    background: white;
    box-shadow: rgba(0,0,0,.05) 0 3px 15px;
  }
}

</style >


