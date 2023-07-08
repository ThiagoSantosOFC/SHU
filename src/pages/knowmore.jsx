import React from "react";
import Image from "next/image";

export default function Knowmore() {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mt-4 md:mt-8">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h1 className="mt-40 mb-4 text-3xl md:text-5xl font-bold">
                Water Heritage: un progetto per scoprire le acque di Nocera
                Umbra attraverso elementi analogici e digitali
              </h1>

              <p className="mb-4 text-sm md:text-base text-gray-700">
                Water Heritage Nocera Umbra è un progetto che si compone di{" "}
                <b>due parti, una digitale e una analogica</b>, per dare un'
                <b>esperienza completa e autonoma al visitatore</b> che vuole
                partire alla scoperta delle acque di Nocera Umbra.
              </p>

              <h2 className="text-lg mt-4">Digitalizzazione delle acque di Nocera Umbra</h2>
              <br/>
              <p className="mb-4 text-sm md:text-base text-gray-700">
                Nell'ambito del progetto, è stata{" "}
                <b>sviluppata una web app che offre accesso diretto e facile a una mappa che elenca con precisione le coordinate dei 305 luoghi identificati dal CEDAT</b>. I luoghi sono suddivisi per categoria e, al momento della selezione da parte dell'utente, un popup mostra le informazioni più rilevanti sul luogo scelto, come le coordinate geografiche, il tipo di sorgente, il materiale, le dimensioni, lo stato di funzionamento, le condizioni di conservazione e altre informazioni varie. <br/>
                Tutti <b>i dati inseriti sono stati raccolti dal CEDAT</b> nel corso di due anni e si riferiscono all'anno 2020. Lo scopo di questa ricerca e mappatura dei luoghi legati all'acqua è di ottenere una conoscenza approfondita sulle fonti d'acqua di Nocera Umbra e facilitare uno studio sul loro stato di conservazione.
              </p>

              <h2 className="text-lg mt-4">
                Unione tra elementi analogici e informazioni digitalizzate: codici QR e tag NFC
              </h2>
              <br/>
              <p className="mb-4 text-sm md:text-base text-gray-700">
                La seconda parte del progetto riguarda la{" "}
                <b>progettazione grafica di schede informative da posizionare nei luoghi di interesse</b> indicati sulla mappa. I visitatori che desiderano esplorare di persona un determinato luogo potranno{" "}
                <b>accedere, tramite smartphone, alle informazioni registrate in doppia</b> lingua italiana e inglese semplicemente <b>inquadrando un codice QR</b> o avvicinando il dispositivo a <b>un tag NFC</b>. La tecnologia NFC consente la condivisione di contenuti senza la necessità di installare un'app dedicata. È facile da programmare e richiede solo uno smartphone compatibile. <br/>
                L'introduzione degli elementi analogici mira a <b>fornire ai visitatori</b>, che sono arrivati in un luogo specifico utilizzando la mappa digitale o che vi sono casualmente arrivati dopo una passeggiata, la stessa <b>accessibilità alle informazioni</b>. In questo modo, coloro interessati a proseguire il loro percorso possono venire a conoscenza della mappa digitale o continuare a consultarla per scoprire tutti gli altri luoghi d'interesse.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose        https://tailwind-elements.com/snippets/tailwind/tailwindelements/5203857#html-tab-view   -->*/}
    </div>
  );
}
