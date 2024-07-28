import React from 'react'

export const Prueba1 = () => {
  
    function calcularAreaCuadrado(lado: number): number {
        return lado * lado;
    }
    
    
    const lado: number = 5;
    
    
    

    return (
    <div>
        <h3 className='text-center'>Ejercicio 1</h3>
        <p>Crear una función con parámetros que permita calcular el área de un cuadrado.</p>
        <p>El area del cuadrado es: {calcularAreaCuadrado(5)}</p>
    </div>
  )
}
