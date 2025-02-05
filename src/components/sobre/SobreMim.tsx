import {
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";

export default function SobreMim() {
  function renderizarBrands() {
    return (
      <div
        className="pl-8 pt-8
            flex items-center
            gap-2 
            justify-center
            lg:justify-start
            "
      >
        <IconBrandPython color="#6393F2" />
        <IconBrandNodejs color="#6393F2" />
        <IconBrandTailwind color="#6393F2" />
        <IconBrandReact color="#6393F2" />
        <IconBrandTypescript color="#6393F2" />
      </div>
    );
  }

  function renderizarTextoSobreMim() {
    return (
      <div className="
      flex flex-col
      gap-4
      p-8 mr-0
      lg:mr-10
      
      ">
        <div className="verde-principal font-meow text-xl">Sobre mim</div>
        <div className="text-xl text-zinc-100 font-semibold">
          Apaixonado por aprender de tudo um pouco e encontrar soluções práticas
          usando diversas tecnologias
        </div>
        <div className="text-md text-zinc-300 font-normal">
          Busco sempre simplificar problemas complexos, aplicando criatividade e
          inovação no dia a dia. Tenho facilidade em trabalhar em equipe, sou
          comunicativo, resiliente e focado em alcançar resultados de forma
          eficiente.
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderizarBrands()}
      {renderizarTextoSobreMim()}
    </div>
  );
}
