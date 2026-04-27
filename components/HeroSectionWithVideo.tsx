'use client';

import { useState, useEffect, useRef } from 'react';

import Image from 'next/image';

const HERO_VIDEO_SOURCES = [
  '/videos/12217381_3840_2160_30fps.mp4',
  '/videos/14465085_1080_1920_25fps%20(1).mp4',
  '/videos/hero-home.mp4',
];
const HERO_VIDEO_SEGMENT_MS = 6000;
const HERO_VIDEO_FADE_MS = 260;

export default function HeroSectionWithVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const switchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const playVideo = async (video: HTMLVideoElement | null) => {
    if (!video) {
      return;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setTimeout(() => {
          void playVideo(video);
        }, 250);
      });
    }
  };

  const switchToNextVideo = () => {
    setActiveVideoIndex((current) => {
      const nextIndex = (current + 1) % HERO_VIDEO_SOURCES.length;
      const nextVideo = videoRefs.current[nextIndex];

      if (nextVideo) {
        nextVideo.currentTime = 0;
        void playVideo(nextVideo);
      }

      return nextIndex;
    });
  };

  useEffect(() => {
    const activeVideo = videoRefs.current[activeVideoIndex];

    if (activeVideo) {
      activeVideo.muted = isMuted;
      void playVideo(activeVideo);
    }

    videoRefs.current.forEach((video, index) => {
      if (!video || index === activeVideoIndex) {
        return;
      }

      video.muted = true;
    });
  }, [activeVideoIndex, isMuted]);

  useEffect(() => {
    if (HERO_VIDEO_SOURCES.length < 2) {
      return;
    }

    if (switchIntervalRef.current) {
      clearInterval(switchIntervalRef.current);
    }

    switchIntervalRef.current = setInterval(() => {
      switchToNextVideo();
    }, HERO_VIDEO_SEGMENT_MS);

    return () => {
      if (switchIntervalRef.current) {
        clearInterval(switchIntervalRef.current);
        switchIntervalRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex min-h-screen w-screen overflow-hidden bg-[#0f1f2e]">
      <div className="absolute inset-0 w-full h-full">
        {HERO_VIDEO_SOURCES.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={(element) => {
              videoRefs.current[index] = element;
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero-security-systems.jpg"
            crossOrigin="anonymous"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[260ms] ease-out ${
              activeVideoIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            onContextMenu={(e) => e.preventDefault()}
            src={videoSrc}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,31,46,0.60)_0%,rgba(15,31,46,0.40)_32%,rgba(26,58,82,0.18)_60%,rgba(26,58,82,0.08)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,196,209,0.08),transparent_28%)] pointer-events-none" />
        <div className="absolute inset-0 brand-grid opacity-[0.10] pointer-events-none" />
      </div>

      <div className="absolute inset-0 flex items-center justify-start z-10 px-4 sm:px-12 lg:px-24" dir="ltr">
        <div className="max-w-2xl w-full text-left space-y-8">
          <h1 className="mx-auto max-w-3xl text-left text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight drop-shadow-[0_8px_36px_rgba(0,0,0,0.65)] animate-fade-in-up" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            We protect critical sites with clear operational standards.
          </h1>
          <p className="mx-auto max-w-2xl mt-4 text-left text-white text-lg sm:text-xl lg:text-2xl font-medium leading-snug drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] animate-fade-in-up" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            From command rooms to field teams, we combine real capabilities and real technology to deliver practical protection
          </p>
          <div className="mt-8 animate-fade-in-up delay-200">
            <a href="/en/contact" className="inline-block rounded-full bg-gradient-to-r from-accent to-primary px-10 py-4 text-xl font-bold text-white shadow-xl hover:scale-105 hover:from-primary hover:to-accent transition-all duration-200">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
          <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">Scroll to explore</span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/40 transition-all duration-300 group-hover:border-accent/70">
            <div className="mt-2 h-2 w-1 animate-bounce rounded-full bg-white/60 group-hover:bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
