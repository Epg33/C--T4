using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Music_Store_Api.Models;
using System.Data.SqlClient;

namespace Music_Store_Api.Data
{
    public class EmpleadoData
    {
        public static bool registrarEmpleado(Empleado empleado)
        {
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE USP_registrar '"+empleado.id_empleado+"' , '"+
                empleado.nombre_empleado+ "','"+empleado.ocupacion+"', '"+
                empleado.horario_llegada+"', '"+empleado.horario_salida+"', '"+
                empleado.costo_guitarra+"', '"+empleado.costo_piano+"', '"+
                empleado.costo_bateria+"' ,  '"+empleado.salario_empleado+"', '"+
                empleado.compradores_atendidos+"', '"+empleado.fecha_contratacion+"'";
            if (!objEst.EjecutarSentencia(sentencia, false))
            {
                objEst = null;
                return false;
            }
            else
            {
                objEst = null;
                return true;
            }
        }

    }
}