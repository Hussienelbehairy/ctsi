"use client";

import Image from "next/image";
import { InView } from "@/components/motion-primitives/in-view";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { SERVICES_LIST } from "@/content/services";

export default function ServicesSection2() {
  return (
    <section className="py-16 md:py-32" id="services">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Interior Design That Works for You
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              At Cut To Size Interiors, every design starts with understanding how you live and work. We translate ideas into precise layouts, then into carefully manufactured interiors that deliver comfort, efficiency, and lasting quality.
            </p>
          </ScrollView>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="space-y-10">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.name}
                className="group overflow-hidden border-b py-10"
              >
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                  <div className="self-end lg:col-span-2">
                    <div className="flex flex-col gap-8 ">
                      <div className="space-y-4">
                        <ScrollView>
                          <h3 className="text-title text-2xl font-medium">
                            {service.name}
                          </h3>
                        </ScrollView>

                        <ScrollView stagger delay={0.04}>
                          <div>
                            {service.tags.map((tag, index) => (
                              <div key={index} className="inline-block">
                                <ScrollViewStaggerWrapper>
                                  <Badge
                                    className="mr-2 mb-2"
                                    variant="secondary"
                                  >
                                    {tag}
                                  </Badge>
                                </ScrollViewStaggerWrapper>
                              </div>
                            ))}
                          </div>
                        </ScrollView>
                      </div>
                      <ScrollView delay={0.04}>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </ScrollView>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <InView
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 20,
                          filter: "blur(14px)",
                          scale: 0.5,
                          originX: 0,
                          originY: 0,
                        },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            delay: 0.01,
                            duration: 0.5,
                          },
                        },
                      }}
                      viewOptions={{
                        margin: "0px 0px -250px 0px",
                        once: true,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                          src={service.img}
                          alt={service.name}
                          height={720}
                          width={1080}
                          className="aspect-[16/9] w-full object-cover object-center transition duration-500"
                          sizes="(min-width: 1280px) 960px, (min-width: 1024px) 820px, (min-width: 768px) 680px, 100vw"
                          loading="lazy"
                        />
                      </div>
                    </InView>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
