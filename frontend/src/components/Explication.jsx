function Explication({ explicationData }) {
  return (
    <section className="explication_section_tg">
      <h2 className="explication_title">
        Explication de {explicationData.sujet}
      </h2>

      <article>
        <h3>{explicationData.title}</h3>
        <p> {explicationData.paragraph} </p>
      </article>
    </section>
  );
}

export default Explication;
