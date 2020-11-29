import React from "react";
import { FooterConatiner } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";
import AccordionCustomMade from "./components/accordionCustomMade/accordion";
import { FaqContainers } from "./containers/faqs";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      {/* <AccordionCustomMade /> */}
      <FaqContainers />
      <FooterConatiner />
    </>
  );
}
