using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Music_Store_Api.Models
{
    public class Empleado
    {
		public string id_empleado { get; set; }
		public string nombre_empleado { get; set; }
        public string ocupacion { get; set; }
        public DateTimeKind horario_llegada { get; set; }
        public DateTimeKind horario_salida { get; set; }
        public int costo_guitarra { get; set; }
        public int costo_piano { get; set; }
        public int costo_bateria { get; set; }
        public float salario_empleado { get; set; }
        public int compradores_atendidos { get; set; }
        public DateTime fecha_contratacion { get; set; }
    }
}