namespace CurtinhasBackEnd2.Migrations
{
    using CurtinhasBackEnd.Contexto;
    using CurtinhasBackEnd.Models.Entidades;
    using CurtinhasBackEnd2.Models.Entidades;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CurtinhaContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(CurtinhaContext context)
        {
            if (!context.Curtinhas.Any())
            {
                context.Curtinhas.Add(new Curtinha()
                {
                    UrlImagem = "https://imagens.canaltech.com.br/216788.444200-News.jpg",
                    Titulo = "Facebook anuncia investimento de US$ 300 milhões em canais locais",
                    Resumo = "Não é a primeira vez que a rede social faz isso, porém, no passado, seu envolvimento com o investimento em notícias era voltado a grandes empresas.",
                    Detalhes = "O Facebook novamente busca plataformas de publicação de conteúdo noticioso, anunciando um investimento de aproximadamente US$ 300 milhões pelos próximos três anos, voltado a redes jornalísticas locais. Não é a primeira vez que a rede social faz isso, porém, no passado, seu envolvimento com o investimento em notícias era voltado a grandes publishers, como CNN e Fox News.",
                    DataPublicacao = DateTime.Now,
                    DataEdicao = DateTime.Now,
                    Link = "https://canaltech.com.br/negocios/facebook-anuncia-investimento-de-us-300-milhoes-em-canais-locais-de-noticias-130813/"
                }
                );

                context.Curtinhas.Add(new Curtinha()
                {
                    UrlImagem = "https://conteudo.imguol.com.br/c/noticias/a4/2019/01/15/15jan2019---o-presidente-jair-bolsonaro-assina-decreto-que-modifica-a-regulamentacao-para-posse-de-arma-de-fogo-no-brasil-1547563026404_v2_900x506.jpg",
                    Titulo = "Decreto de Bolsonaro frustra defensores de acesso a armas",
                    Resumo = "O decreto do presidente Jair Bolsonaro (PSL) que facilitou a posse de armas de fogo, assinado na terça-feira (15), decepcionou.",
                    Detalhes = "O decreto do presidente Jair Bolsonaro (PSL) que facilitou a posse de armas de fogo, assinado na terça-feira (15), decepcionou representantes de organizações que defendem a expansão do direito de ter uma arma. Para eles, os critérios da nova legislação ainda são restritivos.",
                    DataPublicacao = DateTime.Now,
                    DataEdicao = DateTime.Now,
                    Link = "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2019/01/16/decreto-de-bolsonaro-frustra-defensores-de-acesso-a-armas-industria-aprova.htm"
                }
                );

                context.Curtinhas.Add(new Curtinha()
                {
                    UrlImagem = "https://noticiasdatv.uol.com.br/media/_versions/bbb19-fabio-alano-expulso-big-brother-brasil-reproducao-globo_fixed_large.jpg",
                    Titulo = "Enquete: Você achou justa a eliminação de Fábio Alano do BBB19?",
                    Resumo = "Você achou que a emissora tomou a decisão correta no caso de Fábio Alano? Participe da enquete do Notícias da TV.",
                    Detalhes = "Fábio Alano foi eliminado do Big Brother Brasil 19 antes mesmo de entrar na casa. O participante descumpriu uma norma do contrato, que proíbe patrocínio de marcas, e teve a sua exclusão do reality show definida pela Globo no sábado.",
                    DataPublicacao = DateTime.Now,
                    DataEdicao = DateTime.Now,
                    Link = "https://noticiasdatv.uol.com.br/noticia/bbb/enquete-voce-achou-justa-eliminacao-de-fabio-alano-do-bbb19-24341"
                }
                );

                context.SaveChanges();
            }

            if (!context.Usuarios.Any())
            {
                context.Usuarios.Add(new Usuario()
                {
                    Nome = "Christian",
                    Email = "christian@gmail.com",
                    Login = "admin",
                    Senha = "123123"
                }
                );

                context.SaveChanges();
            }
        }
    }
}
