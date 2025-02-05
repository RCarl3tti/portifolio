import Logo from "../pagina/Logo";
import Area from "../pagina/Area";

export default function Rodape() {
    return (
        <Area className="bg-[#1E2026] dark:bg-black/50  py-10">
            
            <div className="flex flex-col md:flex-row w-full md:justify-between items-center mt-10">
                
                <Logo width={200} height={200} completa/>
                <p className="text-zinc-100 lg:ml-3 mt-7 md:mt-0 text-center">
                    Construido por <span className="font-bold">RenanCarletti</span> ® {new Date().getFullYear()}
                </p>
            </div>
        </Area>
    )
}