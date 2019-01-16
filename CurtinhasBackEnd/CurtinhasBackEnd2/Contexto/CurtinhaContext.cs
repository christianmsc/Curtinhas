using CurtinhasBackEnd.Models.Entidades;
using System.Data.Entity;


namespace CurtinhasBackEnd.Contexto
{
    public class CurtinhaContext: DbContext
    {
        public DbSet<Curtinha> Curtinhas { get; set; }

        public CurtinhaContext() : base("CurtinhasDB")
        {
            DropCreateDatabaseIfModelChanges<CurtinhaContext> initializer =
            new DropCreateDatabaseIfModelChanges<CurtinhaContext>();
            Database.SetInitializer<CurtinhaContext>(initializer);
        }
    }
}