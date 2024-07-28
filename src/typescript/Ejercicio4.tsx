import React from 'react'

export const Ejercicio4 = () => {
  
  
    interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
    }

    
const alumnos: Alumno[] = [
    {
        name: 'Viviana',
        edad: 19,
        calificacion: 10,
    },
    {
        name: 'Wendy',
        edad: 20,
        calificacion: 8,
    },
    {
        name: 'Gerson',
        edad: 18,
        calificacion: 9,
    }
];

function calcularPromedioCalificaciones(alumnos: Alumno[]): number {
    const totalCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
    return totalCalificaciones / alumnos.length;
}


const promedio: number = calcularPromedioCalificaciones(alumnos);



    return (
    <div>
        <h3 className='text-center'>Ejercicio4</h3>
        <p>Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y
        calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.</p>
        <p>El promedio de las calificaciones es: {promedio}</p>
    </div>
  
)
}
