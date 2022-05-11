import "../pages/contact.css";
import { useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from "@emailjs/browser";

export default function form() {
  /**
   * register permet d'enregistrer les informations de notre formulaire grâce au code :
   * {...register("Nom-de-variable", { required: true })} dans les input ligne 85/97/108/120
   * { required: true } Permet d'obliger l'utilisateur à rentrer une valeur dans l'input
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, r) => {
    const templateId = "template_nqsoryp";
    const serviceId = "service_hkmt1sg";

    // Ici, nous récupérons les informations du formulaire.
    // eslint-disable-next-line no-use-before-define
    sendEmail(serviceId, templateId, {
      Name: data.Name,
      Email: data.Email,
      Sujet: data.Sujet,
      Message: data.Message,
      // reply_to: r.target.reset() Permet de supprimer tous les champs une fois l'email envoyer
      reply_to: r.target.reset(),
    });
  };

  /**
   *
   * @param {string :adresse email} serviceId
   * @param {template : mise en forme de l'email} templateId
   * @param {object : data form} variables
   * la fonction sendEmail va envoyer toutes les informations du formulaire (variables) pour
   * l'envoyer a emailJS sur l'adresse mail teammiditrente (serviceId) et le mettre
   * enforme grace au templateId
   */
  const sendEmail = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "VjiaTZIUFRUtLrk3M")
      .then((res) => {
        // eslint-disable-next-line no-restricted-syntax
        console.info("succes status :", res.status);
      })
      .catch((error) => console.error("une erreur est survenue", error));
  };

  return (
    <div className="contact_form_qb">
      <h1>Contactez-nous </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="contact_label_qb" htmlFor="nameInput">
          Name :
          <input
            className="contact_input_qb"
            type="text"
            name="nameInput"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("Name", { required: true })}
          />
          {/* Si le champ n'est pas rempli, on indique à l'utilisateur que ce champ est requis. */}
          {errors.Name?.type === "required" && (
            <p className="contact_required_qb">Name is required</p>
          )}
        </label>
        <label className="contact_label_qb" htmlFor="emailInput">
          Email :
          <input
            className="contact_input_qb"
            type="text"
            name="emailInput"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("Email", { required: true })}
          />
          {errors.Email?.type === "required" && (
            <p className="contact_required_qb">Email is required</p>
          )}
        </label>
        <label className="contact_label_qb" htmlFor="sujetlInput">
          Quel est le sujet ?
          <input
            className="contact_input_qb"
            type="text"
            name="sujetlInput"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("Sujet", { required: true })}
          />
          {errors.Sujet?.type === "required" && (
            <p className="contact_required_qb">Sujet is required</p>
          )}
        </label>
        <label className="contact_label_qb" htmlFor="messageInput">
          Message :
          <textarea
            className="contact_textaera_qb"
            name="messageInput"
            rows="6"
            cols="50"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("Message", { required: true })}
          />
          {errors.Message?.type === "required" && (
            <p className="contact_required_qb">Message is required</p>
          )}
        </label>
        <button type="submit" value="send" className="button_form_qb">
          submit
        </button>
      </form>
    </div>
  );
}
