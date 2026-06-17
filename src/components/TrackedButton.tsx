"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { trackAppointmentClick, trackContactClick } from "@/lib/gtag";
import { type VariantProps } from "class-variance-authority";

interface TrackedButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  trackingType?: "appointment" | "contact";
  trackingLabel?: string;
  contactMethod?: "whatsapp" | "phone" | "email";
}

export const TrackedButton: React.FC<TrackedButtonProps> = ({
  children,
  trackingType,
  trackingLabel,
  contactMethod,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Executa tracking baseado no tipo
    if (trackingType === "appointment") {
      trackAppointmentClick(trackingLabel);
    } else if (trackingType === "contact" && contactMethod) {
      trackContactClick(contactMethod);
    }

    // Executa o onClick original se existir
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};
