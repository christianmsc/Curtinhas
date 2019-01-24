using CurtinhasBackEnd.Models.Entidades;
using CurtinhasBackEnd2.Models.Entidades;
using System.Data.Entity;


namespace CurtinhasBackEnd.Contexto
{
    public class CurtinhaContext: DbContext
    {
        public DbSet<Curtinha> Curtinhas { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }

        public CurtinhaContext() : base("CurtinhasDB")
        {
            DropCreateDatabaseIfModelChanges<CurtinhaContext> initializer =
            new DropCreateDatabaseIfModelChanges<CurtinhaContext>();
            Database.SetInitializer<CurtinhaContext>(initializer);
        }
    }
}