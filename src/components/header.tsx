"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/content/nav";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);

  const isScrolled = true;
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(

            "mx-auto mt-5 md:mt-8 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",

            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {NAV_LINKS.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block duration-150 hover:text-primary"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {NAV_LINKS.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block duration-150 text-muted-foreground hover:text-primary"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Link
                  href="https://wa.me/201090029220"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex items-center text-green-600 transition hover:text-green-700"
                >
                  <WhatsAppIcon className="size-5 sm:size-6" />
                </Link>
                {/* <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && "lg:hidden")}
                >
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button> */}
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "group relative overflow-hidden border border-orange-200/70 bg-gradient-to-r from-white/70 via-orange-50/40 to-white/40 text-foreground shadow-[0_10px_32px_rgba(249,115,22,0.18)] backdrop-blur-xl transition-all duration-300",
                    "hover:-translate-y-0.5 hover:border-orange-400 hover:from-orange-100 hover:via-white hover:to-orange-50 hover:shadow-[0_18px_46px_rgba(249,115,22,0.25)]",
                    "focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/70 before:via-white/20 before:to-white/5 before:opacity-80 before:transition-opacity before:content-[''] group-hover:before:opacity-50",
                    "after:absolute after:-left-1/2 after:top-0 after:h-full after:w-2/3 after:bg-white/40 after:blur-3xl after:opacity-0 after:content-[''] group-hover:after:opacity-70",
                    isScrolled ? "lg:inline-flex" : "hidden"
                  )}
                >
                  <a
                    href="https://maps.app.goo.gl/NnfetqwdryhvrxpV6"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MapPin className="h-4 w-4 text-black" />
                    <span className="font-medium">Visit Showroom</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
