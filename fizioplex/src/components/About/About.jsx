import React from "react";
import { icon1, icon2, icon3, icon4 } from "../../constants/images";

const aboutItems = [
  {
    id: 1,
    icon: icon1,
    title: "Personalizimi i Shërbimeve",
    description:
      "Ne kuptojmë se çdo individ është unik, prandaj ofrojmë plane të personalizuara trajtimi dhe programe stërvitjeje që përputhen me nevojat dhe qëllimet specifike të çdo klienti. Kjo përfshin vlerësimin e gjendjes shëndetësore dhe fizike për të siguruar që çdo plan është i përshtatshëm dhe efektiv.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Ekspertiza Profesionale",
    description:
      "Stafi ynë përfshin profesionistë të kualifikuar dhe me përvojë në fushën e fizioterapisë dhe fitnessit. Kjo do të thotë se ju do të merrni këshilla dhe trajtime nga ekspertë që kanë njohuri të thella dhe janë të përkushtuar ndaj përmirësimit të shëndetit dhe mirëqenies suaj.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Fleksibiliteti dhe Qasja",
    description:
      "Ne ofrojmë orare fleksibël që përshtaten me axhendat e ngjeshura të klientëve. Krijojmë paketa të personalizuara të shërbimeve që iu përgjigjen buxheteve dhe qëllimeve të ndryshme, duke ofruar zgjedhje të gjera për çdo klient. Ofrimi i konsultimeve falas ndihmon klientët të bëjnë zgjedhje të informuara bazuar në nevojat e tyre specifike.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Ambienti Motivues dhe Mbështetës",
    description:
      "Krijojmë një ambient pozitiv dhe inkurajues që ndihmon klientët të ndjehen të sigurt dhe të motivuar gjatë gjithë procesit të tyre të rimëkëmbjes dhe përmirësimit të formës fizike. Kjo përfshin mbështetjen e vazhdueshme emocionale dhe motivuese nga stafi ynë.",
  },
];

const About = () => {
  return (
    <section id="about" className="border-t-2 py-16 border-primary font-roboto">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 animate-pulse bg-primary/80 text-black px-4 py-2 rounded-lg md:w-64 md:mx-auto text-ml text-center font-semibold tracking-widest uppercase title-font">
              Pse të na zgjidhni ne?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Zgjidhja e Duhur për Shëndetin dhe Formën Fizike: Ekselencë,
              Personalizim dhe Fleksibilitet
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {aboutItems.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={item.icon} className="animate-pulse" alt="" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      {item.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
