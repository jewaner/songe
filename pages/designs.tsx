import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Designs"
      meta={{ desc: "Je suis également une webdesigneuse autodidacte et passionnée ! Je propose toute sorte de design destiné a des plateformes web et mobiles." }}
    >

      <Heading />
      <Projects />
      {/* <More /> */}
    </Page>
  );
}

export default designs;
