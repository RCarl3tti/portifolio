import { ArrowRight, FileUser } from "lucide-react";





export default function Ola() {
  
  const renderizarSaudacao = () => {
    return (
      <div
        className={`
                    flex flex-col items-center md:items-start text-4xl lg:text-6xl
                    font-light 
                `}
      >
        <div>
          <h1>Olá, eu sou o</h1>
        </div>
        <div className="flex gap-2 azul-principal">
          <span className="font-normal ">Renan</span>
          <span className="font-bold">Carletti</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-5 ">
      
      {renderizarSaudacao()}
     

      <div className="text-xl  font-semibold text-zinc-500 text-center sm:text-left">
        Desenvolvedor full-stack e entusiasta de inovação
      </div>
      <div>


      <div className="text-md  font-normal text-zinc-500 text-center sm:text-left ">
        Mais de 2 anos de experiência na área de tecnologia e na construção de
      </div>
      <div className="text-md  font-normal text-zinc-500 text-center sm:text-left ">
        aplicativos web e móveis inovadores usando tecnologias como React,
      </div>
      <div className="text-md  font-normal text-zinc-500 text-center sm:text-left ">
        React Native, Node.js, entre outras.
      </div>
      </div>

      <div className="flex justify-center sm:justify-start items-center gap-2">
        <div
          className={`
                    flex items-center gap-2 cursor-pointer
                    text-zinc-300 px-5 py-2.5
                    button-color-1 rounded-md
                `}
        >
          <FileUser />
          <span className="font-normal md:text-sm text-base">
            <span className="hidden sm:inline">Download </span> CV
          </span>
        </div>

        <div
          className={`
                        flex items-center gap-2 cursor-pointer
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white px-5 py-2.5 rounded-md
                    `}
        >
          <span className="font-normal md:text-sm text-base">
             <span className="hidden sm:inline">Entrar em</span> Contato <ArrowRight className="hidden lg:inline" />
          
          </span>
        </div>
      </div>
    </div>
  );
}
