import React from "react";
import Reveal from "./Reveal";

const featureCards = [
  { icon: "♻", title: "Sustainable Materials", text: "Thoughtfully sourced fabrics and responsible finishes." },
  { icon: "✓", title: "Warranty Included", text: "Premium support and coverage for every pair." },
  { icon: "🚚", title: "Fast Delivery", text: "Express shipping and careful packaging." },
  { icon: "🌍", title: "Eco Friendly", text: "Designed with mindful materials and low-impact production." },
];

const promoCards = [
  {
    title: "Explore all formal shoes",
    badge: "20% OFF",
    button: "Shop now",
    className: "animate-slide-left",
    image: "/watermarked_img_9702056250489137328.png",
  },
  {
    title: "Grab the latest running shoes",
    badge: "25% OFF",
    button: "Shop now",
    className: "animate-slide-right",
    image: "/watermarked_img_4843711833170491400.png",
  },
];

export default function PremiumSections() {
  return (
    <section className="page-shell py-5">
      <div className="container-fluid px-3 px-lg-5 py-4">
        <Reveal className="animate-fade-up mb-4">
          <div className="text-center">
            <p className="section-subtitle mb-2">Elevated essentials</p>
            <h3 className="section-title mb-0">Crafted for everyday luxury</h3>
          </div>
        </Reveal>

        <div className="row g-4 mb-5">
          {featureCards.map((card, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={card.title}>
              <Reveal className={`animate-fade-up animate-card h-100`} threshold={0.08}>
                <div className="feature-card h-100 p-4 rounded-4">
                  <div className="feature-icon mb-3 animate-float">{card.icon}</div>
                  <h5 className="fw-bold mb-2">{card.title}</h5>
                  <p className="text-muted mb-0">{card.text}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="row g-4">
          {promoCards.map((card) => (
            <div className="col-12 col-lg-6" key={card.title}>
              <Reveal className={`animate-card h-100 ${card.className}`} threshold={0.1}>
                <div className="promo-banner position-relative overflow-hidden rounded-4 p-4 p-lg-5 text-white h-100">
                  <img  src={card.image} alt={card.title} className="promo-image  img-fluid" />
                  <div className="promo-overlay" />
                  <div className="position-relative z-2">
                    <span className="badge rounded-pill bg-light text-dark px-3 py-2 mb-3">{card.badge}</span>
                    <h4 className="fw-bold mb-3 display-6">{card.title}</h4>
                    <button className="btn btn-light animate-button rounded-pill px-4">{card.button}</button>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
