using CurtinhasBackEnd.Contexto;
using CurtinhasBackEnd2.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

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
        public Usuario LogarUsuario(Usuario usuario)
        {
            return _context.Usuarios.SingleOrDefault(u => (u.Login == usuario.Login || u.Email == usuario.Login) && u.Senha == usuario.Senha); ;
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
