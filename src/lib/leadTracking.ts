// Funções auxiliares para tracking avançado de leads

import { event } from "./gtag";

// Track quando alguém inicia o preenchimento do formulário
export const trackFormStart = (formType: "contact" | "newsletter") => {
  event({
    action: "form_start",
    category: "lead_generation",
    label: formType,
  });
};

// Track quando alguém abandona o formulário
export const trackFormAbandon = (
  formType: "contact" | "newsletter",
  fieldName?: string
) => {
  event({
    action: "form_abandon",
    category: "lead_generation",
    label: `${formType}_${fieldName || "unknown"}`,
  });
};

// Track interesse em condições específicas
export const trackConditionInterest = (condition: string) => {
  event({
    action: "condition_interest",
    category: "medical_interest",
    label: condition,
  });
};

// Track tentativas de contato direto
export const trackDirectContact = (
  method: "phone" | "whatsapp" | "email",
  source?: string
) => {
  event({
    action: "direct_contact_attempt",
    category: "contact",
    label: `${method}_${source || "unknown"}`,
  });
};

// Track engagement com conteúdo médico
export const trackMedicalContentEngagement = (
  contentType: string,
  action: "read" | "share" | "download"
) => {
  event({
    action: `content_${action}`,
    category: "content_engagement",
    label: contentType,
  });
};

// Track intenção de agendamento (mas sem conversão)
export const trackAppointmentIntent = (
  step: "button_click" | "form_view" | "form_start" | "form_complete"
) => {
  event({
    action: "appointment_funnel",
    category: "conversion_funnel",
    label: step,
  });
};

// Para acompanhar o funil de conversão completo
export const trackConversionFunnel = (
  stage: "awareness" | "interest" | "consideration" | "intent" | "conversion"
) => {
  event({
    action: "funnel_progression",
    category: "conversion_funnel",
    label: stage,
  });
};

// Track interações com informações sobre localização/horários
export const trackLocationInterest = (
  location: string,
  action: "view" | "directions" | "hours_check"
) => {
  event({
    action: "location_interest",
    category: "location",
    label: `${location}_${action}`,
  });
};
