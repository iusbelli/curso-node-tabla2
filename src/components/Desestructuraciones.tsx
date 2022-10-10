import React from 'react'

export const Desestructuraciones = () => {

  const carro = {
        color: 'rojo',
        modelo: 2020,
        placa: 'YBP304',
        plazas: 4,

        vanzar: () => console.log('Avanza'), 
        frenar: () => console.log('Frena') 

  }
const { color, modelo} = carro;
console.log(`Color: ${color}, Modelo: ${modelo}`);
  return (
    <div>Desestructuraciones</div>
  )
}
ra