"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { event } from "@/lib/gtag";

interface NewsletterData {
  email: string;
  interests: string[];
  consent: boolean;
}

export function NewsletterSignup() {
  const [formData, setFormData] = useState<NewsletterData>({
    email: "",
    interests: [],
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const interestOptions = [
    { id: "artrite", label: "Artrite e Artrose" },
    { id: "fibromialgia", label: "Fibromialgia" },
    { id: "lupus", label: "Lúpus e Doenças Autoimunes" },
    { id: "prevencao", label: "Prevenção e Cuidados" },
    { id: "tratamentos", label: "Novos Tratamentos" },
  ];

  const handleInterestChange = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("É necessário aceitar os termos para continuar.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você integraria com seu provedor de email marketing
      // Exemplos: Mailchimp, SendinBlue, ConvertKit, etc.

      // Track do evento de inscrição na newsletter
      event({
        action: "newsletter_signup",
        category: "lead_generation",
        label: formData.interests.join(","),
        value: 1,
      });

      // Simulação de envio
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubscribed(true);
    } catch (error) {
      console.error("Erro ao inscrever na newsletter:", error);
      alert("Erro ao inscrever. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className="p-6 bg-blue-50 border-blue-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            ✅ Inscrição realizada com sucesso!
          </h3>
          <p className="text-blue-700">
            Você receberá conteúdos exclusivos sobre reumatologia no seu email.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-[#72132E] mb-2">
          📧 Newsletter Médica
        </h3>
        <p className="text-gray-600 text-sm">
          Receba dicas de saúde e novidades sobre reumatologia
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            required
            placeholder="Seu melhor email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#72132E]"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Temas de interesse:
          </label>
          <div className="space-y-2">
            {interestOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={formData.interests.includes(option.id)}
                  onChange={() => handleInterestChange(option.id)}
                  className="rounded"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="newsletter-consent"
            required
            className="mt-1"
            checked={formData.consent}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, consent: e.target.checked }))
            }
          />
          <label htmlFor="newsletter-consent" className="text-xs text-gray-600">
            Aceito receber emails com conteúdo sobre saúde e reumatologia. Posso
            cancelar a qualquer momento. *
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          {isSubmitting ? "Inscrevendo..." : "📩 Quero Receber"}
        </Button>
      </form>
    </Card>
  );
}
