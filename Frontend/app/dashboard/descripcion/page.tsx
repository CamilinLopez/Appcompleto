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
    tipo: "",
  });

  const handleOnChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    if (formulario.tipo === e.target.value)
      useFormulario({ ...formulario, [e.target.name]: "" });
    else useFormulario({ ...formulario, [e.target.name]: e.target.value });
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
                id="1"
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
                {/*
                <input
                  type="radio"
                  name="tipo"
                  id="software"
                  value="Software"
                  checked={formulario.tipo === "Software"}
                  onChange={handleOnChangeRadio}
                  className="h-5 w-5"
                />
                <p className="text-black" >hola</p>
                <input
                  type="radio"
                  name="tipo"
                  id="Cursos y aprendizaje"
                  value="Cursos y aprendizaje"
                  checked={formulario.tipo === "Cursos y aprendizaje"}
                  onChange={handleOnChangeRadio}
                  className="h-5 w-5"
                />
                
                <input
                  type="radio"
                  name="plantillas"
                  id="Plantillas"
                  value="Plantillas"
                  checked={}
                  onChange={}
                  className="h-5 w-5"
                />
                <input
                  type="radio"
                  name="recursosCreativos"
                  id="Recursos creativos"
                  value="Recursos creativos"
                  checked={}
                  onChange={}
                  className="h-5 w-5"
                /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
