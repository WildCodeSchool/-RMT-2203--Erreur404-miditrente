import "./contact.css";
import { Helmet } from "react-helmet";
import Form from "../components/Form";
import InfoContact from "../components/InfoContact";

export default function Contact() {
  return (
    <div className="contact_qb">
      <Helmet>
        <title> 3arth keeper | Contact </title>
      </Helmet>
      <InfoContact />
      <Form />
    </div>
  );
}
