import React from "react";
import Image from "next/image";
import King from "../public/assets/king.png";
import Link from "next/link";
import TalkBalloon from "../components/talkballon";
import TalkBalloonRight from "../components/TalkBallonRight";

export const kingStory = () => {
  return (
    <div className="relative py-16 px-6 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center mt-16">
        <a>
          <Image
            priority
            src={King}
            alt="King"
            width="351"
            height="324"
            className="cursor-pointer"
          />
        </a>
        <div className="md:ml-10 md:max-w-xl p-4 bg-[#094c2d] border border-green-900 rounded-xl shadow-lg">
          <TalkBalloon className="text-xl italic font-semibold text-gray-800">
            <p className="lg:text-xl sm:text-base text-black">
              The Monastery of Santa Maria da Vitória, also known as the Batalha
              Monastery, is undeniably one of the most beautiful works of
              Portuguese and European architecture. This exceptional
              architectural ensemble resulted from the fulfilment of a promise
              made by King D. João I, in gratitude for the victory at
              Aljubarrota, a battle fought on 14 August 1385, which secured the
              throne and guaranteed Portugal&apos;s independence.
            </p>
          </TalkBalloon>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center mt-16">
        <a>
          <Image
            priority
            src={King}
            alt="Person 2"
            width="351"
            height="324"
            className="cursor-pointer transform scale-x-[-1] rounded-full"
          />
        </a>
        <div className="md:mr-10 md:max-w-xl p-4 bg-[#094c2d] border border-green-900 rounded-xl shadow-lg">
          <TalkBalloonRight className="text-xl italic font-semibold text-gray-800">
            <p className="lg:text-xl sm:text-base text-black">
              The Monastery of Santa Maria da Vitória, also known as the Batalha
            </p>
          </TalkBalloonRight>
        </div>
      </div>
    </div>
  );
};

export default kingStory;
