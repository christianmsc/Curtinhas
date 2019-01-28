export class Curtinha {
  id: number;
  urlImagem: string;
  titulo: string;
  resumo: string;
  detalhes: string;
  dataPublicacao: Date;
  dataEdicao: Date;
  link: string;

  constructor(
              id: number,
              urlImagem: string,
              titulo: string,
              resumo: string,
              detalhes: string,
              dataPublicacao: Date,
              dataEdicao: Date,
              link: string) {

      this.id = id;
      this.urlImagem = urlImagem;
      this.titulo = titulo;
      this.resumo = resumo;
      this.detalhes = detalhes;
      this.dataPublicacao = dataPublicacao;
      this.dataEdicao = dataEdicao;
      this.link = link;
  }
}
