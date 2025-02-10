import Image from "next/image";
import Area from "../pagina/Area";
import contato from "../../../public/contato.jpg";
import Formulario from "./Formulario";

export default function Contato() {
  return (
    <Area id="contato">
      <div className="container">
        <div className="gap-5 flex flex-col items-center md:items-start justify-between md:flex-row p-5 ">
          <div className="flex flex-col items-center md:items-start gap-5 md:w-[50%] ">
            <Image
              src={contato}
              width={160}
              alt="Contato"
              className="profile-image"
            />
            
            <h1 className="font-meow text-sm text-[#6393F2]">Contato</h1>
            <p>Gostou do meu trabalho? Vamos trabalhar juntos</p>
            <p className="text-xs text-center md:text-left text-zinc-300">
              Estou sempre pronto para bater um papo. Envie-me um e-mail para
              carletti95@gmail.com ou entre em contato via redes sociais.
            </p>
          </div>
          <div className=" flex w-full items-center justify-center md:w-[50%]">
            <Formulario />
          </div>
        </div>
      </div>
    </Area>
  );
}
