using System;

namespace CurtinhasBackEnd.Models.Entidades
{
    public class Curtinha
    {
        public int Id { get; set; }
        public string UrlImagem { get; set; }
        public string Titulo { get; set; }
        public string Resumo { get; set; }
        public string Detalhes { get; set; }
        public DateTime DataPublicacao { get; set; }
        public DateTime DataEdicao { get; set; }
        public string Link { get; set; }
    }
}