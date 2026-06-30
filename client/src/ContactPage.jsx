import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
    // Fade-up animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
            },
        },
    };

    return (
        <div className="contact-page bg-white text-dark">
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* HERO - Minimal */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="position-relative d-flex align-items-center justify-content-center" style={{ backgroundColor: "#F8F8F8", minHeight: "40vh", paddingTop: "80px" }}>
                {/* Subtle accent */}
                <div className="position-absolute top-0 end-0" style={{ width: "300px", height: "300px", background: "rgba(204, 85, 0, 0.04)", borderRadius: "50%", filter: "blur(60px)", marginTop: "-150px", marginRight: "-150px" }} />
                <div className="position-absolute bottom-0 start-0" style={{ width: "200px", height: "200px", background: "rgba(204, 85, 0, 0.03)", borderRadius: "50%", filter: "blur(60px)", marginBottom: "-100px", marginLeft: "-100px" }} />

                <div className="container position-relative z-1 text-center py-5">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span
                            variants={fadeIn}
                            className="d-inline-block text-uppercase mb-3"
                            style={{ color: "#CC5500", fontSize: "13px", fontWeight: 500, letterSpacing: "4.8px" }}
                        >
                            Get in Touch
                        </motion.span>
                        <motion.h1
                            variants={fadeUp}
                            className="display-3 fw-light"
                            style={{ lineHeight: 1.1 }}
                        >
                            Let's <span style={{ color: "#CC5500", fontWeight: 700 }}>connect</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeUp}
                            style={{ width: "48px", height: "2px", backgroundColor: "#CC5500", margin: "20px auto 0" }}
                        />
                        <motion.p
                            variants={fadeUp}
                            className="text-secondary mx-auto mt-4"
                            style={{ maxWidth: "448px", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.7 }}
                        >
                            Have a question or want to collaborate? We'd love to hear from you.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* CONTACT FORM + INFO */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <section className="py-5" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="row g-5 align-items-start"
                    >
                        {/* ─── LEFT: Contact Info ─── */}
                        <motion.div variants={fadeUp} className="col-lg-5">
                            <div className="d-flex flex-column gap-4">
                                <div>
                                    <h3 className="h6 fw-bold text-uppercase text-secondary mb-3" style={{ letterSpacing: "2px", fontSize: "11px" }}>
                                        Reach Us
                                    </h3>
                                    <h2 className="display-6 fw-light" style={{ lineHeight: 1.2 }}>
                                        We're here to <br />
                                        <span style={{ color: "#CC5500", fontWeight: 700 }}>help</span>
                                    </h2>
                                    <div style={{ width: "32px", height: "2px", backgroundColor: "#CC5500", marginTop: "16px" }} />
                                </div>

                                <div className="mt-2 d-flex flex-column gap-4">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3" style={{ width: "44px", height: "44px", backgroundColor: "rgba(204, 85, 0, 0.08)" }}>
                                            <span style={{ color: "#CC5500", fontSize: "18px" }}>✉</span>
                                        </div>
                                        <div>
                                            <div className="text-secondary" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>Email</div>
                                            <a href="mailto:hello@skian.com" className="text-dark text-decoration-none fw-medium" style={{ fontSize: "15px", transition: "color 0.3s ease" }}
                                                onMouseEnter={(e) => e.target.style.color = "#CC5500"}
                                                onMouseLeave={(e) => e.target.style.color = "#1A1A1A"}
                                            >
                                                mankarsiddhesh732@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-3">
                                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3" style={{ width: "44px", height: "44px", backgroundColor: "rgba(204, 85, 0, 0.08)" }}>
                                            <span style={{ color: "#CC5500", fontSize: "18px" }}>✦</span>
                                        </div>
                                        <div>
                                            <div className="text-secondary" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>Location</div>
                                            <div className="text-dark fw-medium" style={{ fontSize: "15px" }}>Pune,India</div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-3">
                                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3" style={{ width: "44px", height: "44px", backgroundColor: "rgba(204, 85, 0, 0.08)" }}>
                                            <span style={{ color: "#CC5500", fontSize: "18px" }}>◈</span>
                                        </div>
                                        <div>
                                            <div className="text-secondary" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>Response Time</div>
                                            <div className="text-dark fw-medium" style={{ fontSize: "15px" }}>Within 24 hours</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social links - minimal */}
                                <div className="mt-2 pt-2 border-top" style={{ borderColor: "#f0f0f0" }}>
                                    <div className="d-flex gap-4">
                                        {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                                            <a key={social} href="#" className="text-secondary text-decoration-none" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.3px", transition: "color 0.3s ease" }}
                                                onMouseEnter={(e) => e.target.style.color = "#CC5500"}
                                                onMouseLeave={(e) => e.target.style.color = "#6C757D"}
                                            >
                                                {social}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* ─── RIGHT: Form ─── */}
                        <motion.div variants={fadeUp} className="col-lg-7">
                            <form className="bg-white p-4 p-md-5 rounded-4" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label text-secondary" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                                            style={{ borderColor: "#E5E5E5", backgroundColor: "transparent", fontSize: "15px", fontWeight: 400, transition: "border-color 0.3s ease" }}
                                            placeholder="John"
                                            onFocus={(e) => e.target.style.borderColor = "#CC5500"}
                                            onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-secondary" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                                            style={{ borderColor: "#E5E5E5", backgroundColor: "transparent", fontSize: "15px", fontWeight: 400, transition: "border-color 0.3s ease" }}
                                            placeholder="Doe"
                                            onFocus={(e) => e.target.style.borderColor = "#CC5500"}
                                            onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label text-secondary" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                                            style={{ borderColor: "#E5E5E5", backgroundColor: "transparent", fontSize: "15px", fontWeight: 400, transition: "border-color 0.3s ease" }}
                                            placeholder="john@example.com"
                                            onFocus={(e) => e.target.style.borderColor = "#CC5500"}
                                            onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label text-secondary" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                                            style={{ borderColor: "#E5E5E5", backgroundColor: "transparent", fontSize: "15px", fontWeight: 400, transition: "border-color 0.3s ease" }}
                                            placeholder="How can we help?"
                                            onFocus={(e) => e.target.style.borderColor = "#CC5500"}
                                            onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label text-secondary" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
                                            Message
                                        </label>
                                        <textarea
                                            rows="3"
                                            className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                                            style={{ borderColor: "#E5E5E5", backgroundColor: "transparent", fontSize: "15px", fontWeight: 400, resize: "none", transition: "border-color 0.3s ease" }}
                                            placeholder="Tell us what's on your mind..."
                                            onFocus={(e) => e.target.style.borderColor = "#CC5500"}
                                            onBlur={(e) => e.target.style.borderColor = "#E5E5E5"}
                                        />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button
                                            type="submit"
                                            className="btn px-5 py-3 text-white fw-medium rounded-pill w-100 w-sm-auto"
                                            style={{ backgroundColor: "#CC5500", border: "none", transition: "all 0.3s ease", minWidth: "180px" }}
                                            onMouseEnter={(e) => { e.target.style.backgroundColor = "#B84A00"; e.target.style.boxShadow = "0 12px 32px rgba(204, 85, 0, 0.25)" }}
                                            onMouseLeave={(e) => { e.target.style.backgroundColor = "#CC5500"; e.target.style.boxShadow = "none" }}
                                        >
                                            Send Message →
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {/* FOOTER - Minimal */}
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <footer className="border-top" style={{ borderColor: "#F0F0F0" }}>
                <div className="container py-4">
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
                        <span className="text-secondary" style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.3px" }}>
                            © 2026 SKIAN. All rights reserved.
                        </span>
                        <div className="d-flex gap-4">
                            <a href="#" className="text-secondary text-decoration-none" style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.5px", transition: "color 0.3s ease" }}
                                onMouseEnter={(e) => e.target.style.color = "#CC5500"}
                                onMouseLeave={(e) => e.target.style.color = "#6C757D"}
                            >
                                Privacy
                            </a>
                            <a href="#" className="text-secondary text-decoration-none" style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.5px", transition: "color 0.3s ease" }}
                                onMouseEnter={(e) => e.target.style.color = "#CC5500"}
                                onMouseLeave={(e) => e.target.style.color = "#6C757D"}
                            >
                                Terms
                            </a>
                            <a href="#" className="text-secondary text-decoration-none" style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.5px", transition: "color 0.3s ease" }}
                                onMouseEnter={(e) => e.target.style.color = "#CC5500"}
                                onMouseLeave={(e) => e.target.style.color = "#6C757D"}
                            >
                                Support
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}