import Area from "../pagina/Area";
import CardProjeto from "./CardProjeto";


export default function Projetos() {
    return (
        <Area id="projetos" className="bg-red-500">
            <div className="bg-green-500 flex gap-2 justify-start items-center h-96 w-full flex-col">
                <div className="flex flex-col justify-center items-center gap-3 p-3 bg-blue-500">
                    <h1>Projetos</h1>
                    <h2>Dê uma olhada nos meus projetos em destaque</h2>
                </div>
                <div>
                    <CardProjeto />
                </div>
            </div>
        </Area>
    )
}