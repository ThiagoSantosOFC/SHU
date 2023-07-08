import React from "react";
import Image from "next/image";

export default function contactos() {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mt-4 md:mt-8">
          <div className="flex flex-wrap">
            <br />
            <div className="w-full">
              <h1 className="mt-40 mb-4 text-3xl md:text-5xl font-bold">Contattaci</h1>
              <p className="mb-4 text-sm md:text-base text-gray-700">
                Il CEDAT, Centro di Documentazione dell’Acqua e della Terra, è
                situato nella splendida cornice di Palazzo Camilli. L’ambizione
                è quella di realizzare un centro studi che diventi un punto di
                riferimento relativamente all'argomento "Acqua". <br />
                <br />
                Il CEDAT, Centro di Documentazione dell'Acqua e della Terra, si
                articola su due livelli all'interno di Palazzo Camilli,
                quest'ultimo situato nel centro storico.
                <br />
                <br />
                Il primo livello, sviluppato al piano terra e nelle due stanze
                dell'edificio, rappresenta i due elementi caratterizzanti
                Nocera: l'acqua, con le tre sorgenti principali Angelica,
                Cacciatore e Flaminia, e la terra, con i suoi differenti
                utilizzi, a fini terapeutici e nella lavorazione del Calcare
                Bianco.
                <br />
                <br />
                Il secondo livello, allestito al primo piano, è sede di una
                mostra permanente cui verrà diversificata e rinnovata nel tempo:
                la storia del Bagno di Nocera, la pubblicità realizzata da
                Felice Bisleri, oltre alla presentazione dei vari punti d'acqua
                presenti sul territorio.
                <br />
                <br />
                Due sale per conferenze dotate dei necessari supporti
                informatici, infine, al secondo piano della struttura, nonché
                sede dell'associazione culturale "L'Arengo".
              </p>
              <p className="mt-2 mb-2 text-sm md:text-base text-gray-700">
                Tel: +39 0742 834011 Fax: +39 0742 812133
              </p>
              <p className="mb-4 text-sm md:text-base text-gray-700">
                Email: rag@comune.noceraumbra.pg.it
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
