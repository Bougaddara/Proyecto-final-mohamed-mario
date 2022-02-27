import gql from 'graphql-tag'


export const carlist = gql`
query  carList  {
  carList {
    codcoche
    imagen
    nombre
    modelo
    Precio
    Kilometros
    Ano
    descripcion

  }
 
}`