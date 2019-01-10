using CurtinhasBackEnd.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CurtinhasBackEnd.Models
{
    public class CurtinhaContext : DbContext
    {
        public DbSet<Curtinha> Curtinhas { get; set; }

        public CurtinhaContext()
        {
            DropCreateDatabaseIfModelChanges<CurtinhaContext> initializer =
            new DropCreateDatabaseIfModelChanges<CurtinhaContext>();
            Database.SetInitializer<CurtinhaContext>(initializer);
        }
    }
}