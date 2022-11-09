import React, { useEffect, useState } from "react";
import {AiOutlineUserAdd} from "react-icons/ai" 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const [table, setTable] = useState<JSX.Element[]>([])
  const navigate = useNavigate();

  const tableContent = (prop:any[]) => {
    setTable(
      prop.map(emp => {
        return <tr onClick={():void=>navigate(`/empleado/${emp.id_empleado}`)} className="flex flex-row h-9 items-center w-full justify-around cursor-pointer px-5 transition-all duration-500 ease hover:bg-slate-500/70" key={emp.id_empleado}>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.id_empleado}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.nombre_empleado}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.ocupacion}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.horario_llegada}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.horario_salida}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.costo_guitarra}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.costo_piano}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.costo_bateria}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.salario_empleado}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.compradores_atendidos}</td>
          <td className="w-20 text-slate-100 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">{emp.fecha_contratacion}</td>
        </tr>
      })
    )
  }

  useEffect(():void =>{
    axios.get('http://www.musicstoreapii.somee.com/api/empleado').then(res=>{tableContent(res.data); console.log(res)})
  }, [])
  return (
    <>
      <main className="bg-gradient-to-r from-sky-400 to-blue-800 w-screen h-screen flex flex-col justify-center items-center">
      <table className="w-[93%] h-4/5 flex flex-col items-centers rounded-3xl shadow-xl mb-14">
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
          <tbody className="overflow-scroll shadow-2xl rounded-3xl w-full h-full flex flex-col items-center rounded-t-3xl">
            {table}
          </tbody>
        </table>
      <NavLink to='/registro' className="grid place-content-center w-16 h-10 rounded-md bg-white transition-all duration-200 ease-linear hover:bg-yellow-200 hover:rounded-full hover:h-16 hover:-mb-6 active:translate-y-2"><AiOutlineUserAdd className="text-3xl"/></NavLink>
      </main>
    </>

  );
};

export default Admin;
