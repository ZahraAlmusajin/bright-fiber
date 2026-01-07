"use client";

import { JSX, useEffect, useMemo, useRef } from "react";
import {
  FaDraftingCompass,
  FaWaveSquare,
  FaSyncAlt,
  FaCut,
  FaNetworkWired,
  FaBoxes,
} from "react-icons/fa";

type Service = {
  title: string;
  desc: string;
  image: string;
  icon: JSX.Element;
};

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const services: Service[] = useMemo(
    () => [
      {
        title: "Engineering Services (MTO Preparation)",
        desc: "Accurate MTOs, BOQs, and documentation for telecom projects.",
        image: "/services/engineering.PNG",
        icon: <FaDraftingCompass />,
      },
      {
        title: "OTDR & Power Meter Testing",
        desc: "Fiber link testing, loss measurement, and reporting.",
        image: "/services/OTDR.png",
        icon: <FaWaveSquare />,
      },
      {
        title: "Fiber Optic Splicing (Single Mode & Multi Mode)",
        desc: "High-quality fusion splicing with low-loss results.",
        image: "/services/SPLICE.jpg",
        icon: <FaCut />,
      },
      {
        title: "Structured Cabling Systems",
        desc: "Structured copper & fiber cabling for buildings and sites.",
        image: "/services/cabling.jpg",
        icon: <FaNetworkWired />,
      },
      {
        title: "Supply of Fiber and Telecom Materials",
        desc: "Fiber, closures, patch panels, cabinets, and accessories.",
        image: "/services/SUPPLY.png",
        icon: <FaBoxes />,
      },
    ],
    []
  );

  const scrollByOne = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>(".service-card-v2");
    if (!firstCard) return;

    const gap = 16; // must match CSS gap
    const step = firstCard.offsetWidth + gap;

    el.scrollBy({
      left: dir === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  const startAutoScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    if (autoScrollRef.current) clearInterval(autoScrollRef.current);

    autoScrollRef.current = setInterval(() => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      // loop back to start when reaching the end
      if (el.scrollLeft >= maxScrollLeft - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByOne("right");
      }
    }, 2500);
  };

  const pauseAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => pauseAutoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="services-wrapper">
      <button
        className="arrow"
        onClick={() => {
          pauseAutoScroll();
          scrollByOne("left");
          startAutoScroll();
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      <div
        className="services-carousel"
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        <div className="services-track" ref={trackRef}>
          {services.map((s, i) => (
            <article className="service-card-v2" key={i}>
              <div className="service-photo">
                <img src={s.image} alt={s.title} />
              </div>

              <div className="service-badge" aria-hidden="true">
                {s.icon}
              </div>

              <div className="service-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>

                {/* <a className="service-more" href="#contact">
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        className="arrow"
        onClick={() => {
          pauseAutoScroll();
          scrollByOne("right");
          startAutoScroll();
        }}
        aria-label="Next"
      >
        ›
      </button>
    </section>
  );
}
