import Link from "next/link";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[background]/95 backdrop-blur supports-[backdrop-filter]:bg-[background]/60">
      <div className="flex h-14 items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Dra. Camila Cendon"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#sobre"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-[#dea983] hover:underline underline-offset-4"
          >
            Sobre
          </Link>
          <Link
            href="#trajectoria"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-[#dea983] hover:underline underline-offset-4"
          >
            Trajetória Profissional
          </Link>
          <Link
            href="#servicos"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-[#dea983] hover:underline underline-offset-4"
          >
            Atendimentos
          </Link>
          <Link
            href="#atendimentos"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-[#dea983] hover:underline underline-offset-4"
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-[#dea983] text-white hover:bg-[#d49771] transition-colors hover:scale-105"
            asChild
          >
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
            >
              Agendar Consulta
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="transition-transform hover:scale-150 hover:text-[#dea983]"
            asChild
          >
            <Link
              href={
                process.env.NEXT_PUBLIC_INSTAGRAM_LINK ||
                "https://www.instagram.com/dracamilacendon.reumatologia/"
              }
              target="_blank"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="transition-transform hover:scale-150 hover:text-[#dea983]"
            asChild
          >
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
            >
              <FaWhatsapp className="h-4 w-4 mr-2" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
