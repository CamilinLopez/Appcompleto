"use client";

import {
  BigTitle,
  MediumTitle,
  CustomInput,
  CustomRadio,
} from "@/components/utils";
import { ChangeEvent, useState } from "react";
import { Producto } from "@/types/productoType";

export default function page() {
  const [formulario, useFormulario] = useState<Producto>({
    id: "",
    nombre: "",
    supportemail: "",
    tipo: "Software",
    descripcion: "",
  });

  const handleOnChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    if (formulario.tipo === e.target.value)
      useFormulario({ ...formulario, [e.target.name]: "" });
    else useFormulario({ ...formulario, [e.target.name]: e.target.value });
  };
  const handleOnChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    useFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-14">
      <div className="container">
        <BigTitle text="Empecemos con lo básico" />
        <div className="my-7">
          <form>
            <div>
              <MediumTitle
                text="¿Cómo se llama tu producto?"
                required="*obligatorio"
              />
              <CustomInput
                className="h-10 w-[450px]"
                type="text"
                name="nombre"
                id="nombre"
                value={formulario.nombre}
                onChange={handleOnChangeText}
              />
            </div>
            <div className="my-10">
              <MediumTitle
                text="Correo electrónico de soporte"
                required="*obligatorio"
              />
              <CustomInput
                className="h-10 w-[450px]"
                type="email"
                name="supportemail"
                value={formulario.supportemail}
                onChange={handleOnChangeText}
                id="2"
              />
            </div>
            <div className="my-10">
              <MediumTitle
                text="¿De qué tipo es tu producto?"
                required="*obligatorio"
              />
              <div className="my-4 flex flex-col items-start gap-y-5">
                <CustomRadio
                  text="Software"
                  type="radio"
                  name="tipo"
                  id="software"
                  value="Software"
                  checked={formulario.tipo === "Software"}
                  onChange={handleOnChangeRadio}
                />
                <CustomRadio
                  text="Cursos y aprendizaje"
                  type="radio"
                  name="tipo"
                  id="Cursos y aprendizaje"
                  value="Cursos y aprendizaje"
                  checked={formulario.tipo === "Cursos y aprendizaje"}
                  onChange={handleOnChangeRadio}
                />
                <CustomRadio
                  text="Plantillas"
                  type="radio"
                  name="tipo"
                  id="Plantillas"
                  value="Plantillas"
                  checked={formulario.tipo === "Plantillas"}
                  onChange={handleOnChangeRadio}
                />
                <CustomRadio
                  text="Recursos creativos"
                  type="radio"
                  name="tipo"
                  id="Recursos creativos"
                  value="Recursos creativos"
                  checked={formulario.tipo === "Recursos creativos"}
                  onChange={handleOnChangeRadio}
                />
              </div>
            </div>
            <div className="flex gap-x-8 bg-blue-400/25  p-3 w-[800px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="bg-black"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-black text-mpequeño font-sans leading-normal w-[700px]">
                Para garantizar que mostramos los mejores productos en
                AppCompleto, nuestro equipo no acepta herramientas que estén
                creadas o dependan de scripts de terceros. Si su producto entra
                en esta categoría, le animamos a explorar opciones alternativas.
              </p>
            </div>
            <div className="my-7">
              <MediumTitle
                text="Llama nuestra atención"
                required="*obligatorio"
              />
              <p className="my-3 text-gray-600 text-mpequeño font-sans leading-normal w-96">
                ¿Cuál es tu discurso? Informe a los compradores sobre su
                producto en 100 caracteres o menos.
              </p>
              <textarea
                className="h-20 w-[450px] border border-black text-black hover:border-blue-500"
                maxLength={100}
                name="descripcion"
                value={formulario.descripcion}
                onChange={handleOnChangeText}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
