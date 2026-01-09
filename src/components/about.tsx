import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Design with Purpose",
    description:
      "Our interiors aren’t designed to impress visually alone. Every kitchen, wardrobe, and space is engineered for functionality, efficiency, and long-term use.",
  },
  {
    title: "Collaboration First",
    description:
      "We work with our clients, not around them. Your needs, lifestyle, and vision shape every decision — from layout to material selection.",
  },

  {
    title: "Clear & Transparent",
    description:
      "No vague promises or hidden surprises. Just honest communication, clear timelines, and realistic expectations from concept to installation.",
  },
  {
    title: "Details Define Quality",
    description:
      "Precision is everything. From millimeter-accurate measurements to finishing touches, we obsess over the details so the final result feels effortless.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              About CUT TO SIZE INTERIORS
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
              Cut To Size Interiors believes great interiors begin with thoughtful design and precise execution. From concept and technical drawings to manufacturing and installation, we turn ideas into bespoke kitchens, wardrobes, and custom-built spaces using premium materials and expert craftsmanship.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/about.png"
            alt="team image"
            height="480"
            width="720"
            sizes="(min-width: 1280px) 960px, (min-width: 1024px) 840px, (min-width: 768px) 700px, 100vw"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
