import "./contact.css";
// eslint-disable-next-line import/no-unresolved
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-restricted-syntax
    console.info(data);
  };

  return (
    <div className="contact_qb">
      <div className="form_qb">
        <h1>Contactez nous </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label_qb" htmlFor="nameInput">
            Name :
            <input
              className="input_qb"
              type="text"
              name="nameInput"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("Name", { required: true })}
            />
            {errors.Name?.type === "required" && "Name is required"}
          </label>
          <label className="label_qb" htmlFor="emailInput">
            Email :
            <input
              className="input_qb"
              type="text"
              name="emailInput"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("Email", { required: true })}
            />
            {errors.Email?.type === "required" && "Email is required"}
          </label>
          <label className="label_qb" htmlFor="messageInput">
            Message :
            <textarea
              className="textaera_qb"
              name="messageInput"
              rows="6"
              cols="50"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("Message", { required: true })}
            />
            {errors.Message?.type === "required" && "Message is required"}
          </label>
          <button type="submit" className="button_qb">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
