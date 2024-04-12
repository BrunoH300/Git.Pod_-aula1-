import Harry4 from "../assets/Harry4.jpg";

export default function Harrypotter() {
  return (
    <section>
      <h2 className="text-lg">Harry Potter e o Calice de Fogo</h2>
      <img src={Harry4} alt="harrypotter" />
      <a className="text-blue-300" href="https://pt.wikipedia.org/wiki/Harry_Potter_e_o_C%C3%A1lice_de_Fogo_(filme)">
        Link to Wikipedia
      </a>
      <p className="font-semibold">
      Harry Potter and the Goblet of Fire (no Brasil e em Portugal, Harry Potter e o Cálice de Fogo)[3][4] é um filme britânico-estadunidense de 2005, dirigido por Mike Newell e distribuído pela Warner Bros. Pictures. É baseado no romance de mesmo nome de J. K. Rowling. O filme, que é o quarto na série de filmes Harry Potter, foi escrito por Steven Kloves e produzido por David Heyman. A história segue o quarto ano de Harry Potter em Hogwarts, quando ele é escolhido pelo Cálice de Fogo para competir no Torneio Tribruxo.     </p>
    </section>
  );
}