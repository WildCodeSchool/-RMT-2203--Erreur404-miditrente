import { Link } from "react-router-dom";
import "../pages/contact.css";

export default function InfoContact() {
  return (
    <div className="contact_info_qb">
      <h2>Contactez-nous pour plus d&apos;informations</h2>
      <p className="contact_texte_qb">
        Un problème avec le site ? Vous voulez savoir d&apos;où proviennent nos
        API? Un retour concernant l&apos;utilisation du site ou amélioration à
        faire? Vous pouvez nous contacter via ce formulaire.
      </p>
      <h2>mais avant tout :</h2>
      <p className="contact_texte_qb">
        Nous vous proposons également de visiter notre FAQ.
      </p>
      <h2>voir notre FAQ : </h2>
      <Link to="/Faq">
        <button className="button_faq_qb" type="button">
          {" "}
        </button>
      </Link>
    </div>
  );
}
