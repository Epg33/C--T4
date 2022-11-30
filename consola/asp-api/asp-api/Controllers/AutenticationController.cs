using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using asp_api.Modelos;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace asp_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutenticationController : ControllerBase
    {
        private readonly string secretKey;

        public AutenticationController(IConfiguration config)
        {
            secretKey = config.GetSection("settings").GetSection("secretKey").ToString();
        }

        [HttpPost]
        [Route("Validar")]
        public IActionResult Validar([FromBody] Usuario request)
        {
            if(request.correo == "adsi2022@sena.com" && request.clave == "1234")
            {
                var keyBytes = Encoding.ASCII.GetBytes(secretKey);
                var claims = new ClaimsIdentity();
                claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, request.correo));


            }
        }
    }
}
