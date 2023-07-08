import React from "react";
import Image from "next/image";

export default function Knowmore() {
  return (
    <div>
      <div class="ml-12 container  mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section class="">
          <div class="flex flex-wrap">
            <div class="mt-52 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-8/12 md:px-3 lg:px-6">
              <h1  class="mb-6 text-5xl font-bold">
                Water Heritage: un progetto per scoprire le acque di Nocera
                Umbra attraverso elementi analogici e digitali
              </h1>

              <p class="mb-6 text-neutral-500 text-black dark:text-neutral-300">
                Water Heritage Nocera Umbra è un progetto che si compone di{" "}
                <b>due parti, una digitale e una analogica</b>, per dare un&apos;
                <b>esperienza completa e autonoma al visitatore</b> che vuole
                partire alla scoperta delle acque di Nocera Umbra.
              </p>

              <h2>Digitalizzazione delle acque di Nocera Umbra</h2>
              <br/>
              <p class="mb-6 text-neutral-500 text-black dark:text-neutral-300">
                Nell&apos;ambito del progetto, è stata{" "}
                <b>
                  sviluppata una web app che offre accesso diretto e facile a
                  una mappa che elenca con precisione le coordinate dei 305
                  luoghi identificati dal CEDAT
                </b>
                . I luoghi sono suddivisi per categoria e, al momento della
                selezione da parte dell&apos;utente, un popup mostra le informazioni
                più rilevanti sul luogo scelto, come le coordinate geografiche,
                il tipo di sorgente, il materiale, le dimensioni, lo stato di
                funzionamento, le condizioni di conservazione e altre
                informazioni varie. <br />
                Tutti <b>i dati inseriti sono stati raccolti dal CEDAT</b> nel
                corso di due anni e si riferiscono all&apos;anno 2020. Lo scopo di
                questa ricerca e mappatura dei luoghi legati all&apos;acqua è di
                ottenere una conoscenza approfondita sulle fonti d&apos;acqua di
                Nocera Umbra e facilitare uno studio sul loro stato di
                conservazione.
              </p>

              <h2>
                Unione tra elementi analogici e informazioni digitalizzate:
                codici QR e tag NFC
              </h2>
              <br/>
              <p class="mb-6 text-neutral-500 text-black dark:text-neutral-300">
                La seconda parte del progetto riguarda la{" "}
                <b>
                  progettazione grafica di schede informative da posizionare nei
                  luoghi di interesse
                </b>{" "}
                indicati sulla mappa. I visitatori che desiderano esplorare di
                persona un determinato luogo potranno{" "}
                <b>
                  accedere, tramite smartphone, alle informazioni registrate in
                  doppia
                </b>{" "}
                lingua italiana e inglese semplicemente{" "}
                <b>inquadrando un codice QR</b> o avvicinando il dispositivo a{" "}
                <b>un tag NFC</b>. La tecnologia NFC consente la conivisione di
                contenuti senza la necessità di installare un&apos;app dedicata. È
                facile da programmare e richiede solo uno smartphone
                compatibile.
                <br />
                L&apos;introduzione degli elementi analogici mira a{" "}
                <b>fornire ai visitatori</b>, che sono arrivati in un luogo
                specifico utilizzando la mappa digitale o che vi sono
                casualmente arrivati dopo una passeggiata, la stessa{" "}
                <b>accessibilità alle informazioni</b>. In questo modo, coloro
                interessati a proseguire il loro percorso possono venire a
                conoscenza della mappa digitale o continuare a consultarla per
                scoprire tutti gli altri luoghi d&apos;interesse.
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
