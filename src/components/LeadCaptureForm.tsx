"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { event } from "@/lib/gtag";

interface FormData {
  name: string;
  email: string;
  phone: string;
  condition?: string;
  message?: string;
  consent: boolean;
}

export function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("É necessário aceitar os termos para continuar.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você integraria com seu backend ou serviço de email
      // Exemplos: EmailJS, Formspree, seu próprio backend

      // Track do evento de envio do formulário
      event({
        action: "form_submit",
        category: "lead_generation",
        label: "contact_form",
        value: 1,
      });

      // Simulação de envio
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);

      // Opcional: enviar para WhatsApp também
      const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${
        formData.message || "Gostaria de agendar uma consulta."
      }`;
      const whatsappUrl = `https://wa.me/5571999999999?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Track do redirecionamento para WhatsApp
      event({
        action: "whatsapp_redirect",
        category: "lead_generation",
        label: "form_completion",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-6 bg-green-50 border-green-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            ✅ Mensagem enviada com sucesso!
          </h3>
          <p className="text-green-700 mb-4">
            Entraremos em contato em breve para agendar sua consulta.
          </p>
          <Button
            onClick={() => {
              const phone = "5571999999999"; // Seu número do WhatsApp
              const message = `Olá! Acabei de enviar o formulário no site. Meu nome é ${formData.name}.`;
              window.open(
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
            className="bg-green-600 hover:bg-green-700"
          >
            📱 Falar no WhatsApp
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4 text-[#72132E]">
        Agende sua Consulta
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nome *</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#72132E]"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#72132E]"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Telefone/WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="(71) 99999-9999"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#72132E]"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Condição/Sintomas
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#72132E]"
            value={formData.condition}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, condition: e.target.value }))
            }
          >
            <option value="">Selecione (opcional)</option>
            <option value="artrite">Artrite</option>
            <option value="fibromialgia">Fibromialgia</option>
            <option value="lupus">Lúpus</option>
            <option value="artrose">Artrose</option>
            <option value="gota">Gota</option>
            <option value="dor_articular">Dores nas articulações</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Mensagem</label>
          <textarea
            rows={3}
            placeholder="Descreva brevemente seus sintomas ou dúvidas..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#72132E]"
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="consent"
            required
            className="mt-1"
            checked={formData.consent}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, consent: e.target.checked }))
            }
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            Aceito o tratamento dos meus dados para fins de agendamento de
            consulta, conforme a{" "}
            <a
              href="/politica-privacidade"
              className="text-[#72132E] underline"
            >
              Política de Privacidade
            </a>
            . *
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#72132E] hover:bg-[#72132E]/90"
        >
          {isSubmitting ? "Enviando..." : "📅 Agendar Consulta"}
        </Button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Ou entre em contato diretamente:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              event({
                action: "click",
                category: "contact",
                label: "whatsapp_direct",
              });
              window.open("https://wa.me/5571999999999", "_blank");
            }}
          >
            📱 WhatsApp
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              event({
                action: "click",
                category: "contact",
                label: "phone_direct",
              });
              window.open("tel:+5571999999999", "_blank");
            }}
          >
            📞 Ligar
          </Button>
        </div>
      </div>
    </Card>
  );
}
