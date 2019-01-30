using System.ComponentModel.DataAnnotations;

namespace CurtinhasBackEnd2.Models.Entidades
{
    public class Usuario
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Nome é obrigatório")]
        [StringLength(20, MinimumLength = 3, ErrorMessage = "Nome deve ter entre 3 e 20 caracteres!")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "E-mail é obrigatório")]
        [RegularExpression(".+\\@.+\\..+", ErrorMessage = "E-mail inválido!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Login é obrigatório")]
        [StringLength(10, MinimumLength = 3, ErrorMessage = "Login deve ter entre 3 e 10 caracteres!")]
        public string Login { get; set; }

        [Required(ErrorMessage = "Senha é obrigatória")]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "Senha deve ter entre 6 e 20 caracteres!")]
        public string Senha { get; set; }
    }
}