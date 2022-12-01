using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using asp_api.Modelos;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Data.SqlClient;
using System.Data;
using System.Text;


namespace asp_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutenticationController : ControllerBase
    {
        private readonly string secretKey;
        private readonly string cadenaSql;

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

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = claims,
                    Expires = DateTime.UtcNow.AddMinutes(5),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256Signature)
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenCongif = tokenHandler.CreateToken(tokenDescriptor);

                string tokenCreado = tokenHandler.WriteToken(tokenCongif); 
                
                return StatusCode(StatusCodes.Status200OK, new { token = tokenCreado });
            }
            else
            {
                return StatusCode(StatusCodes.Status401Unauthorized, new { token = "" });
            }
        }

        [HttpGet]
        [Route("Listar")]
        public IActionResult Listar()
        {
            List<Usuario> lista = new List<Usuario>();

            try
            {
                using (var conexion = new SqlConnection(cadenaSql))
                {
                    conexion.Open();
                    var cmd = new SqlCommand("USP_Listar_Usuarios", conexion);
                    cmd.CommandType = CommandType.StoredProcedure;
                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            lista.Add(new Usuario
                            {
                                idUsuario = Convert.ToInt32(reader["id_usuario"]),
                                correo = reader["correo"].ToString(),
                                clave = reader["clave"].ToString()
                            });
                        }
                    }
                    conexion.Close();

                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok", lista= lista });
            }
            catch(Exception error)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message });
            }
        }

        [HttpGet]
        [Route("Obtener/{idUsuario}")]
        public IActionResult Obtener(int idUsuario)
        {
            List<Usuario> lista = new List<Usuario>();
            Usuario user = new Usuario();

            try
            {
                using (var conexion = new SqlConnection(cadenaSql))
                {
                    conexion.Open();
                    var cmd = new SqlCommand("USP_Listar_Usuarios", conexion);
                    cmd.Parameters.AddWithValue("Id", idUsuario);
                    cmd.CommandType = CommandType.StoredProcedure;
                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            lista.Add(new Usuario
                            {
                                idUsuario = Convert.ToInt32(reader["id_usuario"]),
                                correo = reader["correo"].ToString(),
                                clave = reader["clave"].ToString()
                            });
                        }
                    }
                    conexion.Close();

                }
                user = lista.Where(item => item.idUsuario == idUsuario).FirstOrDefault();
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok", user = user });
            }
            catch (Exception error)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message });
            }
        }

        [HttpPost]
        [Route("Guardar")]
        public IActionResult Guardar([FromBody] Usuario usuario)
        {
            try
            {
                using (var conexion = new SqlConnection(cadenaSql))
                {
                    conexion.Open();
                    var cmd = new SqlCommand("USP_Insertar_Usuario", conexion);
                    cmd.Parameters.AddWithValue("correo", usuario.correo);
                    cmd.Parameters.AddWithValue("clave", usuario.clave);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.ExecuteNonQuery();
                    conexion.Close();
                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Agregado" });
            }
            catch (Exception error)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensake = error.Message });
            }
        }

        [HttpPut]
        [Route("Editar")]
        public IActionResult Editar([FromBody] Usuario usuario)
        {
            try
            {
                using (var conexion = new SqlConnection(cadenaSql))
                {
                    conexion.Open();
                    var cmd = new SqlCommand("USP_Actualizar_Usuario", conexion);
                    cmd.Parameters.AddWithValue("id_usuario", usuario.idUsuario == 0 ? DBNull.Value : usuario.idUsuario);
                    cmd.Parameters.AddWithValue("Correo", usuario.correo is null ? DBNull.Value : usuario.correo);
                    cmd.Parameters.AddWithValue("Clave", usuario.clave is null ? DBNull.Value : usuario.clave);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.ExecuteNonQuery();
                    conexion.Close();
                }

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Editado" });
            }
            catch (Exception error)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message });
            }
        }

        [HttpDelete]
        [Route("Eliminar/{id_usuario:int")]
        public IActionResult Eliminar (int idUsuario)
        {
            try
            {
                using (var conexion = new SqlConnection(cadenaSql))
                {
                    conexion.Open();
                    var cmd = new SqlCommand("USP_Eliminar_Usuario", conexion);
                    cmd.Parameters.AddWithValue("id_usuario", idUsuario);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.ExecuteNonQuery();
                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "eliminado" });
            }
            catch (Exception error)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message });
            }
        }
    }
}
