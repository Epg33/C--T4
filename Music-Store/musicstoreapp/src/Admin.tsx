import React, { useEffect } from "react";
import axios from "axios";

const Admin = () => {
  useEffect(():void =>{
    axios.get('http://www.musicstoreapii.somee.com/api/empleado').then(res=>console.log(res))
  })
  return (
    <>
      <main className="bg-gradient-to-r from-sky-400 to-blue-500 w-screen h-screen flex justify-center items-center">
        <table className="w-[93%] h-4/5 flex flex-col items-centers bg-gray-50 rounded-3xl shadow-xl">
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
          <tbody className="w-full h-[8%] flex justify-center pt-2 rounded-t-3xl pl-0">
            <tr className="flex flex-row gap-4 w-full justify-around px-5">
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
              <td className="w-20 text-slate-700 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap">contenido prueba</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Admin;
