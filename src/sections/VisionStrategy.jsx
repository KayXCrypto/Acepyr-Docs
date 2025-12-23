import React from "react";
import "../styles/Section.css";

const VisionStrategy = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge badge-green">Strategic Vision</span>
        <h1>The New Standard of Intelligence</h1>
        <p className="lead">
          Acepyr doesn't just collect data; we build a standardized intelligence infrastructure, 
          transforming raw interactions into strategic assets through the FiMMO model.
        </p>
      </header>

      <section id="core-vision">
        <h2>Core Vision</h2>
        <p>
          Acepyr’s vision is to construct a universal **Intelligence Layer**, 
          where every financial behavior is decoded into quantifiable and predictive metrics.
        </p>
        
        <div className="quote-box">
          <div className="quote-icon">💭</div>
          <blockquote>
            "We don't just track actions; we decode the intent behind every interaction."
          </blockquote>
          <cite>— Acepyr Strategy Team</cite>
        </div>

        <div className="vision-pillars">
          <div className="pillar">
            <h3>🎯 Intent-Driven</h3>
            <p>Shifting focus from historical statistics to real-time user intent prediction.</p>
          </div>
          <div className="pillar">
            <h3>🌐 Universal Standard</h3>
            <p>Establishing FiMMO as the global standard language for financial behavioral data.</p>
          </div>
          <div className="pillar">
            <h3>🔐 Privacy-First AI</h3>
            <p>Processing AI on encrypted data to ensure absolute user privacy and compliance.</p>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <h2>Roadmap 2024 - 2025</h2>
        <div className="roadmap-container">
          <div className="roadmap-item active">
            <div className="roadmap-point">Q4 2024</div>
            <div className="roadmap-content">
              <h3>Intelligence Layer Completion</h3>
              <p>Finalizing Vector Database integration for natural language behavioral querying.</p>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-point">2025</div>
            <div className="roadmap-content">
              <h3>FiMMO Ecosystem Expansion</h3>
              <p>Launching the Marketplace for Custom Intent Models and decentralized intelligence.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionStrategy;