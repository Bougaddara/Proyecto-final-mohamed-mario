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
       <div class="namecar"> 
       <img :src="result.carId.data.imagen " alt="" >
       <div class="precio">{{result.carId.data.Precio}} €</div>
       </div> 

       <div class="nombre" >
        <h1> {{result.carId.data.nombre}} {{result.carId.data.modelo}}</h1>
       </div> 

        <div  >
         <nav class="fotos"><a href="">  <font-awesome-icon icon="home"/>  View Photos </a> </nav>
         <nav class="video"> <a href=""> Video Review </a> </nav>
        </div> 

        <div> 
        <h2>informacion de  coche  </h2>  
        </div>
         <div class="descripcion"  > 
           <h1>Descripcion</h1>
           <p>{{result.carId.data.descripcion}} </p>
        </div>
  	</section>


  </div> 

</template>



<script >

import Detalles from "@/components/Detalles";
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  name: "Detalles",
  components: {
    Detalles,
    
  },

  props: ["codcoche"],

  setup(props) {
    const { result } = useQuery(
      gql`
        query CarId($codcoche: ID!) {
                carId(codcoche: $codcoche) {
                    data {
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
/********************************************************************************** */

nav {
  padding-right: 70px;
}
nav .mascar {
  border :  1px solid rgba(233, 35, 35, 0.933);
  border-radius: 7px ;
  background:  rgba(233, 35, 35, 0.933);
 padding-left: 20px;
 padding-right: 20px;
  /* -moz-opacity:.50;opacity:.90; */
}


nav a {
  display: inline-block;
  outline: none;
  text-decoration: none;
  /* opacity: .8; */
  padding: 0 100px;
  color: white;
  /* transition: opacity .2s ease-in-out; */
}
 /* nav a:hover, 
nav a:focus {
  opacity: 15;
}  */




div.namecar img {
    width: 100%;
    height: 500px;
}



header {
    overflow: hidden;
    position: fixed;

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
/***************************************************************************************** */

section {
  width: 100%;
  height: 50vh;
  background-size: 100%;
  background-position: 0;
  /*top: 100vh;*/
 
}
div.precio {
  
  color: white;
  width: 400px ;
  height: 80px;
  font-size: 300%;
  border-radius: 15px  15px 0px 0px ;
  /* line-height: 1; */
  /* padding-top: calc( 10vh - 60pt); */
  font-weight: 700;
  position: absolute;
  top: 67vh;
  left: 60%;
  background: black;
  opacity:.85;  
}
 nav.fotos{
   color: white;
  width: 200px ;
  height: 45px;
  font-size: 20px;
  border-radius: 10px  10px 10px 10px ;
  /* line-height: 1; */
  /* padding-top: calc( 10vh - 60pt); */
  font-weight: 200;
  position: absolute;
  top: 71vh;
  left: 5%;
  background: black;
  font-size: inherit;
  padding: 0px;
} 

/* section nav{
     filter:alpha(opacity=20);
    -moz-opacity:.80;opacity:.30;

} */


 section nav.fotos a{
   color: white;
   width: 50% ;
   text-align: center;
   padding: 0px;
   margin-top: 10px;
}

nav.video{
   color: white;
  width: 200px ;
  height: 45px;
  font-size: 20px;
  border-radius: 10px  10px 10px 10px ;
  /* line-height: 1; */
  /* padding-top: calc( 10vh - 60pt); */
  font-weight: 200;
  position: absolute;
  top: 71vh;
  left: 23%;
  background: black;
  font-size: inherit;
  padding: 0px;
} 


 section nav.video a{
   color: white;
   width: 50% ;
   text-align: center;
   padding: 0px;
   margin-top: 10px;
}



/*********************************************************************************************** */
.nombre  {
 width: 100%;
  height: 100px;
}
div.nombre  h1 {
  margin-left:5% ;
  float: left;
	color: black;
  font-size: 400%;
  line-height: 1;
  padding-top: calc(13vh - 50pt);
  display: block;
  font-weight: 700;
}
/***********************************************************************/ 

.descripcion {
  
  width: 70% ;
  margin-left:5% ;
    text-align: left;



}
.descripcion p {
  color: black ;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;

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

/* @element html, body and (min-scroll-y: 100vh) {
  header {
    position: fixed;
    top: 0;
    background: white;
    box-shadow: rgba(0,0,0,.05) 0 3px 15px;
  }
} */

</style >