namespace CurtinhasBackEnd2.Migrations
{
    using CurtinhasBackEnd.Contexto;
    using CurtinhasBackEnd.Models.Entidades;
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
                    Titulo = "Facebook anuncia investimento de US$ 300 milh�es em canais locais",
                    Resumo = "N�o � a primeira vez que a rede social faz isso, por�m, no passado, seu envolvimento com o investimento em not�cias era voltado a grandes empresas.",
                    Link = "https://canaltech.com.br/negocios/facebook-anuncia-investimento-de-us-300-milhoes-em-canais-locais-de-noticias-130813/"
                }
                );

                context.Curtinhas.Add(new Curtinha()
                {
                    Titulo = "Decreto de Bolsonaro frustra defensores de acesso a armas",
                    Resumo = "O decreto do presidente Jair Bolsonaro (PSL) que facilitou a posse de armas de fogo, assinado na ter�a-feira (15), decepcionou.",
                    Link = "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2019/01/16/decreto-de-bolsonaro-frustra-defensores-de-acesso-a-armas-industria-aprova.htm"
                }
                );

                context.Curtinhas.Add(new Curtinha()
                {
                    Titulo = "Enquete: Voc� achou justa a elimina��o de F�bio Alano do BBB19?",
                    Resumo = "Voc� achou que a emissora tomou a decis�o correta no caso de F�bio Alano? Participe da enquete do Not�cias da TV.",
                    Link = "https://noticiasdatv.uol.com.br/noticia/bbb/enquete-voce-achou-justa-eliminacao-de-fabio-alano-do-bbb19-24341"
                }
                );

                context.SaveChanges();
            }
        }
    }
}
