import React from "react";
import {
  image2,
  image13,
  image16,
  image17,
  image18,
  image19,
  image24,
  image25,
  image26,
} from "../../constants/images";

const Services = () => {
  return (
    <section id="services" className="bg-white border-t-2 border-primary">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 font-roboto">
        <header className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-700">
            Shërbimet tona
          </h2>

          <p className="mx-auto mt-4 text-sm max-w-xl text-gray-700 font-bold">
            Në qendër të angazhimit tonë profesional qëndron pasioni dhe
            dedikimi për të ndihmuar të tjerët të arrijnë mirëqenien e plotë.
            Jemi të përkushtuar për të ofruar jo vetëm trajtime, por edhe
            mbështetje, këshilla për një jete më të shëndetshme dhe të lumtur.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">
          <li>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image17} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Terapia me kupa
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Synon në mënyrë efektive dhimbjen e shpinës dhe shpatullave.
                  Duke aplikuar pajisjeve përkatëse në zona të veçanta, nxitet
                  rritja e presionit të gjakut, relaksimi i muskujve dhe
                  lehtësimi i dhimbjes.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image25} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Kinesiotaping
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Synon në mënyrë efektive dhimbjen e shpinës dhe shpatullave.
                  Duke aplikuar pajisjeve përkatëse në zona të veçanta, nxitet
                  rritja e presionit të gjakut, relaksimi i muskujve dhe
                  lehtësimi i dhimbjes.
                </p>
              </div>
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative mx-auto overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image18} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Riedukim Postural
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Ky proces rehabilitues përdor një kombinim të qëndrimeve të
                  kontrolluara, të cilat ndihmojnë në rregullimin e disbalancave
                  të trupit. Përmes aktiviteteve të udhëzuara, që përfshijnë
                  ushtrime aktive dhe teknika relaksuese pasive, pacientët
                  marrin ndihmën e nevojshme për të luftuar dhimbjet muskulare,
                  reduktuar spazmat dhe kontraktimet, si dhe për të përmirësuar
                  funksionimin e artikulacioneve dhe lëvizshmërinë e shtyllës
                  kurrizore.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image13} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Terapia stretching
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Përmirësim të lëvizshmërisë dhe fleksibilitetit.Reduktim të
                  dëmtimeve të tendinave, ose siç njihen ndryshe “ngërçet”.
                  Ndihmojnë në performancën e përgjithshme të trupit në
                  përditshmëri.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image2} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Terapia Bobath
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Qëllimi i aplikimit të konceptit Bobath është të promovojë
                  përmirësime në funksionin motorik.Kjo bëhet përmes aftësive
                  specifike të trajtimit të pacientit për të udhëhequr pacientët
                  gjatë fillimit dhe përfundimit të detyrave të synuara, duke
                  promovuar aktivitetin e pacientit.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image24} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Terapia manuale
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Terapia manuale është një trajtim fizik që përdoret për të
                  trajtuar dhimbjen dhe paaftësinë muskuloskeletore; më së
                  shumti përfshin brumosjen dhe manipulimin e muskujve,
                  mobilizimin e kyçeve dhe manipulimin e tyre.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image19} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Ushtrime terapeutike
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Ushtrimet terapeutike janë lëvizje dhe aktivitete fizike të
                  dizajnuara për të rivendosur funksionin dhe fleksibilitetin,
                  për të përmirësuar forcën dhe për të ulur dhimbjen.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image16} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Trajtim të dëmtimeve sportive
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Dëmtimet sportive ndryshojnë nga dëmtimet e përditshme.
                  Atletet normalisht kërkojnë një punë të një niveli më të lartë
                  per sa i përket muskujve, artikulacioneve dhe kockave.
                  Fizioterapistët sportive ndihmojnë që atletet të marrin veten
                  prej dëmtimeve sportive dhe i mësojnë se si të parandalojnë
                  problemet.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div>
                <img src={image26} className="w-full object-cover" alt="" />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>

              <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                <h3 className="text-xl font-medium text-white">
                  Trajtim të problemeve të mesit dhe kurrizit
                </h3>
                <p className="my-2 text-white text-xs text-opacity-80">
                  Mësoni rreth simptomave, shkaqeve dhe trajtimeve. Ne ju
                  ofrojme informacion për t'ju bërë të kuptoni arsyen dhe të
                  merrni ndihmë profesionale.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
