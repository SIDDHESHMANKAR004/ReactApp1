import { motion } from "framer-motion";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About(props) {
    const ref = useRef(null);
    const { onFormButtonClick } = props;
    function handleFormButtonClick(nextView) {
    onFormButtonClick(nextView);
  }


    // Fade-up animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <div className="about-page bg-white text-dark" ref={ref}>
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* HERO SECTION */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="position-relative vh-100 d-flex align-items-center justify-content-center overflow-hidden" style={{ backgroundColor: "#1A1A1A" }}>
                {/* Background accents */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)" }} />
                <div className="position-absolute top-0 end-0" style={{ width: "384px", height: "384px", background: "rgba(204, 85, 0, 0.1)", borderRadius: "50%", filter: "blur(80px)", marginTop: "-160px", marginRight: "-160px" }} />
                <div className="position-absolute bottom-0 start-0" style={{ width: "384px", height: "384px", background: "rgba(204, 85, 0, 0.05)", borderRadius: "50%", filter: "blur(80px)", marginBottom: "-160px", marginLeft: "-160px" }} />

                {/* Content */}
                <div className="position-relative z-1 text-center px-3" style={{ maxWidth: "896px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="d-inline-block text-uppercase mb-4" style={{ color: "#CC5500", fontSize: "14px", fontWeight: 500, letterSpacing: "4.8px" }}>
                            Since 2024
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="display-1 fw-light text-white"
                        style={{ lineHeight: 1.05 }}
                    >
                        Engineered for
                        <br />
                        <span style={{ color: "#CC5500", fontWeight: 700 }}>Every Step</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-white-50 mx-auto mt-4"
                        style={{ fontSize: "1.25rem", maxWidth: "576px", fontWeight: 300, lineHeight: 1.7 }}
                    >
                        Premium footwear where innovation meets timeless design.
                        Built for those who never stop moving.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-5"
                    >
                        <button className="btn btn-lg px-5 py-3 text-white fw-medium rounded-pill transition-all" onClick={() => handleFormButtonClick("productPage")} style={{ backgroundColor: "#CC5500", border: "none", transition: "all 0.3s ease" }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = "#B84A00"; e.target.style.boxShadow = "0 20px 40px rgba(204, 85, 0, 0.3)" }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = "#CC5500"; e.target.style.boxShadow = "none" }}
                        >
                            Discover the Collection
                        </button>
                        <button className="btn btn-lg px-5 py-3 text-white-50 fw-medium rounded-pill border border-white-10 transition-all" style={{ borderColor: "rgba(255,255,255,0.1)", transition: "all 0.3s ease" }}
                            onMouseEnter={(e) => { e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(255,255,255,0.3)" }}
                            onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.5)"; e.target.style.borderColor = "rgba(255,255,255,0.1)" }}
                        >
                            Our Story ↓
                        </button>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column align-items-center gap-2"
                        style={{ marginBottom: "32px" }}
                    >
                        <span className="text-white-50 text-uppercase" style={{ fontSize: "11px", letterSpacing: "2.4px" }}>Scroll</span>
                        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
                    </motion.div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* OUR STORY */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-5 py-md-6"
                style={{ paddingTop: "120px", paddingBottom: "120px" }}
            >
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* Image side */}
                        <motion.div variants={fadeUp} className="col-lg-6 order-2 order-lg-1">
                            <div className="position-relative">
                                <div className="position-relative" style={{ aspectRatio: "4/5", backgroundColor: "#1A1A1A", borderRadius: "24px", overflow: "hidden" }}>
                                    <div className="position-absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(204, 85, 0, 0.1), transparent)" }} />
                                    <div className="position-absolute inset-0 d-flex align-items-center justify-content-center">
                                        <span className="text-white-50 display-1 fw-bold" style={{ opacity: 0.1 }}>SK</span>
                                    </div>
                                    {/* Decorative frame */}
                                    <div className="position-absolute bottom-0 end-0 w-100 h-100 border border-2" style={{ borderColor: "rgba(204, 85, 0, 0.2)", borderRadius: "24px", transform: "translate(8px, 8px)", zIndex: -1 }} />
                                    <div className="position-absolute top-0 start-0" style={{ width: "64px", height: "64px", borderTop: "2px solid rgba(204, 85, 0, 0.4)", borderLeft: "2px solid rgba(204, 85, 0, 0.4)", borderTopLeftRadius: "16px" }} />
                                    <div className="position-absolute bottom-0 end-0" style={{ width: "64px", height: "64px", borderBottom: "2px solid rgba(204, 85, 0, 0.4)", borderRight: "2px solid rgba(204, 85, 0, 0.4)", borderBottomRightRadius: "16px" }} />
                                </div>
                                
                            </div>
                        </motion.div>

                        {/* Text side */}
                        <div className="col-lg-6 order-1 order-lg-2">
                            <motion.span
                                variants={fadeIn}
                                className="d-inline-block text-uppercase mb-3"
                                style={{ color: "#CC5500", fontSize: "14px", fontWeight: 500, letterSpacing: "4.8px" }}
                            >
                                Our Story
                            </motion.span>
                            <motion.h2 variants={fadeUp} className="display-4 fw-light" style={{ lineHeight: 1.1 }}>
                                Born from a
                                <br />
                                <span style={{ color: "#CC5500", fontWeight: 700 }}>simple idea</span>
                            </motion.h2>
                            <motion.div variants={fadeUp} style={{ width: "64px", height: "2px", backgroundColor: "#CC5500", marginTop: "24px" }} />
                            <motion.p variants={fadeUp} className="mt-4 text-secondary" style={{ fontSize: "1.125rem", lineHeight: 1.8, fontWeight: 300 }}>
                                <span className="fw-medium text-dark">SKIAN</span> was born from one simple belief — that footwear
                                should never force you to choose between comfort and style.
                                Every pair is meticulously designed using premium materials,
                                modern engineering, and a relentless passion for everyday
                                performance.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-secondary" style={{ fontSize: "1.125rem", lineHeight: 1.8, fontWeight: 300 }}>
                                We don't just make shoes. We craft the foundation for
                                every step you take — from morning commutes to weekend
                                adventures.
                            </motion.p>
                           
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* CRAFT / FEATURES */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-5 py-md-6" style={{ backgroundColor: "#F8F8F8", paddingTop: "120px", paddingBottom: "120px" }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mx-auto mb-5"
                        style={{ maxWidth: "576px" }}
                    >
                        <motion.span
                            variants={fadeIn}
                            className="d-inline-block text-uppercase mb-3"
                            style={{ color: "#CC5500", fontSize: "14px", fontWeight: 500, letterSpacing: "4.8px" }}
                        >
                            Craftsmanship
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="display-4 fw-light">
                            Built with <span style={{ color: "#CC5500", fontWeight: 700 }}>purpose</span>
                        </motion.h2>
                        <motion.div variants={fadeUp} style={{ width: "64px", height: "2px", backgroundColor: "#CC5500", margin: "24px auto 0" }} />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="row g-4"
                    >
                        {[
                            {
                                icon: "✦",
                                title: "Premium Materials",
                                desc: "Sourced from the finest tanneries and recycled fabrics. Every component is chosen for durability and comfort.",
                            },
                            {
                                icon: "◆",
                                title: "Precision Comfort",
                                desc: "Adaptive cushioning engineered to respond to your gait. Feel the difference with every stride.",
                            },
                            {
                                icon: "◈",
                                title: "Sustainable Design",
                                desc: "Committed to reducing our footprint. Made with recycled materials and responsible manufacturing.",
                            },
                        ].map((item, index) => (
                            <motion.div key={index} variants={fadeUp} className="col-md-4">
                                <div className="bg-white p-5 rounded-4 shadow-sm h-100 transition-all" style={{ transition: "all 0.4s ease" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)" }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)" }}
                                >
                                    <div className="d-flex align-items-center justify-content-center mb-4" style={{ width: "56px", height: "56px", borderRadius: "16px", backgroundColor: "rgba(204, 85, 0, 0.08)", color: "#CC5500", fontSize: "24px" }}>
                                        {item.icon}
                                    </div>
                                    <h3 className="h5 fw-bold text-dark mb-3">{item.title}</h3>
                                    <p className="text-secondary" style={{ fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</p>
                                    <div style={{ width: "48px", height: "2px", backgroundColor: "rgba(204, 85, 0, 0.3)", marginTop: "24px", transition: "all 0.4s ease" }}
                                        onMouseEnter={(e) => { e.target.style.width = "64px"; e.target.style.backgroundColor = "#CC5500" }}
                                        onMouseLeave={(e) => { e.target.style.width = "48px"; e.target.style.backgroundColor = "rgba(204, 85, 0, 0.3)" }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            

           

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* FINAL CTA */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="position-relative py-5 py-md-6 overflow-hidden" style={{ backgroundColor: "#1A1A1A", paddingTop: "120px", paddingBottom: "120px" }}>
                <div className="position-absolute top-0 end-0 w-50 h-100" style={{ background: "linear-gradient(to left, rgba(204, 85, 0, 0.05), transparent)" }} />
                <div className="position-absolute bottom-0 start-0" style={{ width: "320px", height: "320px", backgroundColor: "rgba(204, 85, 0, 0.05)", borderRadius: "50%", filter: "blur(80px)", marginBottom: "-80px", marginLeft: "-80px" }} />

                <div className="position-relative z-1 container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mx-auto"
                        style={{ maxWidth: "768px" }}
                    >
                        <motion.span
                            variants={fadeIn}
                            className="d-inline-block text-uppercase mb-3"
                            style={{ color: "#CC5500", fontSize: "14px", fontWeight: 500, letterSpacing: "4.8px" }}
                        >
                            Get Started
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="display-3 fw-light text-white" style={{ lineHeight: 1.1 }}>
                            Ready for your
                            <br />
                            <span style={{ color: "#CC5500", fontWeight: 700 }}>next step?</span>
                        </motion.h2>
                        <motion.div variants={fadeUp} style={{ width: "64px", height: "2px", backgroundColor: "#CC5500", margin: "24px auto 0" }} />
                        <motion.p variants={fadeUp} className="text-white-50 mx-auto mt-4" style={{ fontSize: "1.125rem", maxWidth: "448px", fontWeight: 300, lineHeight: 1.7 }}>
                            Discover footwear designed for the way you move.
                            Experience the difference.
                        </motion.p>
                        <motion.div variants={fadeUp} className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-4">
                            <button className="btn btn-lg px-5 py-3 text-white fw-medium rounded-pill transition-all" onClick={() => handleFormButtonClick("productPage")} style={{ backgroundColor: "#CC5500", border: "none", transition: "all 0.3s ease" }}
                                onMouseEnter={(e) => { e.target.style.backgroundColor = "#B84A00"; e.target.style.boxShadow = "0 20px 40px rgba(204, 85, 0, 0.3)" }}
                                onMouseLeave={(e) => { e.target.style.backgroundColor = "#CC5500"; e.target.style.boxShadow = "none" }}
                            >
                                Browse Collection
                            </button>
                            <button className="btn btn-lg px-5 py-3 text-white-50 fw-medium rounded-pill border transition-all" style={{ borderColor: "rgba(255,255,255,0.1)", transition: "all 0.3s ease" }}
                                onMouseEnter={(e) => { e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(255,255,255,0.3)" }}
                                onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.5)"; e.target.style.borderColor = "rgba(255,255,255,0.1)" }}
                            >
                                Learn More
                            </button>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div variants={fadeUp} className="mt-5 pt-4 border-top d-flex flex-wrap justify-content-center gap-4 gap-md-5" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <span className="text-white-50" style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.5px" }}>✓ 30-Day Comfort Guarantee</span>
                            <span className="text-white-50" style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.5px" }}>✓ Free Shipping</span>
                            <span className="text-white-50" style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.5px" }}>✓ Sustainable Materials</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}