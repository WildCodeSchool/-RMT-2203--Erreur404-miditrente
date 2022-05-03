function Explication({ data }) {
  return (
    <section className="explication_section_tg">
      <article>
        <h3>{data.title}</h3>
        <p> {data.paragraph} </p>
      </article>
    </section>
  );
}

export default Explication;
