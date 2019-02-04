using CurtinhasBackEnd.Contexto;
using CurtinhasBackEnd.Models.Entidades;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Xml;

namespace CurtinhasBackEnd
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private CurtinhaContext _context = new CurtinhaContext();

        private void atualizarCurtinhas()
        {
            if (_context.Curtinhas.ToList().Count > 0)
            {
                IList<Curtinha> curtinhasUol = GetNoticiasUol();
                var noticiasLinks = _context.Curtinhas.Select(x => x.Link);
                foreach (Curtinha curtinhaUol in curtinhasUol)
                {
                    if (!noticiasLinks.Any(link => string.Compare(link, curtinhaUol.Link) == 0))
                    {
                        _context.Curtinhas.Add(curtinhaUol);
                        _context.SaveChanges();
                    }
                }
            }
            else
            {
                IList<Curtinha> curtinhasUol = GetNoticiasUol();
                _context.Curtinhas.AddRange(curtinhasUol);
                _context.SaveChanges();
            }
            verificarQtdCurtinhas();
        }

        private void verificarQtdCurtinhas()
        {
            if (_context.Curtinhas.ToList().Count > 15)
            {
                List<Curtinha> noticiasAntigas = _context.Curtinhas.ToList()
                    .OrderByDescending(c => c.DataPublicacao).ToList()
                    .GetRange(15, _context.Curtinhas.ToList().Count - 15)
                    .ToList();

                foreach (Curtinha noticia in noticiasAntigas)
                {
                    _context.Curtinhas.Remove(noticia);
                    _context.SaveChanges();
                }
            }
        }

        private IList<Curtinha> GetNoticiasUol()
        {
            IList<Curtinha> noticiasUol = new List<Curtinha>();

            var client = new RestClient("https://rss.home.uol.com.br/index.xml");

            var request = new RestRequest(Method.GET)
            {
                RequestFormat = DataFormat.Xml,
                XmlSerializer = new RestSharp.Serializers.DotNetXmlSerializer()
            };

            IRestResponse response = client.Execute(request);

            if (response.IsSuccessful)
            {
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(response.Content);

                XmlNodeList noticias = doc.DocumentElement.SelectNodes("/rss/channel/item");

                foreach (XmlNode noticia in noticias)
                {
                    XmlNodeList atributosNoticia = noticia.ChildNodes;
                    Curtinha curtinha = new Curtinha();

                    foreach (XmlNode atributo in atributosNoticia)
                    {
                        switch (atributo.Name)
                        {
                            case "title":
                                string[] titulo = atributo.InnerText.Split('|');
                                curtinha.Titulo = "(" + titulo[0].Trim() + ") " + titulo[1].Trim();
                                break;

                            case "description":
                                curtinha.Resumo = atributo.InnerText;
                                break;

                            case "link":
                                curtinha.Link = atributo.InnerText;
                                break;

                            case "media:content":
                                curtinha.UrlImagem = "https" + atributo.Attributes["url"].Value.Substring(4);
                                break;

                            case "pubDate":
                                curtinha.DataPublicacao = DateTime.ParseExact(atributo.InnerText.Substring(0, atributo.InnerText.Length - 6), "ddd, dd MMM yyyy H:mm:ss", CultureInfo.InvariantCulture);
                                curtinha.DataEdicao = DateTime.Now;
                                break;
                        }

                    }

                    noticiasUol.Add(curtinha);

                }
            }

            return noticiasUol;
        }

        private void AtualizarNoticiasThread()
        {
            var startTime = DateTime.UtcNow;

            for (; ; )
            {
                if (DateTime.UtcNow - startTime < TimeSpan.FromMinutes(1))
                {
                    atualizarCurtinhas();
                    startTime = DateTime.UtcNow;
                }
            }
        }


        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Thread t = new Thread(AtualizarNoticiasThread);
            t.Start();

            

        }
    }
}
