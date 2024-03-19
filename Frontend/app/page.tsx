import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-white">
      <button className="bg-boton m-20 p-2 px-5 rounded-lg hover:bg-boton/65">
        hola
      </button>
      <div className="bg-anuncio text-white">
        <h1 className="text-grande font-negrita text-fondo">bigger rfd</h1>
        <h2 className="text-mediano font-negrita">medium</h2>
        <p className="text-pequeño font-normal">small</p>
        <p className="text-mpequeño font-normal">ultrasmall</p>
        <button className="bg-boton m-20 p-2 px-5 rounded-lg hover:bg-boton/65 text-white text-mpequeño font-mediana">
          hola
        </button>
      </div>
    </main>
  );
}
