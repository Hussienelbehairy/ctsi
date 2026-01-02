import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ScrollView } from "./scroll-view";

const testimonials = [
  {
    name: "Mohamed Badie",
    role: "CEO",
    company: "Badie Architects",
    quote:
      "From concept drawings to installation, the execution was flawless. Perfect alignment, clean finishes, and a team that respects timelines.",
    logo: "/testimonials/badiearchitects.png",
    tone: "hero",
  },
  {
    name: "Ghada Koraiem",
    role: "Office Manager",
    company: "Rowad Modern Engineering",
    quote:
      "Clear communication, transparent pricing, and craftsmanship you can feel. Our storage and pantry fit-out arrived exactly as promised.",
    logo: "/testimonials/rowad.png",
    tone: "accent",
  },
  {
    name: "Fady Alfonse",
    role: "COO",
    company: "Archway",
    quote:
      "They think like designers and build like engineers. Measurements were spot-on and details were sharp.",
    logo: "/testimonials/archway.png",
    tone: "muted",
  },
  {
    name: "Nancy Badawi",
    role: "CEO",
    company: "Interiors Inc.",
    quote:
      "Premium materials, meticulous finishing, and a team that actually listens. The kitchen turned out beautiful and practical.",
    logo: "/testimonials/interiorsinc.png",
    tone: "muted",
  },
];

const LogoMark = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex h-20 w-48 items-center justify-center sm:h-24 sm:w-56 md:h-28 md:w-60">
    <Image
      src={src}
      alt={alt}
      width={260}
      height={104}
      className="max-h-24 w-auto object-contain"
      sizes="(min-width: 1024px) 240px, (min-width: 768px) 200px, 160px"
      priority
    />
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Built by Craftsmen. Trusted by Clients.
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground">
              Real projects, refined finishes, and partnerships built on trust.
              Here’s what clients say about our bespoke kitchens, wardrobes, and
              interiors.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item) => (
              <Card
                key={item.name}
                className="group h-full rounded-2xl border border-black/5 bg-white/95 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <CardContent className="flex h-full flex-col gap-6 p-5 sm:p-6">
                  <p className="text-sm font-medium leading-relaxed text-zinc-900 sm:text-base md:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-auto flex flex-col items-center gap-3 border-t border-black/10 pt-4 text-center">
                    <LogoMark src={item.logo} alt={item.company} />
                    <div className="space-y-1">
                      <cite className="text-sm font-semibold not-italic text-zinc-900">
                        {item.name}
                      </cite>
                      <div className="text-xs font-semibold uppercase tracking-[0.08em] text-orange-600">
                        {item.role}
                      </div>
                      <span className="text-muted-foreground block text-xs">
                        {item.company}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
