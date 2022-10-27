using Music_Store_Api.Data;
using Music_Store_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Music_Store_Api.Controllers
{
    public class EmpleadoController : ApiController
    {
        // GET api/<controller>
        public List<Empleado> Get()
        {
            return EmpleadoData.Listar();
        }

        // GET api/<controller>/5
        public List<Empleado> Get(string id)
        {
            return EmpleadoData.Obtener(id);
        }

        // POST api/<controller>
        public List<Output> Post([FromBody] Empleado empleado)
        {
            return EmpleadoData.registrarEmpleado(empleado);
        }

        // PUT api/<controller>/5
        public bool Put([FromBody] Empleado empleado)
        {
            return EmpleadoData.actualizarEmpleado(empleado);
        }

        // DELETE api/<controller>/5
        public bool Delete(string id)
        {
            return EmpleadoData.eliminarEmpleado(id);
        }
    }
}