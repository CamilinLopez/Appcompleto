import Link from "next/link";

const StepsCreateProduct = () => {
  return (
    <div className="container">
      <div className="h-16 flex items-center">
        <Link className="text-gris font-mediana" href={"/dashboard/descripcion"}>
          Descripcion basica
        </Link>
        <Link className="text-gris font-mediana mx-8" href={"/"}>
          Categorias
        </Link>
        <Link className="text-gris font-mediana mx-8" href={"/"}>
          Detalles
        </Link>
        <Link className="text-gris font-mediana mx-8" href={"/"}>
          Precios
        </Link>
        <Link className="text-gris font-mediana mx-8" href={"/"}>
          Canje
        </Link>
      </div>
      <hr className="border-t-2" />
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
