import Apresentacao from "@/components/apresentacao/Apresentacao";
import Contato from "@/components/contato";
import Navbar from "@/components/navbar/index";
import Projetos from "@/components/projetos";
import Rodape from "@/components/rodape";
import Sobre from "@/components/sobre";
export default function Home() {

  



  return (
    <div>
      <Navbar />
      <Apresentacao />
      <Sobre />
      <Projetos />
      <Contato />
      <Rodape />
      
    </div>
  );
}
