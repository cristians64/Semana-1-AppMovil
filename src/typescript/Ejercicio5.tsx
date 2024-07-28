import React from 'react'
import {useState} from "react"


export const Ejercicio5 = () => {
  
    const [valorContador, setValorContador]= useState<number>(0);


    const cambiarContador = (numero:number)=>{

        setValorContador(valorContador+numero)
    }
  
  
    return (
    <div>
        <h3 className='text-center'>Ejercicio5</h3>
        <p>Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del
        acumular y dos botones (incrementar - disminuir)</p>
        <p>Valor inicial: <span className='border p-2 bg-black text-white'>{valorContador}</span></p>
        
        <button className="btn btn-primary" onClick={()=>cambiarContador(-5)}>
            Disminuir 5-
        </button>

        <button className="btn btn-primary" onClick={()=>cambiarContador(5)}>
            Aumentar +5
        </button>
    </div>
  )
}
