import Link from "next/link";

interface ItemMenuDesktopProps {
  href: string;
  titulo: string;
}

export default function ItemMenuDesktop(
  ItemMenuDesktopProps: ItemMenuDesktopProps
) {
  return (
    <Link
      href={ItemMenuDesktopProps.href}
      className="text-gray-400 hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium"
    >
        {ItemMenuDesktopProps.titulo}
    </Link>
  );
}
