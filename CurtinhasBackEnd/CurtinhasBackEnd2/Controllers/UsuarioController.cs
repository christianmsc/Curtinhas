using CurtinhasBackEnd.Contexto;
using CurtinhasBackEnd2.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace CurtinhasBackEnd2.Controllers
{
    public class UsuarioController : ApiController
    {
        private CurtinhaContext _context = new CurtinhaContext();


        #region GET METHODS
        [HttpGet]
        public IList<Usuario> BuscarUsuarios()
        {
            IList<Usuario> curtinhas = _context.Usuarios.AsQueryable().ToList();
            return curtinhas.OrderByDescending(c => c.Id).ToList();
        }

        [HttpGet]
        public Usuario BuscarUsuario(int id)
        {
            return _context.Usuarios.Find(id);
        }
        #endregion

        #region POST METHODS

        [HttpPost]
        public Object LogarUsuario(Usuario usuario)
        {
            var usuarioAutenticado = _context.Usuarios.SingleOrDefault(u => (u.Login == usuario.Login || u.Email == usuario.Login) && u.Senha == usuario.Senha);

            if (usuarioAutenticado != null)
            {

                // Define const Key this should be private secret key  stored in some safe place
                string key = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";

                // Create Security key  using private key above:
                // not that latest version of JWT using Microsoft namespace instead of System
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));

                // Also note that securityKey length should be >256b
                // so you have to make sure that your private key has a proper length
                //
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                //  Finally create a Token
                var header = new JwtHeader(credentials);

                //Some PayLoad that contain information about the  customer
                var payload = new JwtPayload
               {
                   { "nome", usuarioAutenticado.Nome},
                   { "email", usuarioAutenticado.Email},
               };

                //
                var secToken = new JwtSecurityToken(header, payload);
                var handler = new JwtSecurityTokenHandler
                {
                    SetDefaultTimesOnTokenCreation = true,
                    TokenLifetimeInMinutes = 10,


                };

                // Token to String so you can use it in your client
                var tokenString = handler.WriteToken(secToken);

                // And finally when  you received token from client
                // you can  either validate it or try to  read
                //var token = handler.ReadJwtToken(tokenString);

                // Seção no C#
                // HttpContext.Current.Session["Usuario"] = usuario;

                return tokenString;
            }

            return null;
        }

        [HttpPost]
        public IHttpActionResult AdicionarUsuario(Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Usuario novoUsuario = new Usuario()
            {
                Nome = usuario.Nome,
                Email = usuario.Email,
                Login = usuario.Login,
                Senha = usuario.Senha
            };

            _context.Usuarios.Add(novoUsuario);
            _context.SaveChanges();
            return Ok(novoUsuario);
        }

        [HttpPost]
        public void EditarUsuario(Usuario usuarioEditado)
        {
            var usuarioAtual = _context.Usuarios.SingleOrDefault(c => c.Id == usuarioEditado.Id);
            if (usuarioAtual != null)
            {
                usuarioAtual.Nome = usuarioEditado.Nome;
                usuarioAtual.Email = usuarioEditado.Email;
                usuarioAtual.Login = usuarioEditado.Login;
                usuarioAtual.Senha = usuarioEditado.Senha;

                _context.SaveChanges();
            }
        }

        [HttpPost]
        public void ExcluirUsuario(long Id)
        {
            var usuario = _context.Usuarios.SingleOrDefault(c => c.Id == Id);
            if (usuario != null)
            {
                _context.Usuarios.Remove(usuario);
                _context.SaveChanges();
            }
        }
        #endregion
    }
}
