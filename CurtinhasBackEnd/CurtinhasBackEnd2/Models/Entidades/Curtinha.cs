using System;
using System.ComponentModel.DataAnnotations;

namespace CurtinhasBackEnd.Models.Entidades
{
    public class Curtinha
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Url da imagem é obrigatório")]
        public string UrlImagem { get; set; }

        [Required(ErrorMessage = "Título é obrigatório")]
        [StringLength(200, MinimumLength = 3, ErrorMessage = "Título deve ter entre 3 e 200 caracteres!")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "Resumo é obrigatório")]
        [StringLength(500, MinimumLength = 3, ErrorMessage = "Resumo deve ter entre 3 e 500 caracteres!")]
        public string Resumo { get; set; }

        public string Detalhes { get; set; }

        public DateTime DataPublicacao { get; set; }

        public DateTime DataEdicao { get; set; }

        [Required(ErrorMessage = "Link é obrigatório")]
        public string Link { get; set; }
    }
}