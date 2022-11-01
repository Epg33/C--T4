import React from "react";

function CreateEmp() {

  const makeRequest = (e:any):void => {
    e.preventDefault();
  }
  return (
    <>
      <header>
        <h2 className="w-full text-center text-4xl">Registrar Empleados</h2>
      </header>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <main className="mx-auto max-w-lg">
          <form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <p className="text-lg font-medium">Sign in to your account</p>

            <div>
              <label className="text-sm font-medium"> ID </label>
              <div className="relative mt-1">
                <input type="text" className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese ID" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Nombre </label>
              <div className="relative mt-1">
                <input type="text"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Nombre" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Ocupacion </label>
              <div className="relative mt-1">
                <input type="text"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Ocupacion" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Llegada </label>
              <div className="relative mt-1">
                <input type="time"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Hora de llegada" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Salida </label>
              <div className="relative mt-1">
                <input type="time"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Hora de salida" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Guitarra </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Costo de la guitarra" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Piano </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Costo del piano" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Bateria </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Costo de la bateria" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Salario </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese el Salario" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Atencion </label>
              <div className="relative mt-1">
                <input type="number"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Compradores Atendidos" />
              </div>
            </div>

            <div>
              <label  className="text-sm font-medium"> Contratacion </label>
              <div className="relative mt-1">
                <input type="date"  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Ingrese Ingrese fecha de contratacion" />
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
