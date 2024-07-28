import React from 'react'

export const Ejercicio3 = () => {
  
    
const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


function dividirPorCinco(arreglo: number[]): number[] {
    return arreglo.map(numero => numero / 5);
}


const resultado: number[] = dividirPorCinco(arreglo);


  
    return (
    <div>
        <h3 className='text-center'>Ejercicio3</h3>
        <p>Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
        const arreglo = [5,10,15,20,25,30,35,40,45,50]
        Recomendación emplear función map.</p>
        <p>Los resultados son: {resultado}</p>
    </div>
  )
}
