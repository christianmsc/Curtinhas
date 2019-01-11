using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
//using System.Web.Http;
using System.Web.Mvc;
using CurtinhasBackEnd.Models;
using CurtinhasBackEnd.Models.Entidades;
using System.Web.Script.Serialization;
using System;

namespace CurtinhasBackEnd.Controllers
{
    [Route("api/[Controller]")]
    public class CurtinhasController : Controller
    {
        private CurtinhaContext _context = new CurtinhaContext();

        [HttpGet]
        public Object ListaTodasCurtinhas()
        {
            var jsonSerialiser = new JavaScriptSerializer();
            var json = jsonSerialiser.Serialize(_context.Curtinhas.AsQueryable().ToList());
            return json;
            //return _context.Curtinhas.AsQueryable().ToList();
        }

        //[HttpGet]
        //public IList<Curtinha> ListaTodasCurtinhas()
        //{

        //    return _context.Curtinhas.AsQueryable().ToList();
        //}

        [HttpGet]
        public Curtinha Get(int id)
        {
            return _context.Curtinhas.Find(id);
        }


        [HttpPost]
        public void Create([Bind(Include = "Id,Titulo,Resumo,Link")] Curtinha curtinha)
        {
            if (ModelState.IsValid)
            {
                _context.Curtinhas.Add(curtinha);
                _context.SaveChanges();
            }
        }

        // GET: Curtinhas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Curtinha curtinha = _context.Curtinhas.Find(id);
            if (curtinha == null)
            {
                return HttpNotFound();
            }
            return View(curtinha);
        }

        // POST: Curtinhas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Titulo,Resumo,Link")] Curtinha curtinha)
        {
            if (ModelState.IsValid)
            {
                _context.Entry(curtinha).State = EntityState.Modified;
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(curtinha);
        }

        // GET: Curtinhas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Curtinha curtinha = _context.Curtinhas.Find(id);
            if (curtinha == null)
            {
                return HttpNotFound();
            }
            return View(curtinha);
        }

        // POST: Curtinhas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Curtinha curtinha = _context.Curtinhas.Find(id);
            _context.Curtinhas.Remove(curtinha);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
