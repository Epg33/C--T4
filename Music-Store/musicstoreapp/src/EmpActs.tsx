import React, {useRef} from 'react'
import {useParams} from 'react-router-dom'

function EmpActs() {
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

            <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" > Sign in </button>
          </form>
        </main>
      </div>
    </>
  )
}

export default EmpActs