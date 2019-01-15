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
            return curtinhas;
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
        #endregion
    }
}