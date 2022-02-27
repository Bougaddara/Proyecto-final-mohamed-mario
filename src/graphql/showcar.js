
import gql from 'graphql-tag'


export const showcar = gql`
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