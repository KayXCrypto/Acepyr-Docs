import React from "react";

const FiMMOSandbox = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge">Simulator</span>
        <h1>FiMMO Sandbox: Synthetic Universe</h1>
        <p className="lead">
          A proprietary meta-data simulation environment powered by AI-generated synthetic data for hyper-realistic testing.
        </p>
      </header>

      <section id="why-synthetic">
        <h2>Why Synthetic Data?</h2>
        <p>
          Instead of static mock data, Acepyr's Sandbox uses **Generative AI Models** to create a continuous stream of behavioral data, allowing you to test algorithms in "live-like" conditions.
        </p>
        
        <ul className="custom-list">
          <li><strong>Real-time Stress Testing:</strong> Simulate millions of concurrent users with sub-10ms latency.</li>
          <li><strong>Zero Privacy Risk:</strong> 100% AI-generated data with no exposure to actual user PII.</li>
          <li><strong>Scenario Injection:</strong> Inject "Black Swan" events to test the resilience of your financial models.</li>
        </ul>
      </section>

      <div className="idea-box">
        <div className="idea-icon">🚀</div>
        <div className="idea-content">
          <p>Get started immediately with our <strong>Sub-10ms API Endpoint</strong> in the Sandbox environment to experience Acepyr's raw processing speed.</p>
        </div>
      </div>
    </div>
  );
};

export default FiMMOSandbox;