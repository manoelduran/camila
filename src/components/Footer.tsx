import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#5d0625] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Dra. Camila Cendon</h3>
            <p className="text-white">
              Médica Reumatologista em Salvador
              <br />
              CRM 30024-BA / RQE 20434
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contato</h3>
            <div className="flex items-center gap-4">
              <Link
                href={
                  process.env.NEXT_PUBLIC_INSTAGRAM_LINK ||
                  "https://www.instagram.com/dracamilacendon.reumatologia/"
                }
                className="text-white hover:text-black"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                className="text-white hover:text-black"
                target="_blank"
              >
                <FaWhatsapp className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-white">(71) 3022-9886</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#sobre" className="text-white hover:text-black">
                Sobre
              </Link>
              <Link href="#trajectoria" className="text-white hover:text-black">
                Trajetória Profissional
              </Link>
              <Link href="#servicos" className="text-white hover:text-black">
                Atendimentos
              </Link>
              <Link
                href="#atendimentos"
                className="text-white hover:text-black"
              >
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
