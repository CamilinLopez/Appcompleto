import { CustomInputProps } from "@/components/utils/interface";

export interface categoria {
  Software: string;
  CursosAprendizaje: string;
  Plantillas: string;
  Recursos: string;
  recursosCreativos: string;
}

export interface Producto {
  id: string;
  nombre: string;
  supportemail: string;
  tipo: string;
}

export interface CustomRadioProps extends CustomInputProps {
    text: string;
  }
  
