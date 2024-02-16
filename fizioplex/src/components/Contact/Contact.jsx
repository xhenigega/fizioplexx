import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { pin } from "../../constants/images";

import useAlert from "../../hooks/useAlert";
import Alert from "../Alert";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "",  phoneNumber: "", message: "" });

  const [loading, setLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jon Xhani",
          from_email: form.phoneNumber,
          to_email: "jonxhani@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "FALEMDINDERIT PER MESAZHIN 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);

            setForm({
              name: "",
              phoneNumber: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "NUK E MOREM MESAZHIN TEND,NA TELEFONO😢",
            type: "danger",
          });
        }
      );
  };

  useEffect(() => {
    const map = L.map("map", {
      center: [41.31639379620295, 19.812753942327955],
      zoom: 13,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: pin,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    L.marker([41.31639379620295, 19.812753942327955], { icon: customIcon })
      .addTo(map)
      .bindPopup("Rruga Margarita Tutulani 35")
      .openPopup();

    return () => map.remove();
  }, []);

  return (
    <section className="bg-secondary h-screen border-t-2 border-primary ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8  font-roboto relative">
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat z-0"
        ></div>
        <div className="container absolute top-60 left-0 right-0 mx-auto px-6 md:px-12 z-10">
          <div className="block rounded-lg bg-slate-200 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 backdrop-blur-[30px] border border-primary">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                {alert.show && <Alert {...alert} />}

                <form ref={formRef} onSubmit={handleSubmit}>
                  <h4 className="text-xl font-bold">NA KONTAKTONI</h4>
                  <div className="relative my-6 " data-te-input-wrapper-init>
                    <input
                      name="name"
                      type="text"
                      placeholder="Emri "
                      value={form.name}
                      onChange={handleChange}
                      className="peer block min-h-[auto] w-full rounded border-2 border-primary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput90"
                    />
                    
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      name="phoneNumber"
                      type="phoneNumber"
                      placeholder="Numri juaj i kontaktit"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      className="peer block min-h-[auto] w-full rounded border-2 border-primary  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput91"
                    />
                   
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="peer block min-h-[auto] w-full rounded border-2  border-primary  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Përshkruani shqetësimin tuaj"
                    ></textarea>
                   
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="mb-6 w-full rounded bg-primary text-white tracking-widest px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
                  >
                    Dërgo
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary/40 p-4 text-primary">
                          <svg
                            xmlnsXlink="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow flex flex-col">
                        <p className="mb-2 font-bold text-xl">
                          Format e kontaktit
                        </p>
                        <a
                          href="mailto:fizioplexshpk@gmail.com"
                          className="text-ml mb-4 font-semibold text-primary"
                        >
                          fizioplexshpk@gmail.com
                        </a>
                        <a
                          href="tel:+355684669042"
                          className="text-ml font-semibold mb-4 text-neutral-700"
                        >
                          +355 684669042
                        </a>
                        <a
                          href="tel:+355692031024"
                          className="text-ml font-semibold  text-neutral-700"
                        >
                          +355 692031024
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-42 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-primary/40 p-4 text-primary">
                          <svg
                            xmlnsXlink="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow flex flex-col">
                        <p className="mb-2 text-xl font-bold ">Adresa</p>
                        <a
                          href="https://maps.app.goo.gl/e9g7F6iTyupSSp6b9 "
                          className="text-sm mb-4 font-semibold  text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📍Rruga Margarita Tutulani 35, Tiranë
                        </a>
                        <a
                          href="https://maps.app.goo.gl/7k3gMK6QTpxfapwm6"
                          className="text-sm mb-4 font-semibold  text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📍Kamëz, rruga “Laknasi”, përballë Point Center
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-42 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-primary/40 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              className="text-primary stroke-current"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />

                            <line
                              x1="12"
                              y1="12"
                              x2="12"
                              y2="6"
                              className="text-primary stroke-current"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <line
                              x1="12"
                              y1="12"
                              x2="16"
                              y2="14"
                              className="text-primary stroke-current"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6">
                        <p className="mb-2 font-bold text-xl">Oraret</p>
                        <p className="text-sm lg:text-ml font-semibold text-neutral-700 whitespace-nowrap">
                          E hënë - E shtunë: 9:00 - 21:00
                        </p>

                        <p className="text-ml font-semibold text-neutral-700">
                          E diel: Mbyllur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
