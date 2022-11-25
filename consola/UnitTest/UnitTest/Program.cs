using System;

namespace Calcsns
{
    public class calculadora
    {
        public float ObtenerIva(float valor)
        { 
            return valor = 0.19f;
        }

        public float calcularResultado(float num)
        {
            float iva = ObtenerIva(0);
            float result = num * iva;
            return result;
        }

        public static void Main(string[] args)
        {
            Console.WriteLine("Hola");
        }
    }
}
