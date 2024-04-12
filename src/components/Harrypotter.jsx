import Harry1 from "../assets/Harry1.jpg";

export default function Harrypotter() {
  return (
    <section>
      <h2 className="text-lg">Harry Potter e a Pedra Filosofal</h2>
      <img src={Harry1} alt="harrypotter" />
      <a className="text-blue-300" href="https://upload.wikimedia.org/wikipedia/pt/thumb/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg/250px-Harry_Potter_Pedra_Filosofal_2001.jpg">
        Link to Wikipedia
      </a>
      <p className="font-semibold">
        Harry Potter (Daniel Radcliffe) é um garoto órfão de 10 anos que vive
        infeliz com seus tios, os Dursley. Até que, repentinamente, ele
        recebe uma carta contendo um convite para ingressar em Hogwarts, uma
        famosa escola especializada em formar jovens bruxos. Inicialmente
        Harry é impedido de ler a carta por seu tio Válter (Richard
        Griffiths), mas logo ele recebe a visita de Hagrid (Robbie Coltrane),
        o guarda-caça de Hogwarts, que chega em sua casa para levá-lo até a
        escola. A partir de então Harry passa a conhecer um mundo mágico que
        jamais imaginara, vivendo as mais diversas aventuras com seus mais
        novos amigos, Rony Weasley (Rupert Grint) e Hermione Granger (Emma
        Watson).
      </p>
    </section>
  );
}
