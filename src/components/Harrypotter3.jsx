import Harry3 from "../assets/Harry3.jpg";

export default function Harrypotter() {
  return (
    <section>
      <h2 className="text-lg">Harry Potter e o Prisioneiro de Azkaban</h2>
      <img src={Harry3} alt="harrypotter" />
      <a className="text-blue-300" href="https://pt.wikipedia.org/wiki/Harry_Potter_e_o_Prisioneiro_de_Azkaban_(filme)">
        Link to Wikipedia
      </a>
      <p className="font-semibold">
      Harry Potter and the Prisoner of Azkaban (bra/prt: Harry Potter e o Prisioneiro de Azkaban)[2][3][4] é um filme britânico-americano de 2004, dirigido por Alfonso Cuarón, baseado no livro de mesmo nome escrito por J. K. Rowling.[2] É o terceiro filme da série Harry Potter, tendo roteiro de Steve Kloves e produção de Chris Columbus, David Heyman e Mark Radcliffe. O filme é estrelado por Daniel Radcliffe como Harry Potter, juntamente com Rupert Grint e Emma Watson como os melhores amigos de Harry, Ronald Weasley e Hermione Granger.
      </p>
    </section>
  );
}
