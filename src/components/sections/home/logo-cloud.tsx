import Image from "next/image";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

export default function LogoCloud() {
  const logos = [
    "belenco-quartzsurfaces.png",
    "blum-hardwareaccessories.png",
    "gizir-mdf.png",
    "glossmax-mdf.png",
    "goodwood-plywood.png",
    "grass-hardwareaccessories.png",
    "hafele-hardwareaccessories.png",
    "kastamonu-mdf.png",
    "mattplus-mdf.png",
    "starax-hardwareaccessories.png",
    "staron-solidsurfaces.png",
    "starwood-mdf.png",
    "tarekelsallab-hardwareaccessories.png",
    "elaraby-hardwareaccessories.png",
    "assissto-hardwareaccessories.png",
  ];

  const logoLinks: Record<string, string> = {
    "glossmax-mdf.png": "https://www.kastamonuentegre.com/uploads/2022/12/glossmax-pro-catalogue.pdf",
    "gizir-mdf.png": "https://www.gizir.com/?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnab4GmOovvKUS8fr-YnxX7u7EEswxzjhkJ2Deqz1sYYMOl9GQ4YcOPW30N1E_aem_G0tqBaE4QrxX6A5I3oU5-w&utm_content=link_in_bio&utm_medium=social&utm_source=chatgpt.com",
    "grass-hardwareaccessories.png": "https://www.grass.eu/en/",
    "goodwood-plywood.png": "https://goodwood.com.eg/",
    "staron-solidsurfaces.png": "https://www.staron.com",
    "belenco-quartzsurfaces.png": "https://www.belenco.com/en/",
    "hafele-hardwareaccessories.png": "https://www.hafele.com.de/en/",
    "blum-hardwareaccessories.png": "https://www.blum.com/us/en/?utm_source=chatgpt.com",
    "kastamonu-mdf.png": "https://www.kastamonuentegre.com/en?utm_source=chatgpt.com",
    "mattplus-mdf.png": "https://www.kastamonuentegre.com/uploads/2022/12/mattplus-user-manuel-2022.pdf",
    "starax-hardwareaccessories.png": "https://starax.us/",
    "starwood-mdf.png": "https://www.starwood.com.tr/en/",
    "tarekelsallab-hardwareaccessories.png": "https://www.tarekelsallab.com/",
    "elaraby-hardwareaccessories.png": "http://alarabi.com.eg/",
    "assissto-hardwareaccessories.png": "https://www.facebook.com/assissto/",
  };

  const toAlt = (filename: string) =>
    filename
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-transparent to-transparent py-8 sm:py-10 md:py-12">
      <div className="py-4 sm:py-6">
        <InfiniteSlider speedOnHover={20} speed={40} gap={4} className="sm:gap-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-[3.5rem] w-[140px] items-center justify-center sm:h-[4.25rem] sm:w-[180px] md:h-[5rem] md:w-[210px] lg:h-[5.5rem] lg:w-[230px]"
            >
              <a
                href={logoLinks[logo]}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src={`/brands/${logo}`}
                  alt={toAlt(logo)}
                  width={260}
                  height={110}
                  sizes="(min-width: 1280px) 200px, (min-width: 1024px) 180px, (min-width: 768px) 160px, 140px"
                  className="h-[2.75rem] w-auto max-w-[110px] object-contain grayscale brightness-0 transition-all duration-300 sm:h-[3.25rem] sm:max-w-[130px] md:h-[3.75rem] md:max-w-[160px] lg:h-[4.25rem] lg:max-w-[180px] hover:[filter:brightness(0)_invert(47%)_sepia(92%)_saturate(2456%)_hue-rotate(359deg)_contrast(104%)]"
                />
              </a>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
