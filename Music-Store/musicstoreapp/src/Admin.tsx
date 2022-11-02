import React, { useEffect } from "react";
import axios from "axios";

const Admin = () => {
  useEffect(():void =>{
    axios.get('http://www.musicapiapp.somee.com/api/empleado').then(res=>console.log(res))
  })
  return (
    <>
      <main className="bg-gradient-to-r from-sky-400 to-blue-500 w-screen h-screen flex justify-center items-center">
        <table className="w-4/5 h-4/5 flex flex-col items-centers bg-gray-50 rounded-3xl">
          <thead className="w-full h-[8%] flex justify-center pt-2 bg-slate-700 rounded-t-3xl">
          <tr className="flex flex-row gap-4 w-full justify-evenly">
            <td className="w-22 text-gray-50 font-bold">ID</td>
            <td className="w-22 text-gray-50 font-bold">Nombre</td>
            <td className="w-22 text-gray-50 font-bold">Ocupacion</td>
            <td className="w-22 text-gray-50 font-bold">Llegada</td>
            <td className="w-22 text-gray-50 font-bold">Salida</td>
            <td className="w-22 text-gray-50 font-bold">Guitarras</td>
            <td className="w-22 text-gray-50 font-bold">Piano</td>
            <td className="w-22 text-gray-50 font-bold">Bateria</td>
            <td className="w-22 text-gray-50 font-bold">Salario</td>
            <td className="w-22 text-gray-50 font-bold">Atendidos</td>
            <td className="w-22 text-gray-50 font-bold">Fecha Contratacion</td>
          </tr>
          </thead>
        </table>
      </main>
    </>
  );
};

export default Admin;
