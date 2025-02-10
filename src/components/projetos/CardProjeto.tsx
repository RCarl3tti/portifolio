import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSvelte,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import Link from "next/link";

interface CardProjetoProps {
  titulo: string;
  descricao: string;
  tecnologia: (keyof typeof tecnologias)[];
  data: string;
  imagem: any;
  deploy: string;
  github?: string;
}

const tecnologias = {
  javascript: <IconBrandJavascript />,
  typescript: <IconBrandTypescript />,
  svelte: <IconBrandSvelte />,
  react: <IconBrandReact />,
  next: <IconBrandNextjs />,
  tailwindcss: <IconBrandTailwind />,
};

export default function CardProjeto(props: CardProjetoProps) {
  return (
    <div
      className="
    overflow-hidden
    flex flex-col 
    transition-all hover:shadow-2xl
    rounded-lg
    w-72
    bg-[#353843]
    text-zinc-100
    group
    relative
    
    "
    >
      <div className="aspect-[3/2] overflow-hidden flex flex-1">
        <Image
          src={props.imagem}
          alt="Imagem do projeto"
          width={300}
          height={200}
          className="
          rounded-t-lg
          object-cover 
          transition-transform duration-300 
          group-hover:scale-105
          p-1
          
          "
        />
      </div>

      <div
        className="
        
      px-4 py-2 flex flex-1 flex-col"
      >
        <div className="flex items-center justify-between  text-zinc-400 ">
          <p className="text-sm text-muted-foreground">{props.data}</p>
          <div className="flex  text-white  rounded group-hover:text-[#6393F2]">
            {props.tecnologia.map((tecnologia, index) => (
              <span key={index}>{tecnologias[tecnologia]}</span>
            ))}
          </div>
        </div>

        <Link
          target="_blank"
          href={props.deploy}
          className="block space-y-1 py-3 "
        >
          <h3 className="font-semibold leading-none tracking-tight hover:text-white">
            {props.titulo}
          </h3>
          <p className="text-sm text-muted-foreground text-zinc-300 group-hover:text-white">
            {props.descricao}
          </p>
        </Link>
      </div>

      <Link
        target="_blank"
        href={props.github || "#"}
        className="absolute hidden group-hover:block top-2 right-2 bg-[#6393F2] shadow-md p-2 text-xs font-semibold rounded-lg text-zinc-100"
      >
        <div>
          <IconBrandGithub size={24} />
        </div>
      </Link>
    </div>
  );
}
