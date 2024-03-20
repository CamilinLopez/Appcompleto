import Link from "next/link";
import { CustomInputProps } from "./interface";

export const BigTitle = ({ text }: { text: string }) => {
  return <h1 className="text-black font-negrita text-mediano">{text}</h1>;
};

export const MediumTitle = ({
  text,
  required,
}: {
  text: string;
  required: string;
}) => {
  return (
    <div className="flex items-center">
      <h3 className="text-black font-mediana">{text}</h3>
      <p className="text-gray-600 mx-4 text-mpequeño">{required}</p>
    </div>
  );
};

export const CustomInput: React.FC<CustomInputProps> = ({
  className = "",
  ...props
}) => {
  return (
    <input
      className={`border border-black my-3 rounded-md text-black hover:border-blue-500 ${className}`}
      {...props}
    />
  );
};

export const Navbar = ({
  ruta,
  title,
  path,
}: {
  ruta: string;
  title: string;
  path: string;
}) => {
  const specificRoute = ruta === path;
  const backgroundcolor = specificRoute ? "bg-cyan-800" : "bg-white";
  return (
    <div className="flex-col items-start">
      <Link href={ruta} className="text-gris font-mediana">
        {title}
      </Link>
      <div className={`${backgroundcolor} h-[7px] w-auto mt-3`}></div>
    </div>
  );
};
