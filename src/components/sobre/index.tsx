import Area from "../pagina/Area";
import ImagemResponsiva from "../pagina/ImagemResponsiva";
import principal2 from "../../../public/principal2.svg";
import TextoSobreMim from "./SobreMim";
import Image from "next/image";


export default function Sobre() {
    return (
        <Area id="sobre" className="
        lg:mt-20
        mb-20
        ">
            <div className="
             justify-center items-center
             container flex flex-col lg:flex-row 
             ">
                
                <div className="h-full w-full
                flex justify-center items-center
                lg:justify-start
                
                ">

                <Image src={principal2} alt={"imagem"} className="
                w-[100%] h-[120px]
                sm:w-[300px] sm:h-[330px]
                md:w-[350px] md:h-[365px]
                lg:w-[550px] lg:h-[400px]
                rounded-xl
                " />
                </div>
                <TextoSobreMim />
            </div>
            
        </Area>
    )
}