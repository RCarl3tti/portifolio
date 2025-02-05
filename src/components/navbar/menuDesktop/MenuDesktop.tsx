import ItemMenuDesktop from "./ItemMenuDesktop";

export default function MenuDesktop() {
  return (
    <div className="hidden md:block">
      <div className="flex gap-4">
        <ItemMenuDesktop titulo="Home" href="#inicio" />
        <ItemMenuDesktop titulo="Sobre" href="#sobre" />
        <ItemMenuDesktop titulo="Projetos" href="/" />
        <ItemMenuDesktop titulo="Contato" href="/" />
      </div>
    </div>
  );
}
