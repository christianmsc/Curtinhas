namespace CurtinhasBackEnd.Migrations
{
    using System;
    using CurtinhasBackEnd.Models;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Models.Entidades;

    internal sealed class Configuration : DbMigrationsConfiguration<CurtinhaContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CurtinhaContext context)
        {
            if (!context.Set<Curtinha>().Any())
            {
                context.Set<Curtinha>().Add(new Curtinha() { Titulo = "Consegui", Resumo = "Aewwwwwww", Link = "http://consegui.com"});
                
                context.SaveChanges();
            }
        }
    }
}
