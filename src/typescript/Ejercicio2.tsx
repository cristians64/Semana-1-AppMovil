import React from 'react'

export const Ejercicio2 = () => {
  
  
function sumarElementos(arreglo: number[]): number {
    let suma: number = 0;
    
    for (const numero of arreglo) {
        suma += numero;
    }
    
    return suma;
}

const arreglo: number[] = [1, 2, 3, 4, 5];
const resultado: number = sumarElementos(arreglo);


  
    return (
    <div>
        <h3 className='text-center'>Ejercicio 2</h3>
        <p>Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne
        la suma de los elementos del arreglo.</p>
        <p>La suma de los elementos del arreglo es: {resultado}</p>
    </div>
  )
}
