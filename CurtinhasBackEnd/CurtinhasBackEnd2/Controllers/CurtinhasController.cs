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
            return curtinhas.OrderByDescending(c => c.Id).ToList();
        }

        [HttpGet]
        public Curtinha ListaUmaCurtinha(int id)
        {
            return _context.Curtinhas.Find(id);
        }
        #endregion

        #region POST METHODS
        [HttpPost]
        public void AdicionarCurtinha(Curtinha curtinha)
        {
            Curtinha novaCurtinha = new Curtinha()
            {
                Titulo = curtinha.Titulo,
                Resumo = curtinha.Resumo,
                Link = curtinha.Link
            };

            _context.Curtinhas.Add(novaCurtinha);
            _context.SaveChanges();
        }

        [HttpPost]
        public void Editar(Curtinha curtinhaEditada)
        {
            var curtinhaAtual = _context.Curtinhas.SingleOrDefault(c => c.Id == curtinhaEditada.Id);
            if(curtinhaAtual != null)
            {
                curtinhaAtual.Titulo = curtinhaEditada.Titulo;
                curtinhaAtual.Resumo = curtinhaEditada.Resumo;
                curtinhaAtual.Link = curtinhaEditada.Link;

                _context.SaveChanges();
            }
        }

        [HttpPost]
        public void Excluir(long Id)
        {
            var curtinha = _context.Curtinhas.SingleOrDefault(c => c.Id == Id);
            if (curtinha != null)
            {
                _context.Curtinhas.Remove(curtinha);
                _context.SaveChanges();
            }
        }
        #endregion
    }
}