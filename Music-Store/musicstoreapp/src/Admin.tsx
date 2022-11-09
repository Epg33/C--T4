import React, { useEffect, useState } from "react";
import {AiOutlineUserAdd} from "react-icons/ai" 
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const [table, setTable] = useState<JSX.Element[]>([])

  const tableContent = (prop:any[]) => {
    setTable(
      prop.map(emp => {
        return <tr className="flex flex-row w-full justify-around px-5" key={emp.id_empleado}>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.id_empleado}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.nombre_empleado}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.ocupacion}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.horario_llegada}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.horario_salida}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.costo_guitarra}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.costo_piano}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.costo_bateria}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/elmpleado/${emp.id_empleado}`}>{emp.salario_empleado}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.compradores_atendidos}</Link></td>
          <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap"><Link to={`/empleado/${emp.id_empleado}`}>{emp.fecha_contratacion}</Link></td>
        </tr>
      })
    )
  }

  useEffect(():void =>{
    axios.get('http://www.musicstoreapii.somee.com/api/empleado').then(res=>{tableContent(res.data); console.log(res)})
  }, [])
  return (
    <>
      <main className="bg-gradient-to-r from-sky-400 to-blue-500 w-screen h-screen flex flex-col justify-center items-center">
        <table className="w-[93%] h-4/5 flex flex-col items-centers bg-gray-50 rounded-3xl shadow-xl mb-14">
          <thead className="w-full h-[8%] flex pt-4 bg-slate-700 rounded-t-3xl">
          <tr className="flex flex-row w-full justify-around px-5">
            <td className="w-20 text-gray-50 text-sm font-bold ">ID</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Nombre</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Ocupacion</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Llegada</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Salida</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Guitarras</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Piano</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Bateria</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Salario</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Atendidos</td>
            <td className="w-20 text-gray-50 text-sm font-bold ">Contratacion</td>
          </tr>
          </thead>
          <tbody className="w-full h-[8%] flex flex-col items-center pt-2 rounded-t-3xl pl-0">
            {table}
          </tbody>
        </table>
        <NavLink to='/registro' className="grid place-content-center w-20 h-10 rounded-md bg-white transition-all duration-200 ease-linear hover:bg-yellow-200 hover:rounded-full hover:h-16 active:translate-y-2"><AiOutlineUserAdd className="text-3xl"/></NavLink>
      </main>
    </>

  );
};

export default Admin;
