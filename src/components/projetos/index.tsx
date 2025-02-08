import Area from "../pagina/Area";
import CardProjeto from "./CardProjeto";
import ordemLivros from "../../../public/projetos/ordem-livros.jpg"
import portifolio from "../../../public/projetos/portifolio.png"


export default function Projetos() {
    


    return (
        <Area id="projetos" className="">
            <div className=" flex gap-2 justify-start items-center w-full flex-col">
                <div className="flex flex-col justify-center items-center gap-3 p-3">
                    <h1 className="
                    font-semibold
                    font-meow
                    verde-principal">Projetos</h1>
                    <h2 className="text-lg
                    font-semibold
                    ">Dê uma olhada nos meus projetos em destaque</h2>
                </div>
                <div className="flex flex-col gap-10 p-3  lg:flex-row
                         
                ">
                    <CardProjeto 
                        titulo="Ordem dos Livros"
                        descricao="um projeto para organizar e gerenciar sua ordem de leitura de livros!"
                        tecnologia={"svelte"}
                        data="Dez 2024"
                        imagem={ordemLivros}
                        deploy="https://ordem-dos-livros.vercel.app/"
                    />
                    <CardProjeto 
                        titulo="Portifólio"
                        descricao="Meu portifólio pessoal!"
                        tecnologia={"svelte"}
                        data="Jan - Fev 2025"
                        imagem={portifolio}
                        deploy="/"

                    />
                    <CardProjeto 
                        titulo="Ordem dos Livros"
                        descricao="um projeto para organizar e gerenciar sua ordem de leitura de livros!"
                        tecnologia={"svelte"}
                        data="Jan - Fev 2025"
                        imagem={ordemLivros}
                        deploy="https://ordem-dos-livros.vercel.app/"

                    />
                </div>
                <div>
                    <button className="bg-[#6393F2] shadow-md m-5 p-2 text-xs font-semibold rounded-lg text-zinc-100">Ver mais</button>
                </div>
            </div>
        </Area>
    )
}