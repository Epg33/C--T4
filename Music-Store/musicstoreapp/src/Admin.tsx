import React, { useEffect } from "react";
import axios from "axios";

const Admin = () => {
  return (
    <>
      <main className="bg-gradient-to-r from-sky-400 to-blue-500 w-screen h-screen">
        <table className="w-full h-full flex flex-col">
          
          <tr className="flex flex-row gap-4">
            <td className="w-22">ID</td>
            <td className="w-22">Nombre</td>
            <td className="w-22">Ocupacion</td>
            <td className="w-22">Llegada</td>
            <td className="w-22">Salida</td>
            <td className="w-22">Guitarras</td>
            <td className="w-22">Piano</td>
            <td className="w-22">Bateria</td>
            <td className="w-22">Salario</td>
            <td className="w-22">Atendidos</td>
            <td className="w-22">Fecha Contratacion</td>
          </tr>
        </table>
      </main>
    </>
  );
};

export default Admin;
