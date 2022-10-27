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
        public static List<Output>  registrarEmpleado(Empleado empleado)
        {
            ConexionBD objEst = new ConexionBD();
            List<Output> output = new List<Output>();
            string sentencia;
            sentencia = "EXECUTE USP_registro '" + empleado.id_empleado + "' , '" +
                empleado.nombre_empleado + "','" + empleado.ocupacion + "', '" +
                empleado.horario_llegada + "', '" + empleado.horario_salida + "', '" +
                empleado.costo_guitarra + "', '" + empleado.costo_piano + "', '" +
                empleado.costo_bateria + "' ,  '" + empleado.salario_empleado + "', '" +
                empleado.compradores_atendidos + "', '" + empleado.fecha_contratacion + "'";
            if (!objEst.EjecutarSentencia(sentencia, false))
            {
                output.Add(new Output() { 
                    Error = true,
                    Message = objEst.Error
                });
                objEst = null;
                return output;
            }
            else
            {
                objEst = null;
                output.Add(new Output()
                {
                    Error = false,
                    Message = "Usuario creado correctamente"
                });
                return output;
            }
        }
        public static bool actualizarEmpleado(Empleado empleado)
        {
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE USP_actualizacion '" + empleado.id_empleado + "' , '" +
                empleado.nombre_empleado + "','" + empleado.ocupacion + "', '" +
                empleado.horario_llegada + "', '" + empleado.horario_salida + "', '" +
                empleado.costo_guitarra + "', '" + empleado.costo_piano + "', '" +
                empleado.costo_bateria + "' ,  '" + empleado.salario_empleado + "', '" +
                empleado.compradores_atendidos + "', '" + empleado.fecha_contratacion + "'";
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
        public static bool eliminarEmpleado(string id)
        {
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE USP_borrar '" + id + "'";
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
        public static List<Empleado> Listar()
        {
            List<Empleado> empleado = new List<Empleado>();
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE USP_listar";

            if (objEst.Consultar(sentencia, false))
            {
                SqlDataReader read = objEst.Reader;
                while (read.Read())
                {
                    empleado.Add(new Empleado()
                    {
                        id_empleado = read["id_empleado"].ToString(),
                        nombre_empleado = read["nombre_empleado"].ToString(),
                        ocupacion = read["ocupacion"].ToString(),
                        horario_llegada = read["horario_llegada"].ToString(),
                        horario_salida = read["horario_salida"].ToString(),
                        costo_guitarra = Convert.ToInt32(read["costo_guitarra"]),
                        costo_piano = Convert.ToInt32(read["costo_piano"]),
                        costo_bateria = Convert.ToInt32(read["costo_bateria"]),
                        salario_empleado = (float)Convert.ToDouble(read["salario_empleado"]),
                        compradores_atendidos = Convert.ToInt32(read["compradores_atendidos"]),
                        fecha_contratacion = read["fecha_contratacion"].ToString()
                    });
                }
                return empleado; 
            }
            else
            {
                return empleado;
            }
        }

        public static List<Empleado> Obtener(string id)
        {
            List<Empleado> empleado = new List<Empleado>();
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE USP_listarUno '" + id + "'";

            if (objEst.Consultar(sentencia, false))
            {
                SqlDataReader read = objEst.Reader;
                while (read.Read())
                {
                    empleado.Add(new Empleado()
                    {
                        id_empleado = read["id_empleado"].ToString(),
                        nombre_empleado = read["nombre_empleado"].ToString(),
                        ocupacion = read["ocupacion"].ToString(),
                        horario_llegada = read["horario_llegada"].ToString(),
                        horario_salida = read["horario_salida"].ToString(),
                        costo_guitarra = Convert.ToInt32(read["costo_guitarra"]),
                        costo_piano = Convert.ToInt32(read["costo_piano"]),
                        costo_bateria = Convert.ToInt32(read["costo_bateria"]),
                        salario_empleado = (float)Convert.ToDouble(read["salario_empleado"]),
                        compradores_atendidos = Convert.ToInt32(read["compradores_atendidos"]),
                        fecha_contratacion = read["fecha_contratacion"].ToString()
                    });
                }
                return empleado;
            }
            else
            {
                return empleado;
            }
        }
    }
}