import Area from "../pagina/Area";
import TextoSobreMim from "./SobreMim";
import Animacao from "./Animacao";

export default function Sobre() {
  return (
    <Area
      id="sobre"
      className="
        lg:mt-20
        mb-10
        "
    >
      <div
        className="
             justify-center items-center
             container flex flex-col lg:flex-row 
             "
      >
        <div
          className="h-full w-full
                flex justify-center items-center
                lg:justify-start
                
                "
        >
          <Animacao />
        </div>
        <TextoSobreMim />
      </div>
    </Area>
  );
}
