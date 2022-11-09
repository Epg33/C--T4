import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

function CreateEmp() {
  const $ = (prop:any) => {return prop.current.value} 

  const makeRequest = (e:any):void => {
    e.preventDefault();
    if($(Nombre).length <3){
      alert('Nombre debe tener al menos 3 caracteres')
    }
    else if($(Ocupacion).length <4){
      alert('Ocupacion debe tener al menos 4 caracteres')
    }
    else if($(Llegada)===''){
      alert('Hora de llegada requerida')
    }
    else if($(Salida)===''){
      alert('Hora de salida requerida')
    }
    else if($(Guitarra)<1){
      alert('Ingrese un valor mayor que cero para la guitarra')
    }
    else if($(Piano)<1){
      alert('Ingrese un valor mayor que cero para el piano')
    }
    else if($(Bateria)<1){
      alert('Ingrese un valor mayor que cero para la bateria')
    }
    else if (Salario.current.value<1){
      alert('Ingrese un valor mayor que cero para el salario')
    }
    else if(Atencion.current.value<1){
      alert('Ingrese un valor mayor o igual a cero para los clientes atendidos')
    }
    else if($(Contratacion)===''){
      alert('La fecha debe tener dia,mes y año')
    }
    else{
      request()
    }
    
  }
  const Nombre:any = useRef();
  const Ocupacion:any = useRef();
  const Llegada:any = useRef();
  const Salida:any = useRef();
  const Guitarra:any = useRef();
  const Piano:any = useRef();
  const Bateria:any = useRef(); 
  const Salario:any = useRef();
  const Atencion:any = useRef();
  const Contratacion:any = useRef();

  const request = ():void =>{
    axios.post('http://www.musicstoreapii.somee.com/api/empleado', 
    {
      nombre_empleado : Nombre.current.value,
      ocupacion : Ocupacion.current.value,
      horario_llegada : Llegada.current.value,
      horario_salida : Salida.current.value,
      costo_guitarra : Guitarra.current.value,
      costo_piano : Piano.current.value,
      costo_bateria : Bateria.current.value,
      salario_empleado : Salario.current.value,
      compradores_atendidos: Number(Atencion.current.value),
      fecha_contratacion : Contratacion.current.value
      }   
    )
      .then(res => console.log(res))
      .then(()=>{
        alert('Empleado creado exitosamente');
        location.reload()})
      .catch(err=> console.log(err))
  }

  return (
    <>
      <header>
        <h2 className="w-full text-center text-4xl">Registrar Empleados</h2>
      </header>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <main className="mx-auto max-w-lg">
          <form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">

            <div>
              <label  className="text-sm font-medium"> Nombre </label>
              <div className="relative mt-1">
                <input type="text" minLength={3} className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Nombre} required placeholder="Ingrese Nombre" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Ocupacion </label>
              <div className="relative mt-1">
                <input type="text"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Ocupacion} required placeholder="Ingrese Ocupacion" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Llegada </label>
              <div className="relative mt-1">
                <input type="time"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Llegada} required placeholder="Ingrese Hora de llegada" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Salida </label>
              <div className="relative mt-1">
                <input type="time"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Salida} required placeholder="Ingrese Hora de salida" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Guitarra </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Guitarra} required placeholder="Ingrese Costo de la guitarra" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Piano </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Piano} required placeholder="Ingrese Costo del piano" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Bateria </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Bateria} required placeholder="Ingrese Costo de la bateria" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Salario </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Salario} required placeholder="Ingrese el Salario" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Atencion </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Atencion} required placeholder="Ingrese Compradores Atendidos" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Contratacion </label>
              <div className="relative mt-1">
                <input type="date"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Contratacion} required placeholder="Ingrese Ingrese fecha de contratacion" />
              </div>
            </div>

            <button type="submit" onClick={makeRequest} className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" > Sign in </button>
          </form>
        </main>
      </div>
    </>


  );
}

export default CreateEmp;
