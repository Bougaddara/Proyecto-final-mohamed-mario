<template>
  
  <div class="navigacion">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"  >


      <ul>
         <a href="default.html"><span class="material-icons-outlined"> location_on </span>huercal-overa </a> 
         <a href="contact.asp"> <span class="material-icons-outlined"> phone_iphone </span> 641 121 569</a>
         <a href="about.asp"  > <span class="material-icons-outlined">insert_invitation </span> Mon-Fri 09.00 - 17.00</a>
     
      </ul>
  </div> 
</template>


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

div {
  background: black;
  width: 100%;
  padding: 5px;
  font-size: 140%;
  top: 100vh;
  left: 0;
  transition: opacity .2s ease-in-out;
}
div ul {
  
  width: 100%;
  color: white;
  margin: 0;
  padding: 0 10px;
  font-size: inherit;
}



div ul a {
  font-size: 15px;
  display: inline-block;
  text-decoration: none;
  margin: 10px ;
  opacity: .8;
  color: white;
  transition: opacity .2s ease-in-out;

}



div ul a:hover,
div ul a:focus {
  opacity: 1;
}

div ul a span {
  
  padding-right: 1px;
  font-size: inherit;


  color:  rgb(7, 240, 228) ;
} 




</style>