import React, { useEffect } from "react";
import axios from "axios";

const Admin = () => {
  return (
    <>
      <main className="bg-gradient-to-r from-sky-400 to-blue-500 w-screen h-screen">
        <table className="w-full h-full flex flex-col">
          
          <tr className="flex flex-row gap-4">
            <td className="w-12">ID</td>
            <td className="w-12">Nombre</td>
            <td className="w-12">Ocupacion</td>
            <td className="w-12">Llegada</td>
            <td className="w-12">Salida</td>
            <td className="w-12">Guitarras</td>
            <td className="w-12">Piano</td>
            <td className="w-12">Bateria</td>
            <td className="w-12">Salario</td>
            <td className="w-12">Atendidos</td>
            <td className="w-12">Fecha Contratacion</td>
          </tr>
          <tr className="flex flex-row gap-4">
            <td className="w-12">3213545</td>
            <td className="w-12">Ethiem</td>
            <td className="w-12">Dev</td>
            <td className="w-12">12:23:00</td>
            <td className="w-12">06:30:00</td>
            <td className="w-12">150000</td>
            <td className="w-12">180000</td>
            <td className="w-12">250000</td>
            <td className="w-12">200</td>
            <td className="w-12">12/05/15</td>
          </tr>
        </table>
      </main>
    </>
  );
};

export default Admin;
