using CurtinhasBackEnd.Models.Entidades;
using CurtinhasBackEnd.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;


namespace CurtinhasBackEnd.Controllers
{
    public class CurtinhasController : ApiController
    {
        private CurtinhaContext _context = new CurtinhaContext();


        #region GET METHODS
        [HttpGet]
        public IList<Curtinha> ListaTodasCurtinhas()
        {
            IList<Curtinha> curtinhas = _context.Curtinhas.AsQueryable().ToList();
            return curtinhas.OrderByDescending(c => c.DataPublicacao).ToList();
        }

        [HttpGet]
        public IList<Curtinha> ListaCincoCurtinhas()
        {
            return _context.Curtinhas.AsQueryable().OrderByDescending(c => c.DataPublicacao).ToList().Take(5).ToList();
        }

        [HttpGet]
        public Curtinha ListaUmaCurtinha(int id)
        {
            return _context.Curtinhas.Find(id);
        }
        #endregion

        #region POST METHODS
        [HttpPost]
        public IHttpActionResult AdicionarCurtinha(Curtinha curtinha)
        {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Curtinha novaCurtinha = new Curtinha()
                {
                    UrlImagem = curtinha.UrlImagem,
                    Titulo = curtinha.Titulo,
                    Resumo = curtinha.Resumo,
                    Detalhes = curtinha.Detalhes,
                    DataPublicacao = DateTime.Now,
                    DataEdicao = DateTime.Now,
                    Link = curtinha.Link
                };

                _context.Curtinhas.Add(novaCurtinha);
                _context.SaveChanges();
                return Ok(novaCurtinha);
        }

        [HttpPost]
        public IHttpActionResult Editar(Curtinha curtinhaEditada)
        {
            var curtinhaAtual = _context.Curtinhas.SingleOrDefault(c => c.Id == curtinhaEditada.Id);
            if (curtinhaAtual != null)
            {
                curtinhaAtual.UrlImagem = curtinhaEditada.UrlImagem;
                curtinhaAtual.Titulo = curtinhaEditada.Titulo;
                curtinhaAtual.Resumo = curtinhaEditada.Resumo;
                curtinhaAtual.Link = curtinhaEditada.Link;
                curtinhaAtual.Detalhes = curtinhaEditada.Detalhes;
                curtinhaAtual.DataEdicao = DateTime.Now;
                _context.SaveChanges();
                return Ok(curtinhaAtual);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IHttpActionResult Excluir(long Id)
        {
            var curtinha = _context.Curtinhas.SingleOrDefault(c => c.Id == Id);
            if (curtinha != null)
            {
                _context.Curtinhas.Remove(curtinha);
                _context.SaveChanges();
                return Ok(curtinha);
            }
            else
            {
                return NotFound();
            }
        }
        #endregion
    }
}