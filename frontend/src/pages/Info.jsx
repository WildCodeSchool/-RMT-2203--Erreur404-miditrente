import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <main className="main">
      <Helmet>
        <title> 3arth keeper | A propos</title>
      </Helmet>
      <h1>A Propos</h1>

      <section className="explication_section_tg">
        <h2>
          Le réchauffement <span>climatique</span>
        </h2>
        <h3>Avant propos</h3>
        <p>
          Le changement climatique est l&apos;un des plus grand challenge de
          l&apos;humanité pour les années à venir... Hausse des temperatures,
          fonte des glaciers, multiplication des sécheresses, innondations, sont
          autant de signes que le changement climatique est engagé. Les risques
          sont énormes pour la planète et les générations futures, c&apos;est
          pourquoi nous devons AGIR maintenant.
        </p>
        <h3>Les causes</h3>
        <p>
          Les changements climatiques auxquels nous commençons à assister sont
          principalement dus à l&apos;augmentation des concentrations de gaz à
          effet de serre dans l&apos;atmosphère. Ces gaz à effet de serre ont
          toujours existé dans l&apos;atmosphère de façon de naturelle. Mais
          depuis quelques années, le plus dangereux des gaz à effet de serre (le
          CO2) a connu une augmentation fulgurante dont l&apos;origine est loin
          d&apos;être naturelle. Les activités humaines sont aujourd&apos;hui la
          principale cause de l&apos;augmentation de ce phénomène : les
          industries, les transports, l&apos;agriculture, et la production
          d&apos;énergie en sont les principales causes.
        </p>
      </section>

      <section className="explication_section_tg">
        <h2>
          La team <span>midiTrente</span>
        </h2>

        <h3>Pourquoi ce nom ? </h3>

        <p>
          Après quelques difficultés à nous mettre d&apos;accord sur le projet
          et les APIs, nous avons convenu ensemble qu&apos;il nous fallait nous
          retrouver tous les jours pour faire un point sur l&apos;avancée de
          notre projet. De part nos agendas divergents, nous avons eu du mal à
          nous entendre, le matin étant compliqué, le soir également, nous avons
          donc décidé unanimement que 12h30 serait notre heure. Parce qu&apos;il
          n&apos;y a pas de petite victoire, nous avons décidé d&apos;honorer
          notre première décision en temps que groupe et de nous nommer
          midiTrente, en hommage à nos débuts.
        </p>

        <h3> Notre projet et ses raisons </h3>

        <p>
          Nous avons choisi de partir sur un projet qui nous tenait à coeur et
          qui aborde un sujet d&apos;actualité grave. C&apos;est un sujet qui
          touchait chaque membre notre équipe. Notre projet consiste à mettre en
          place un site internet informatif et alarmiste dans un premier temps,
          mais également qui enagge chaque citoyen du monde dans cette mission
          qui nous concerne toutes et tous : Le sauvetage de la vie sur Terre.
          L&apos;humanité et des centaines d&apos;autres espèces sont en danger.
          Il nous faut en prendre conscience et agir aujourd&apos;hui pour
          pouvoir vivre demain.
        </p>
      </section>

      <section className="explication_section_tg">
        <h2>
          {" "}
          Et <span>maintenant ...</span> ?
        </h2>

        <p>
          Plus que jamais l&apos;avenir de la planète est entre nos mains.
          C&apos;est pourquoi, nous espérons de tout coeur que notre site
          permettra non seulement une prise de conscience sur l&apos;urgence de
          la situation actuelle mais également une volonté d&apos;action. En
          effet, il est loin le temps de l&apos;information. Aujourd&apos;hui,
          l&apos;heure est à l&apos;engagement ! Ensemble, engageons nous pour
          un monde durable...{" "}
        </p>

        <Link to="/Engagement">
          <button type="button" className="home_bouton_tg">
            AGIR <br /> MAINTENANT
          </button>
        </Link>
      </section>
    </main>
  );
}
