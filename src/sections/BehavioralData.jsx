import React from "react";
import ImageSlider from "../components/ImageSlider";

const BehavioralData = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge">Data Architecture</span>
        <h1>Behavioral Intelligence Layers</h1>
        <p className="lead">
          Acepyr structures behavioral data into actionable intelligence through three distinct layers.
        </p>
      </header>
        <ImageSlider />
      <section id="intelligence-layers">
        <h2>The 3 FiMMO Intelligence Layers</h2>
        <p>Every single interaction is decomposed into three tiers of information:</p>
        
        <div className="feature-grid">
          <div className="feature-card">
            <h4>1. Identity Layer</h4>
            <p>Identifies entities and behavioral fingerprints without relying on PII (Personally Identifiable Information).</p>
          </div>
          <div className="feature-card">
            <h4>2. Contextual Layer</h4>
            <p>Captures environmental metadata: device telemetry, network latency, geolocation, and market state.</p>
          </div>
          <div className="feature-card">
            <h4>3. Intent Layer</h4>
            <p>The highest tier: Utilizing AI to predict the probability of intent (Buy, Sell, Churn, or Hedge).</p>
          </div>
        </div>
      </section>

      <section id="standard-structure">
        <h2>Standardized Meta-Data Structure</h2>
        <p>Acepyr delivers data in a high-fidelity format optimized for sub-10ms processing.</p>
        <div className="code-block">
          <pre>
{`{
  "trace_id": "ace-v3-99x",
  "layers": {
    "identity": { "trust_score": 0.99, "entity_type": "institutional" },
    "context": { "env": "prod", "latency": "8ms", "region": "sg-1" },
    "intent": { 
      "prediction": "portfolio_expansion",
      "confidence": 0.945,
      "urgency": "high"
    }
  }
}`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default BehavioralData;