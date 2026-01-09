"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Loader2, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import LogoCloud from "@/components/sections/home/logo-cloud";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiry: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const resetForm = () => {
    setFormData({ name: "", phone: "", inquiry: "" });
    setStatus("idle");
    setError(null);
  };

  const handleFieldChange =
    (field: "name" | "phone" | "inquiry") =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      if (status === "success" || status === "error") {
        setStatus("idle");
        setError(null);
      }

      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to send your request right now."
        );
      }

      setStatus("success");
      setFormData({ name: "", phone: "", inquiry: "" });
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your request right now."
      );
    }
  };

  const closeModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="overflow-hidden">
        {isModalOpen && (
          <div
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 px-4 py-10 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Request a consultation"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/95"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close consultation form"
                className="absolute right-4 top-4 text-zinc-500 transition hover:text-zinc-800 dark:hover:text-zinc-100"
              >
                <X className="size-5" />
              </button>
              <h3 className="text-xl font-semibold">Request a consultation</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Share your details and we&apos;ll get back to you shortly.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="consult-name">Name</Label>
                  <Input
                    id="consult-name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleFieldChange("name")}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consult-phone">Phone</Label>
                  <Input
                    id="consult-phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleFieldChange("phone")}
                    required
                    placeholder="+20 100 000 0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consult-inquiry">Inquiry</Label>
                  <Textarea
                    id="consult-inquiry"
                    rows={4}
                    value={formData.inquiry}
                    onChange={handleFieldChange("inquiry")}
                    required
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}
                {status === "success" && (
                  <p className="text-sm text-green-600">
                    Thanks! We received your request and will reach out soon.
                  </p>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={closeModal}
                    className="text-foreground"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md hover:from-orange-500 hover:to-orange-600"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send request"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        <section className="flex min-h-screen flex-col">
          <div className="relative flex flex-1 pt-16 md:pt-24 pb-12">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div className="absolute inset-0 -z-10 h-screen overflow-hidden border border-black/10 dark:border-white/5">
                <video
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                  className="size-full -scale-x-100 object-cover opacity-60 md:opacity-50 blur-sm brightness-75 invert-0 dark:opacity-50 dark:brightness-50 dark:invert"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </AnimatedGroup>

            <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 sm:px-6">
              <div className="w-full">
                <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0 w-full translate-y-8 md:translate-y-12 lg:translate-y-24">
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.4}
                    as="h1"
                    className="mt-2 md:mt-3 text-balance text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-semibold leading-tight"
                  >
                    Custom Kitchens, Wardrobes, and Interiors Crafted in Cairo.
                  </TextEffect>
                  <AnimatedGroup
                    variants={{
                      container: {
                        visible: {
                          transition: {
                            staggerChildren: 0.08,
                            delayChildren: 0.7,
                          },
                        },
                      },
                      ...transitionVariants,
                    }}
                    className="mx-auto mt-4 md:mt-6 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 md:gap-3"
                  >
                    {["Kitchens", "Bathrooms", "Wardrobes"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-background/80 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium tracking-wide backdrop-blur-md dark:border-white/10 dark:bg-background/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </AnimatedGroup>
                  <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.95}
                    as="p"
                    className="mx-auto mt-4 md:mt-6 max-w-2xl px-2 text-balance text-sm sm:text-base md:text-lg italic"
                  >
                    Interior design, bespoke cabinetry, and full fit-outs crafted with precision, premium materials, and expert craftsmanship—specializing in kitchens, wardrobes, and bathrooms tailored to your lifestyle.
                  </TextEffect>

                  <AnimatedGroup
                    variants={{
                      container: {
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 1.25,
                          },
                        },
                      },
                      ...transitionVariants,
                    }}
                    className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-3 px-2 sm:px-1 w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      type="button"
                      onClick={() => {
                        resetForm();
                        setIsModalOpen(true);
                      }}
                      className="h-12 sm:h-10 rounded-full px-6 sm:px-4 text-sm font-semibold text-white bg-white/15 border border-white/30 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:bg-orange-500/90 hover:border-orange-500 hover:text-white transition-colors w-full sm:w-auto"
                    >
                      <span className="text-nowrap">Request a Consultation</span>
                      <ArrowRight className="size-4 ml-1" />
                    </Button>
                  </AnimatedGroup>
                </div>
              </div>
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 1.45,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 min-w-0">
                  <div className="flex items-center gap-3 lg:border-r lg:border-border lg:pr-6 min-w-0 pl-6 sm:pl-8 lg:pl-10">
                    <div className="min-w-0 max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] mx-auto text-center">
                      <a
                        href="https://maps.app.goo.gl/NnfetqwdryhvrxpV6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold hover:text-primary transition-colors break-words leading-tight"
                      >
                        Sourcing from the best
                        <br />
                        global brands
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex-1 min-w-0">
                    <LogoCloud />
                  </div>
                </div>
            </div>
          </AnimatedGroup>
        </section>
      </div>
    </>
  );
}
