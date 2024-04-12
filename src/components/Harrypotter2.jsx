import Harry2 from "../assets/Harry2.jpg";

export default function Harrypotter() {
  return (
    <section>
      <h2 className="text-lg"> Harry Potter e a Camara Secreta</h2>
      <img src={Harry2} alt="harrypotter" />
      <a className="text-blue-300" href="https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets_(filme)#Nos_cinemas">
        Link to Wikipedia
      </a>
      <p className="font-semibold">
      Harry Potter and the Chamber of Secrets (no Brasil, Harry Potter e a Câmara Secreta; em Portugal, Harry Potter e a Câmara dos Segredos) é um filme de fantasia e aventura britânico-americano dirigido por Chris Columbus e distribuído pela Warner Bros. Pictures.[3] Ele é baseado no romance homônimo por J. K. Rowling. O longa, que é o segundo na franquia de filmes Harry Potter, foi escrito por Steve Kloves e produzido por David Heyman. A história se inicia com o segundo ano de Harry Potter em Hogwarts. Antes de sair da gerência da escola, o cofundador Salazar Slytherin deixou uma Câmara Secreta, que pode ser aberta apenas por seu herdeiro. A câmara é aberta libertando um monstro que tenta matar alunos nascidos trouxas.
      </p>
    </section>
  );
}
