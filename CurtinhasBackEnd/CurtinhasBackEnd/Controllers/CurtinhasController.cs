using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using CurtinhasBackEnd.Models;
using CurtinhasBackEnd.Models.Entidades;

namespace CurtinhasBackEnd.Controllers
{
    public class CurtinhasController : Controller
    {
        private CurtinhaContext db = new CurtinhaContext();

        // GET: Curtinhas
        public ActionResult Index()
        {
            return View(db.Curtinhas.ToList());
        }

        // GET: Curtinhas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Curtinha curtinha = db.Curtinhas.Find(id);
            if (curtinha == null)
            {
                return HttpNotFound();
            }
            return View(curtinha);
        }

        // GET: Curtinhas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Curtinhas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Titulo,Resumo,Link")] Curtinha curtinha)
        {
            if (ModelState.IsValid)
            {
                db.Curtinhas.Add(curtinha);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(curtinha);
        }

        // GET: Curtinhas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Curtinha curtinha = db.Curtinhas.Find(id);
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
                db.Entry(curtinha).State = EntityState.Modified;
                db.SaveChanges();
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
            Curtinha curtinha = db.Curtinhas.Find(id);
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
            Curtinha curtinha = db.Curtinhas.Find(id);
            db.Curtinhas.Remove(curtinha);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
