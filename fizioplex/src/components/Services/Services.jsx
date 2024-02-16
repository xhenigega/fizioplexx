import React from "react";
import { motion } from "framer-motion";
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

const services = [
  {
    id: 1,
    image: image17,
    title: "Terapia me kupa",
    description:
      "Synon në mënyrë efektive dhimbjen e shpinës dhe shpatullave. Duke aplikuar pajisjen përkatëse në zona të veçanta, nxitet rritja e presionit të gjakut, relaksimi i muskujve dhe lehtësimi i dhimbjes.",
  },
  {
    id: 2,
    image: image25,
    title: "Kinesiotaping",
    description:
      "Synon në mënyrë efektive dhimbjen e shpinës dhe shpatullave. Duke apmotion.likuar pajisjeve përkatëse në zona të veçanta, nxitet rritja e presionit të gjakut, relaksimi i muskujve dhe lehtësimi i dhimbjes.",
  },
  {
    id: 3,
    image: image18,
    title: "Riedukim Postural",
    description:
      "Ky proces rehabilitues përdor një kombinim të qëndrimeve të kontrolluara, të cilat ndihmojnë në rregulmotion.limin e disbalancave të trupit. Përmes aktiviteteve të udhëzuara, që përfshijnë ushtrime aktive dhe teknika relaksuese pasive, pacientët marrin ndihmën e nevojshme për të luftuar dhimbjet muskulare, reduktuar spazmat dhe kontraktimet, si dhe për të përmirësuar funksionimin e artikulacioneve dhe lëvizshmërinë e shtyllës kurrizore.",
  },
  {
    id: 4,
    image: image13,
    title: "Terapia stretching",
    description:
      "Përmirësim të lëvizshmërisë dhe fleksibimotion.litetit.Reduktim të dëmtimeve të tendinave, ose siç njihen ndryshe “ngërçet”. Ndihmojnë në performancën e përgjithshme të trupit në përditshmëri.",
  },
  {
    id: 5,
    image: image2,
    title: "Terapia Bobath",
    description:
      "Qëllimi i aplikimit të konceptit Bobath është të promovojë përmirësime në funksionin motorik.Kjo bëhet përmes aftësive specifike të trajtimit të pacientit për të udhëhequr pacientët gjatë fillimit dhe përfundimit të detyrave të synuara, duke promovuar aktivitetin e pacientit.",
  },
  {
    id: 6,
    image: image24,
    title: "Terapia manuale",
    description:
      "Terapia manuale është një trajtim fizik që përdoret për të trajtuar dhimbjen dhe paaftësinë muskuloskeletore; më së shumti përfshin brumosjen dhe manipulimin e muskujve, mobilizimin e kyçeve dhe manipulimin e tyre.",
  },
  {
    id: 7,
    image: image19,
    title: "Ushtrime terapeutike",
    description:
      "Ushtrimet terapeutike janë lëvizje dhe aktivitete fizike të dizajnuara për të rivendosur funksionin dhe fleksibilitetin, për të përmirësuar forcën dhe për të ulur dhimbjen.",
  },
  {
    id: 8,
    image: image16,
    title: "Trajtim të dëmtimeve sportive",
    description:
      "Dëmtimet sportive ndryshojnë nga dëmtimet e përditshme. Atletet normalisht kërkojnë një punë të një niveli më të lartë per sa i përket muskujve, artikulacioneve dhe kockave. Fizioterapistët sportive ndihmojnë që atletet të marrin veten prej dëmtimeve sportive dhe i mësojnë se si të parandalojnë problemet.",
  },
  {
    id: 9,
    image: image26,
    title: "Trajtim të problemeve të mesit dhe kurrizit",
    description:
      "Mësoni rreth simptomave, shkaqeve dhe trajtimeve. Ne ju ofrojme informacion për t'ju bërë të kuptoni arsyen dhe të merrni ndihmë profesionale.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const specificService = services.find(
    (service) => service.title === "Riedukim Postural"
  );

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

        <motion.ul
          className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {specificService && (
            <motion.li
              key={specificService.id}
              variants={itemVariants}
              className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
            >
              <div className="relative mx-auto overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                <img
                  src={specificService.image}
                  className="w-full object-cover"
                  alt={specificService.title}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                  <h3 className="text-xl font-medium text-white">
                    {specificService.title}
                  </h3>
                  <p className="my-2 text-white text-xs text-opacity-80">
                    {specificService.description}
                  </p>
                </div>
              </div>
            </motion.li>
          )}

          {services.map(
            (service) =>
              service.title !== "Riedukim Postural" && (
                <motion.li key={service.id} variants={itemVariants}>
                  <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                    <img
                      src={service.image}
                      className="w-full object-cover"
                      alt={service.title}
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                    <div className="absolute inset-x-0 bottom-0 z-20 px-4 pt-10">
                      <h3 className="text-xl font-medium text-white">
                        {service.title}
                      </h3>
                      <p className="my-2 text-white text-xs text-opacity-80">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              )
          )}
        </motion.ul>
      </div>
    </section>
  );
};

export default Services;
