import React from "react";
import { image20 } from "../../constants/images";

const Features = () => {
  return (
    <section className="bg-secondary border-t-2 border-primary">
       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 font-roboto min-h-screen">
    <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-[500px] sm:h-80 lg:h-[720px]">
              <img
                alt=""
                src={image20}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-primary/30">
        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-primary/30"></span>
        <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Paketa të Personalizuara Fitnessi për Çdo Nevojë
              </h2>

              <p className="mt-4 text-slate-200 font-medium">
                Në klinikën tonë, ne kuptojmë se çdo udhëtim drejt mirëqenies
                është unik. Prandaj, ofrojmë paketa të ndryshme fitnessi, të
                cilat përshtaten në mënyrë specifike me nevojat dhe objektivat e
                secilit pacient. Angazhimi ynë shkon përtej ofrimit të
                programeve standard; ne krijojmë një plan të detajuar që synon
                të motivojë dhe të inkurajojë çdo individ që të arrijë
                potencialin e tij të plotë. Duke punuar ngushtë me ju,
                sigurohemi që të ndiheni të mbështetur në çdo hap të rrugëtimit
                tuaj dhe të shihni rezultate të prekshme që ju frymëzojnë të
                vazhdoni përpara.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-indigo-500"
              >
                KONSULTOHU ME NE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
