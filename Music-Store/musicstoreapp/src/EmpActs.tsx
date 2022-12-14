import axios from 'axios';
import React, {useRef, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

function EmpActs() {
  const MySwal = withReactContent(Swal)
  const [form, setForm] = useState(<></>)
  const url = useParams();
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

  const $ = (prop:any) => {return prop.current.value};


  const confirm = (e:any) => {
    e.preventDefault(); 
    Swal.fire({
      title: 'Está seguro de eliminar el empleado?',
      text: "No se puede revertir esta opcion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si eliminar!'
    }).then((result:any) => {
      if (result.isConfirmed) {
      deleteEmp()
        Swal.fire(
          'Eliminado!',
          'El empleado ha sido eliminado.',
          'success'
        )
      }
    })

  }

  const deleteEmp = () => {
    axios.delete(`http://www.musicstoreapii.somee.com/api/empleado/${url.id}`,{
      data:
      {
        id_empleado: url.id
      }
    }).then(()=>{
     
    })
  }
  const handleRequest = ():void =>{
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
  }
    
  const updateEmp = (e:any):void => {
    e.preventDefault();
    axios.put(`http://www.musicstoreapii.somee.com/api/empleado/${url.id}`,{
      id_empleado: url.id,
      nombre_empleado : Nombre.current.value,
      ocupacion : Ocupacion.current.value,
      horario_llegada : Llegada.current.value,
      horario_salida : Salida.current.value,
      costo_guitarra : Guitarra.current.value,
      costo_piano : Piano.current.value,
      costo_bateria : Bateria.current.value,
      salario_empleado : Salario.current.value,
      compradores_atendidos: Atencion.current.value,
      fecha_contratacion : Contratacion.current.value
    }).then(res=>console.log(res)).then(()=>{
      alert('Actualizado correctamente')
    })
  
    }

  const formRender = (prop:any) => {
    setForm(
      <form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <div>
              <label  className="text-sm font-medium"> Nombre </label>
              <div className="relative mt-1">
                <input type="text" minLength={3} className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Nombre} required placeholder="Ingrese Nombre" defaultValue={prop.data[0].nombre_empleado}/>
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Ocupacion </label>
              <div className="relative mt-1">
                <input type="text"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Ocupacion} required placeholder="Ingrese Ocupacion" defaultValue={prop.data[0].ocupacion}/>
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Llegada </label>
              <div className="relative mt-1">
                <input type="time"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Llegada} required placeholder="Ingrese Hora de llegada" defaultValue={prop.data[0].horario_llegada}/>
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Salida </label>
              <div className="relative mt-1">
                <input type="time"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Salida} required placeholder="Ingrese Hora de salida" defaultValue={prop.data[0].horario_salida}/>
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Guitarra </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Guitarra} required placeholder="Ingrese Costo de la guitarra" defaultValue={prop.data[0].costo_guitarra}/>
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Piano </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Piano} required placeholder="Ingrese Costo del piano" defaultValue={prop.data[0].costo_piano}/>
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Bateria </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Bateria} required placeholder="Ingrese Costo de la bateria" defaultValue={prop.data[0].costo_bateria} />
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Salario </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Salario} required placeholder="Ingrese el Salario" defaultValue={prop.data[0].salario_empleado}/>
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Atencion </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Atencion} required placeholder="Ingrese Compradores Atendidos" defaultValue={prop.data[0].compradores_atendidos}/>
              </div>
            </div>
            <div>
              <label  className="text-sm font-medium"> Contratacion </label>
              <div className="relative mt-1">
                <input type="date"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm outline-none transition-all duration-300 focus:outline-gray-500 focus:outline-1" ref={Contratacion} required placeholder="Ingrese Ingrese fecha de contratacion" defaultValue={prop.data[0].fecha_contratacion}/>
              </div>
            </div>
            <div className='flex justify-around w-full gap-4'>
              <button type="submit" onClick={updateEmp} className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" >Actualizar</button>
              <button type="submit" onClick={confirm} className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white" >Borrar</button>
            </div>
          </form>
    )
  }

  useEffect(() => {
    axios.get(`http://www.musicstoreapii.somee.com/api/empleado/${url.id}`).then(res=>{formRender(res);console.log(res)}
    )
  }, [])
  

  return (
    <>
      <header>
        <h2 className="w-full text-center text-4xl">Actualizar Empleado</h2>
      </header>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <main className="mx-auto max-w-lg">
          {form}
        </main>
      </div>
    </>
  )
}

export default EmpActs