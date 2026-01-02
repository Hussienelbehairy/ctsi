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
    <section className=" overflow-hidden py-10 md:py-12">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:pr-6 flex items-center justify-end">
            <p className="text-end text-sm hidden xl:block">
              Sourcing from the best global brands
            </p>
            <span className="hidden xl:block ml-6 h-[50px] w-px bg-white/60"></span>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={8}>
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="flex h-[5.25rem] w-[200px] items-center justify-center md:h-[6rem] md:w-[230px] lg:h-[6.75rem] lg:w-[260px]"
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
                      className="h-[4.25rem] w-auto max-w-[180px] object-contain grayscale brightness-0 transition-all duration-300 md:h-[4.75rem] md:max-w-[205px] lg:h-[5.25rem] lg:max-w-[230px] hover:[filter:brightness(0)_invert(47%)_sepia(92%)_saturate(2456%)_hue-rotate(359deg)_contrast(104%)]"
                    />
                  </a>
                </div>
              ))}
            </InfiniteSlider>

            {/* <div className="bg-linear-to-r from-none absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-none absolute inset-y-0 right-0 w-20"></div> */}
            {/* <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-80"
              direction="left"
              blurIntensity={0.9}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
