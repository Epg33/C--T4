using Calcsns;

namespace TestCalculadora
{
    [TestClass]
    public class CalcTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            calculadora c1 = new calculadora();
            float iva = c1.calcularResultado(1500);
            Assert.AreEqual(285, iva);    
        }
    }
}