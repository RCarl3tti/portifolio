import Area from "../pagina/Area";
import ImagemResponsiva from "../pagina/ImagemResponsiva";
import Ola from "./Ola";
import principal from "../../../public/principal.svg";



export default function Apresentacao() {
  return (
    <Area id="inicio" className="pt-20">
            <div className={`
                flex items-center justify-around
                h-[500px]
            
            `}>
                <Ola/>
                <ImagemResponsiva imagem={principal} className="hidden md:inline"/>
            </div>
        </Area>
  );
}
