import { BigTitle, MediumTitle, CustomInput } from "@/components/utils";

export default function page() {
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
                className="h-10 w-[500px]"
                type="text"
                name="nameProduct"
                id="1"
              />
            </div>
            <div className="my-10">
              <MediumTitle
                text="Correo electrónico de soporte"
                required="*obligatorio"
              />
              <CustomInput
                className="h-10 w-[500px]"
                type="email"
                name="supportEmail"
                id="2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
