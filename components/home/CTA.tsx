import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-4" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-3xl font-bold mb-5">
          Et si nous collaborions ensemble sur l'un de vos projets web ou mobile ?
        </h2>
        <h2 className="text-xl mb-10">Afin de mettre en place un devis ou pour toute autre demande de collaboration, n'hésitez pas !</h2>
        <a
          href="mailto:jennifer.wanys@yahoo.fr"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Envoyez-moi un message
        </a>
      </div>
    </div>
  );
}

export default CTA;
