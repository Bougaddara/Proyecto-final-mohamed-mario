<template>
<div class="oferta">


<div class="header">
	<header>
  		<h1>EMVcoches</h1>
 		 <nav>
            <router-link to="/">Home</router-link>
  		</nav>
	</header>
</div>

  <div class="sle">
  <form class="row g-0 " >
        <label for="inputState" class="form-label">MARCA</label>
        <select id="inputState" class="form-select">
        <option selected>marca</option>
               <option>BMW</option>
               <option>Seat</option>
               <option>Audi</option>

        </select>
         <label for="inputState" class="form-label">MARCA</label>
        <select id="inputState" class="form-select">
        <option selected>marca</option>
               <option>BMW</option>
               <option>Seat</option>
               <option>Audi</option>

        </select>
         <label for="inputState" class="form-label">MARCA</label>
        <select id="inputState" class="form-select">
        <option selected>marca</option>
               <option>BMW</option>
               <option>Seat</option>
               <option>Audi</option>

        </select>
         <label for="inputState" class="form-label">MARCA</label>
        <select id="inputState" class="form-select">
        <option selected>marca</option>
               <option>BMW</option>
               <option>Seat</option>
               <option>Audi</option>

        </select>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Publicar</button>
          </div>
  </form>
  </div> 
</div>
</template>

<style scoped>
 .head{
background: url('https://res.cloudinary.com/dag3rmkxg/f_auto/blog/2020/08/joven-volante.jpg');}

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


header {
   background: black;
   filter:alpha(opacity=70);
  -moz-opacity:.70;opacity:.70;
  width: 100%;
  padding: 1em;
  font-size: 140%;
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

nav a {
  display: inline-block;
  outline: none;
  text-decoration: none;
  opacity: .7;
  padding: 0 100px;
  color: white;
  transition: opacity .2s ease-in-out;
}
nav a:hover,
nav a:focus {
  opacity: 1;
}

/*********************/ 
div .sle {
    margin: 5px;
    float: left;
    width: 32%;
   

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