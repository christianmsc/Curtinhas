using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CurtinhasBackEnd.Models.Entidades
{
    public class Curtinha
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Resumo { get; set; }
        public string Link { get; set; }
    }
}