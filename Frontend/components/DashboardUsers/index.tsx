"use client";

import { Navbar } from "../utils";
import { usePathname } from "next/navigation";
const StepsCreateProduct = () => {
  const pathname = usePathname();
  return (
    <div className="container">
      <div className="h-16 flex items-center gap-x-8">
        <Navbar
          ruta="/dashboard/crear/descripcion"
          title="Descripcion basica"
          path={pathname}
        />
        <Navbar
          ruta="/dashboard/crear/categorias"
          title="Categorias"
          path={pathname}
        />
        <Navbar ruta="/dashboard/crear/detalles" title="Detalles" path={pathname} />
        <Navbar ruta="/dashboard/crear/precios" title="Precios" path={pathname} />
        <Navbar ruta="/dashboard/crear/canje" title="Canje" path={pathname} />
      </div>
      <hr className="border-t-[2px] border-gray-300 -mt-[10px]" />
    </div>
  );
};

export default function Header() {
  return (
    <div>
      <div className="bg-header p-6 flex justify-between items-center">
        <h1 className="text-white font-negrita text-mediano">AppCompleto</h1>
        <button className="bg-boton p-2 rounded-md hover:bg-boton/65 font-mediana">
          Guardar
        </button>
      </div>
      <div>
        <StepsCreateProduct />
      </div>
    </div>
  );
}
