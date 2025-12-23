import React from "react";
import "../styles/Section.css";
import ArcSlider from "../components/AcepyrSlider";

const Introduction = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge badge-blue">Get Started</span>
        <h1>Introduction to Acepyr</h1>
        <p className="lead">
          Welcome to Acepyr's documentation. Learn about our mission to revolutionize 
          Behavioral Intelligence through advanced meta-data analysis and sandbox environments.
        </p>
      </header>
      <section className="arc-section">
        <h2 style={{ textAlign: 'center' }}>Explore Our Universe</h2>
        <ArcSlider />
      </section>

      <section id="vision-mission">
        <h2>Vision & Mission</h2>
        <p>
          Our goal is to standardize how the world understands and interacts with financial 
          behavioral data through the FiMMO model. We believe that every financial interaction 
          contains valuable insights waiting to be decoded.
        </p>
        <div className="highlight-box">
          <h3>Our Mission</h3>
          <p>
            To provide developers and financial institutions with cutting-edge tools 
            for analyzing, predicting, and understanding user behavior at scale.
          </p>
        </div>
      </section>

      <section id="why-choose">
        <h2>Why Choose Acepyr?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Secure Sandbox</h3>
            <p>Isolated and strictly secure testing environments with zero data leakage.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Ultra-Low Latency</h3>
            <p>Lightning-fast meta-data processing with response times under 20ms.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📚</div>
            <h3>Comprehensive Docs</h3>
            <p>Extensive API documentation with code examples and community support.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered</h3>
            <p>Advanced behavioral AI models for predictive analytics and insights.</p>
          </div>
        </div>
      </section>

      <section id="key-benefits">
        <h3>Key Benefits</h3>
        <ul className="custom-list">
          <li><strong>Real-time Analysis:</strong> Process behavioral data in milliseconds</li>
          <li><strong>Scalable Infrastructure:</strong> Built to handle millions of events per second</li>
          <li><strong>Enterprise Security:</strong> Military-grade encryption and compliance</li>
          <li><strong>Developer-Friendly:</strong> RESTful APIs with extensive SDKs</li>
        </ul>
      </section>

      <div className="idea-box">
        <div className="idea-icon">💡</div>
        <div className="idea-content">
          <p>Ready to dive deeper? Explore the <a href="#sandbox">FiMMO Sandbox</a> environment to start building.</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;