"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollView } from "./scroll-view";

type PortfolioCardType = {
  name: string;
  description: string;
  videos: string[];
};

function VideoSlider({
  videos,
  title,
}: {
  videos: string[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const hasMultiple = videos.length > 1;
  const isFlagship = title.toLowerCase().includes("badie");

  const next = () => setCurrent((prev) => (prev + 1) % videos.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

  if (!videos || videos.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-black shadow-lg">
      <div className="relative aspect-[16/9] w-full">
        {videos.map((videoSrc, index) => (
          <video
            key={`${title}-${videoSrc}-${muted}`}
            src={videoSrc}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            muted={isFlagship ? true : muted}
            autoPlay
            loop
            playsInline
            controls={false}
          />
        ))}
      </div>

      {hasMultiple && (
        <>
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-6 rounded-full transition ${
                  current === index ? "bg-orange-500" : "bg-white/70"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white shadow-md backdrop-blur transition hover:bg-black/70"
            aria-label="Previous video"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white shadow-md backdrop-blur transition hover:bg-black/70"
            aria-label="Next video"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}
      {!isFlagship && (
        <button
          type="button"
          onClick={() => setMuted((prev) => !prev)}
          className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur transition hover:bg-black/80"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      )}
    </div>
  );
}

export default function PortfolioCard({ card }: { card: PortfolioCardType }) {
  return (
    <ScrollView>
      <div className="group space-y-4">
        <VideoSlider videos={card.videos} title={card.name} />
        <div>
          <h3 className="text-title text-2xl font-medium ">{card.name}</h3>
          <p className="text-muted-foreground">{card.description}</p>
        </div>
      </div>
    </ScrollView>
  );
}
