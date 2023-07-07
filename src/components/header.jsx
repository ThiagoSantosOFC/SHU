import Link from "next/link";
import React from "react";

const Header = ({ lang }) => {
  const isItalian = lang === "italian";

  return (
    <div id="home" className="text-center text-white py-10">
      <h1>{isItalian ? "Pagina iniziale" : "Water Heritage Nocera Umbra"}</h1>

      <br />
      <b style={{ color: "white" }}>
        {isItalian
          ? "Water Heritage Nocera Umbra è un progetto ideato per diffondere il patrimonio di uno degli elementi naturali che caratterizzano la piccola città di Nocera Umbra: l’acqua."
          : "Water Heritage Nocera Umbra is a project designed to spread awareness of the heritage of one of the natural elements that characterizes the small town of Nocera Umbra: water."}
      </b>
      <br />

      <br />
      <b style={{ color: "white" }}>
        {isItalian
          ? "Nocera Umbra è conosciuta come la città delle acque perché si trova vicino a numerose sorgenti e, fin dall’antichità, l’acqua ha plasmato lo sviluppo del luogo e ne ha favorito la notorietà al di fuori dei suoi confini. Tuttavia, nel corso dei secoli, si è persa la tradizione e la conoscenza legata all’acqua."
          : "Nocera Umbra is known as the city of waters because it is located near numerous springs and, since ancient times, water has shaped the development of the place and has favored its notoriety beyond its borders. However, over the centuries, the tradition and knowledge related to water have been lost."}
      </b>
      <br />

      <br />
      <b style={{ color: "white" }}>
        {isItalian
          ? "Il progetto è stato ideato e sviluppato per il Social Hackaton Umbria 2023, un programma che riunisce giovani provenienti da tutto il mondo per creare e la sviluppare progetti digitali che affrontino le sfide dell’Agenda 2030 in tema di sostenibilità (in particolare l’Obiettivo di Sviluppo Sostenibile numero 4 che riguarda l’energia culturale). Uno dei principali partner è il CEDAT (Centro Documentazione delle Acque e della Terra), con sede a Nocera Umbra, che ha fornito tutti i dati necessari alla realizzazione di questo progetto digitale. In particolare, Water Heritage Nocera Umbra si propone di creare una mappa precisa all’interno di una web app che mostri le coordinate puntuali di tutte le fonti d’acqua presenti nel territorio, tra cui fontane, sorgenti, strutture polivalenti, fontanili/abbeveratoi, lavatoi, serbatoi/conservoni e altre. Ogni punto d’interesse è dotato di una scheda informativa con tecnologia QR e NFC. I visitatori possono semplicemente avvicinare il loro smartphone alla scheda per accedere a una guida audio in doppia lingua (italiano/inglese)."
          : "The project was designed and developed for the Social Hackathon Umbria 2023, a program that brings together young people from all over the world to create and develop digital projects that address the challenges of the 2030 Agenda on sustainability (in particular Sustainable Development Goal number 4, which concerns cultural energy). One of the main partners is CEDAT (Documentation Center for Water and Earth), based in Nocera Umbra, which provided all the necessary data for the realization of this digital project. In particular, Water Heritage Nocera Umbra aims to create a precise map within a web app that shows the precise coordinates of all the water sources present in the territory, including fountains, springs, multipurpose structures, drinking troughs, washhouses, tanks/reservoirs, and others. Each point of interest is equipped with an information card with QR and NFC technology. Visitors can simply bring their smartphone close to the card to access an audio guide in two languages (Italian/English)." }
      </b>
    </div>
  );
};

export default Header;