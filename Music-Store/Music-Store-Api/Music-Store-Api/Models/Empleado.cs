using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Music_Store_Api.Models
{
    public class Empleado
    {
		public string id_empleado { get => id_empleado; set => id_empleado = value; }
		public string nombre_empleado { get => nombre_empleado; set => nombre_empleado = value; }
        public string ocupacion { get => ocupacion; set => ocupacion = value; }
        public string horario_llegada { get => horario_llegada; set => horario_llegada = value; }
        public string horario_salida { get => horario_salida; set => horario_salida = value; }
        public int costo_guitarra { get => costo_guitarra; set => costo_guitarra = value; }
        public int costo_piano { get => costo_piano; set => costo_piano = value; }
        public int costo_bateria { get => costo_bateria; set => costo_bateria = value; }
        public float salario_empleado { get => salario_empleado; set => salario_empleado = value; }
        public int compradores_atendidos { get => compradores_atendidos; set => compradores_atendidos = value; }
        public string fecha_contratacion { get => fecha_contratacion; set => fecha_contratacion = value; }
    }
}