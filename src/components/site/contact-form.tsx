"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_EMAIL = "aahruran@gmail.com";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  function updateField(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus(null);

    const trimmed = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setError("Please fill in all fields before sending.");
      return;
    }

    if (!isValidEmail(trimmed.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact: ${trimmed.name}`);
    const body = encodeURIComponent(
      `Name: ${trimmed.name}\nEmail: ${trimmed.email}\n\nOpportunity Details:\n${trimmed.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with a pre-filled message. Thank you for reaching out.");
    setValues(initialState);
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit} noValidate>
      <Input
        placeholder="Name"
        required
        value={values.name}
        onChange={(event) => updateField("name", event.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        required
        value={values.email}
        onChange={(event) => updateField("email", event.target.value)}
      />
      <Textarea
        placeholder="Tell me about the opportunity"
        rows={6}
        required
        value={values.message}
        onChange={(event) => updateField("message", event.target.value)}
      />

      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      {status ? <p className="text-sm text-emerald-400">{status}</p> : null}

      <Button type="submit" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
        Send Message
      </Button>
    </form>
  );
}