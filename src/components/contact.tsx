"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MapPin, PhoneCall, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function FeaturesSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiry: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (field: "name" | "phone" | "inquiry") =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (status === "success" || status === "error") {
        setStatus("idle");
        setError(null);
      }
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your message right now.");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", inquiry: "" });
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Unable to send your message right now."
      );
    }
  };

  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  Get in touch
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">
                  We&apos;d love to hear from you! Feel free to reach out to us
                  for any inquiries or to visit our showroom.
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Link
                    href="mailto:info@cuttosize-interiors.com"
                    className="hover:text-accent-foreground"
                  >
                    <Mail className="size-5 mr-2 inline" />
                    <span>info@cuttosize-interiors.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+201090029220"
                    className="hover:text-accent-foreground"
                  >
                    <PhoneCall className="size-5 mr-2 inline" />
                    <span>+201090029220</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://maps.app.goo.gl/NnfetqwdryhvrxpV6"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent-foreground"
                  >
                    <MapPin className="size-5 mr-2 inline" />
                    <span>95 Abo Bakr el Seddik, Heliopolis</span>
                  </Link>
                </li>
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <ScrollView>
              <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
                <div>
                  <h3 className="text-lg font-semibold">
                    Let&apos;s get you to the right place
                  </h3>
                  <p className="mt-4 text-sm">
                    Reach out to our sales team! We’re eager to learn more about
                    how you plan to use our application.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
                >
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange("name")}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      autoComplete="tel"
                      placeholder="+20 100 000 0000"
                      required
                    />
                  </div>

                  {/* <div>
                            <Label htmlFor="country">Country/Region</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Country/Region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">DR Congo</SelectItem>
                                    <SelectItem value="2">United States</SelectItem>
                                    <SelectItem value="3">France</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="website">Company Website</Label>
                            <Input type="url" id="website" />
                            <span className="text-muted-foreground inline-block text-sm">Must start with 'https'</span>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="job">Job function</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Job Function" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Finance</SelectItem>
                                    <SelectItem value="2">Education</SelectItem>
                                    <SelectItem value="3">Legal</SelectItem>
                                    <SelectItem value="4">More</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  <div>
                    <Label htmlFor="msg">Inquiry</Label>
                    <Textarea
                      id="msg"
                      rows={3}
                      value={formData.inquiry}
                      onChange={handleChange("inquiry")}
                      required
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500" role="alert">
                      {error}
                    </p>
                  )}
                  {status === "success" && (
                    <p className="text-sm text-green-600">
                      Thanks! We received your message and will reach out soon.
                    </p>
                  )}

                  <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </form>
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
