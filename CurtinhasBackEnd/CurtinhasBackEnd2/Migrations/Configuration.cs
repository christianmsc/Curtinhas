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
                    Titulo = "Facebook anuncia investimento de US$ 300 milh�es em canais locais",
                    Resumo = "N�o � a primeira vez que a rede social faz isso, por�m, no passado, seu envolvimento com o investimento em not�cias era voltado a grandes empresas.",
                    Detalhes = "O Facebook novamente busca plataformas de publica��o de conte�do noticioso, anunciando um investimento de aproximadamente US$ 300 milh�es pelos pr�ximos tr�s anos, voltado a redes jornal�sticas locais. N�o � a primeira vez que a rede social faz isso, por�m, no passado, seu envolvimento com o investimento em not�cias era voltado a grandes publishers, como CNN e Fox News.",
                    DataPublicacao = DateTime.Now,
                    DataEdicao = DateTime.Now,
                    Link = "https://canaltech.com.br/negocios/facebook-anuncia-investimento-de-us-300-milhoes-em-canais-locais-de-noticias-130813/"
                }
                );

                context.Curtinhas.Add(new Curtinha()
                {
                    UrlImagem = "https://conteudo.imguol.com.br/c/noticias/a4/2019/01/15/15jan2019---o-presidente-jair-bolsonaro-assina-decreto-que-modifica-a-regulamentacao-para-posse-de-arma-de-fogo-no-brasil-1547563026404_v2_900x506.jpg",
                    Titulo = "Decreto de Bolsonaro frustra defensores de acesso a armas",
                    Resumo = "O decreto do presidente Jair Bolsonaro (PSL) que facilitou a posse de armas de fogo, assinado na ter�a-feira (15), decepcionou.",
                    Detalhes = "O decreto do presidente Jair Bolsonaro (PSL) que facilitou a posse de armas de fogo, assinado na ter�a-feira (15), decepcionou representantes de organiza��es que defendem a expans�o do direito de ter uma arma. Para eles, os crit�rios da nova legisla��o ainda s�o restritivos.",
                    DataPublicacao = DateTime.Now,
                    DataEdicao = DateTime.Now,
                    Link = "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2019/01/16/decreto-de-bolsonaro-frustra-defensores-de-acesso-a-armas-industria-aprova.htm"
                }
                );

                context.Curtinhas.Add(new Curtinha()
                {
                    UrlImagem = "https://noticiasdatv.uol.com.br/media/_versions/bbb19-fabio-alano-expulso-big-brother-brasil-reproducao-globo_fixed_large.jpg",
                    Titulo = "Enquete: Voc� achou justa a elimina��o de F�bio Alano do BBB19?",
                    Resumo = "Voc� achou que a emissora tomou a decis�o correta no caso de F�bio Alano? Participe da enquete do Not�cias da TV.",
                    Detalhes = "F�bio Alano foi eliminado do Big Brother Brasil 19 antes mesmo de entrar na casa. O participante descumpriu uma norma do contrato, que pro�be patroc�nio de marcas, e teve a sua exclus�o do reality show definida pela Globo no s�bado.",
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
