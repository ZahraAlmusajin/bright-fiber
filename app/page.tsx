import ServicesCarousel from "@/components/ServicesCarousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>
            ADVANCED TELECOM SERVICES AND SOLUTIONS
          </h1>         
        </div>
      <section className="services-overlap">
        <p className="services-subtitle">
          Empowering faster and more reliable <br/> communication networks
        </p>
        {/* SERVICES FIRST */}
        <ServicesCarousel />
      </section>
</section>
      {/* ABOUT US */}
      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <img
              src="/splicer.jpg"
              alt="About us"
            />
          </div>

          <div className="about-content">
            <span className="about-tag">ABOUT US</span>
            <p className="about-text">
              Bright Fiber is a{" "}
              <span className="about-strong">Saudi-based</span> establishment specialized in{" "}
              <span className="about-strong">
                fiber optic splicing, structured cabling, and telecom infrastructure services
              </span>
              . With a focus on{" "}
              <span className="about-strong">quality, speed, and precision</span>, we provide
              turnkey solutions that serve the growing digital infrastructure demands of the Kingdom.
</p>

          </div>
        </div>
      </section>

      {/* CTA BANNER (LIKE YOUR IMAGE) */}
      <section className="cta">
        <div className="cta-container">
          <div className="cta-left">

            <div className="cta-text">
              <p className="cta-title">TURN YOUR REQUIREMENTS INTO ENGINEERED EXECUTION</p>
            </div>
          </div>

          {/* Scroll to contact section */}
          <a className="cta-btn" href="#contact">
            CONTACT US
          </a>
        </div>
      </section>

      {/* VISION + VALUES */}
      <section className="vv">
        <div className="vv-container">
          <div className="vv-card">
            <h3>VISION</h3>
            <p>
              To deliver trusted fiber optic solutions that strengthen communication networks across Saudi Arabia.
            </p>
          </div>

          <div className="vv-card">
            <h3>MISSION</h3>
            <p>
              To deliver precise, efficient, and innovative fiber optic and cabling solutions that connect communities and strengthen communication networks across the Kingdom
            </p>
          </div>
        </div>
      </section>
      <Footer />

    </main>
  );
}
