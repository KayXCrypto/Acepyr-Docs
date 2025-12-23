import React from "react";
import "../styles/Section.css";

const QuickStart = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge badge-blue">Get Started</span>
        <h1>Quick Start Guide</h1>
        <p className="lead">
          Get up and running with Acepyr in less than 5 minutes. This guide will walk you 
          through the basics of setting up your first project.
        </p>
      </header>

      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <p>Before you begin, make sure you have:</p>
        <div className="checklist">
          <div className="checklist-item">
            <input type="checkbox" disabled />
            <label>Node.js version 16.x or higher</label>
          </div>
          <div className="checklist-item">
            <input type="checkbox" disabled />
            <label>An Acepyr API key (get one from your dashboard)</label>
          </div>
          <div className="checklist-item">
            <input type="checkbox" disabled />
            <label>Basic knowledge of REST APIs</label>
          </div>
        </div>
      </section>

      <section id="first-steps">
        <h2>First Steps</h2>
        <h3>1. Install the SDK</h3>
        <div className="code-block">
          <pre>{`npm install @acepyr/sdk
# or
yarn add @acepyr/sdk`}</pre>
        </div>

        <h3>2. Initialize the Client</h3>
        <div className="code-block">
          <pre>{`import { AcepyrClient } from '@acepyr/sdk';

const client = new AcepyrClient({
  apiKey: 'your_api_key_here',
  environment: 'sandbox' // or 'production'
});`}</pre>
        </div>

        <h3>3. Make Your First Request</h3>
        <div className="code-block">
          <pre>{`const response = await client.behavioral.track({
  event_id: 'user_action_001',
  type: 'portfolio_view',
  user_id: 'usr_12345',
  metadata: {
    section: 'dashboard',
    timestamp: Date.now()
  }
});

console.log('Event tracked:', response);`}</pre>
        </div>
      </section>

      <section id="basic-usage">
        <h3>Basic Usage Examples</h3>
        
        <div className="usage-example">
          <h4>Track User Behavior</h4>
          <div className="code-block">
            <pre>{`// Track a button click
await client.behavioral.track({
  event_id: 'btn_click_001',
  type: 'button_interaction',
  action: 'buy_stock',
  metadata: {
    stock_symbol: 'AAPL',
    amount: 1000
  }
});`}</pre>
          </div>
        </div>

        <div className="usage-example">
          <h4>Query Behavioral Data</h4>
          <div className="code-block">
            <pre>{`// Get user's recent activities
const activities = await client.behavioral.query({
  user_id: 'usr_12345',
  timeRange: '7d',
  limit: 50
});`}</pre>
          </div>
        </div>

        <div className="usage-example">
          <h4>Get Intelligence Insights</h4>
          <div className="code-block">
            <pre>{`// Analyze user behavior patterns
const insights = await client.intelligence.analyze({
  user_id: 'usr_12345',
  metrics: ['sentiment', 'risk_score', 'engagement']
});`}</pre>
          </div>
        </div>
      </section>

      <div className="next-steps">
        <h3>Next Steps</h3>
        <div className="steps-grid">
          <a href="#installation" className="step-card">
            <span className="step-number">1</span>
            <h4>Complete Installation</h4>
            <p>Detailed setup for all platforms</p>
          </a>
          <a href="#api-reference" className="step-card">
            <span className="step-number">2</span>
            <h4>API Reference</h4>
            <p>Explore all available endpoints</p>
          </a>
          <a href="#sandbox" className="step-card">
            <span className="step-number">3</span>
            <h4>Try the Sandbox</h4>
            <p>Test in a safe environment</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickStart;