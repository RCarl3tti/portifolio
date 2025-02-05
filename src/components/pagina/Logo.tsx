import Image from "next/image";
import Link from "next/link";


interface LogoProps {
  completa?: boolean;
  width: number;
  height: number;
}


export default function Logo(props: LogoProps) {
    return (
        <div className="flex-shrink-0 ">
            <Link href="#inicio" className="text-2xl font-bold ">
              <Image src={props.completa ? "/logoNome.svg" : "/logo.svg"} alt="Logo" 
              width={props.width} 
              height={props.height} />
            </Link>
          </div>
    )
}