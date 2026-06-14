// HeroSection.jsx
import React from "react";

export default function HeroSection() {
    const slides = [
  {
    image: "/images/hero1.png",
    title: "SKIAN STREET",
    subtitle: "End of Season Sale",
    btn: "Shop Now",
  },
  {
    image: "/images/hero2.png",
    title: "SUMMER SALE",
    subtitle: "Up to 40% Off",
    btn: "Shop Now",
  },
  {
    image: "/images/hero3.png",
    title: "Adventure Ready",
    subtitle: "Built for Every Terrain",
    btn: "Explore",
  },
  {
    image: "/images/hero4.png",
    title: "Metropolitan Steps",
    subtitle: "Premium Urban Collection",
    btn: "Discover",
  },
];
  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <div className="text-center text-white">
        <h1 className="fw-bold display-4">SKIAN STREET</h1>
        <p className="lead">Step into Style</p>
        <a href="#products" className="btn btn-light mt-3">
          Shop Now
        </a>
      </div>
    </section>
  );
}