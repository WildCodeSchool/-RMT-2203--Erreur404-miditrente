function Explication({ data }) {
  return (
    <section className="explication_section_tg">
      <h2 className="explication_title">Explication de {data.sujet}</h2>

      <article>
        <h3>{data.title}</h3>
        <p> {data.paragraph} </p>
      </article>
    </section>
  );
}

export default Explication;
