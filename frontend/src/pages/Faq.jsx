import FaqPage from "@components/FaqPage";
import { Helmet } from "react-helmet";

export default function FaqList() {
  return (
    <div className="foireAuxQuestions">
      <Helmet>
        <title> 3arth keeper | FAQ </title>
      </Helmet>
      <h1>EARTH KEEPER - Foire aux Questions</h1>
      <FaqPage />
    </div>
  );
}
