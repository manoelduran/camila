"use client";

import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-[#F9F5F4] bg-[#F9F5F4] backdrop-blur supports-[backdrop-filter]:bg-[#F9F5F4]/60">
      <div className="flex h-14 items-center justify-between px-6 gap-2 sm:gap-4 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
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

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="#sobre"
            className="text-sm text-[#5d0625] font-medium text-muted-foreground transition-all duration-200 hover:text-[#5d0625] hover:underline underline-offset-4"
          >
            Sobre
          </Link>
          <Link
            href="#trajectoria"
            className="text-sm text-[#5d0625] font-medium text-muted-foreground transition-all duration-200 hover:text-[#5d0625] hover:underline underline-offset-4"
          >
            Trajetória Profissional
          </Link>
          <Link
            href="#servicos"
            className="text-sm text-[#5d0625] font-medium text-muted-foreground transition-all duration-200 hover:text-[#5d0625] hover:underline underline-offset-4"
          >
            Atendimentos
          </Link>
          <Link
            href="#atendimentos"
            className="text-sm font-medium text-[#5d0625] text-muted-foreground transition-all duration-200 hover:text-[#5d0625] hover:underline underline-offset-4"
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Botão do menu mobile para navbar */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#5d0625]" />
            ) : (
              <Menu className="h-6 w-6 text-[#5d0625]" />
            )}
          </Button>

          {/* Botões sociais e agendamento - sempre visíveis */}
          <div className="flex items-center gap-2 lg:gap-4">
            <Button
              className="bg-[#72132E] text-white hover:bg-[#6b082a] transition-colors hover:scale-105
               text-xs px-2 py-1 sm:text-sm sm:px-3 sm:py-1.5 lg:text-base lg:px-4 lg:py-2"
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
              className="transition-transform hover:scale-150 hover:text-[#5d0625]"
              asChild
            >
              <Link
                href={
                  process.env.NEXT_PUBLIC_INSTAGRAM_LINK ||
                  "https://www.instagram.com/dracamilacendon.reumatologia/"
                }
                target="_blank"
              >
                <Instagram className="h-4 w-4 text-[#C15463]" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="transition-transform hover:scale-150 hover:text-[#5d0625]"
              asChild
            >
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
              >
                <FaWhatsapp className="h-4 w-4 text-[#C15463]" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - apenas navegação */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#F9F5F4] bg-[#F9F5F4]">
          <nav className="flex flex-col px-6 py-4 space-y-2">
            <Link
              href="#sobre"
              onClick={closeMenu}
              className="text-sm text-[#5d0625] font-medium transition-all duration-200 hover:text-[#5d0625] hover:underline underline-offset-4 py-3"
            >
              Sobre
            </Link>
            <Link
              href="#trajectoria"
              onClick={closeMenu}
              className="text-sm text-[#5d0625] font-medium transition-all duration-200 hover:text-[#5d0625] hover:underline underline-offset-4 py-3"
            >
              Trajetória Profissional
            </Link>
            <Link
              href="#servicos"
              onClick={closeMenu}
              className="text-sm text-[#5d0625] font-medium transition-all duration-200 hover:text-[#5d0625] hover:underline underline-offset-4 py-3"
            >
              Atendimentos
            </Link>
            <Link
              href="#atendimentos"
              onClick={closeMenu}
              className="text-sm text-[#5d0625] font-medium transition-all duration-200 hover:text-[#5d0625] hover:underline underline-offset-4 py-3"
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
