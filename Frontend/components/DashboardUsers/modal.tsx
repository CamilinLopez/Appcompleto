import { useState, ChangeEvent } from "react";
import { BigTitle } from "../utils";

export default function Modal({ closeModal }: { closeModal: Function }) {
  const [imagen, setImagen] = useState<string>("");

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onload = async () => {
      if (typeof reader.result === "string") {
        setImagen(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
      <div className="w-[750px] h-[550px] bg-white rounded-md">
        <div className="m-9">
          <div className="flex justify-between">
            <BigTitle text="Cargar imagen" />
            <button onClick={() => closeModal()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="bg-black"
                className="w-8 h-8 cursor-pointer hover:fill-slate-700"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="my-4 w-full h-[450px]">
            <div className="overflow-hidden rounded shadow-lg">
              <label
                htmlFor="upload"
                className="relative block h-[370px] cursor-pointer bg-gray-200 hover:bg-gray-300"
              >
                <input
                  id="upload"
                  type="file"
                  name="imagen"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  onChange={handleImageUpload}
                />
                {imagen ? (
                  <img
                    src={imagen}
                    alt="Uploaded"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-12 w-12 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                )}
              </label>
              <div className="px-6 py-4 flex justify-between">
                <div>
                  <div className="text-black mb-2 text-pequeño font-mediana">
                    Subir imagen
                  </div>
                  <p className="text-base text-gray-700">
                    Haz clic o arrastra y suelta una imagen aquí.
                  </p>
                </div>
                <button className="text-black">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
