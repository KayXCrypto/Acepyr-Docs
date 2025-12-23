import React from "react";
import "../styles/Section.css";

const CoreFeatures = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge badge-green">Ecosystem</span>
        <h1>Core Features</h1>
        <p className="lead">
          Explore Acepyr's powerful features designed to unlock behavioral intelligence 
          and drive data-driven decisions.
        </p>
      </header>

      <section id="key-features">
        <h2>Key Features</h2>
        
        <div className="feature-detailed">
          <div className="feature-header">
            <div className="feature-icon-large">📊</div>
            <div>
              <h3>Real-Time Behavioral Tracking</h3>
              <span className="feature-tag">Core</span>
            </div>
          </div>
          <p>
            Track and analyze user behavior in real-time with our high-performance event streaming infrastructure. 
            Process millions of events per second with sub-20ms latency.
          </p>
          <div className="feature-specs">
            <div className="spec-item">
              <strong>Throughput:</strong> 10M+ events/second
            </div>
            <div className="spec-item">
              <strong>Latency:</strong> &lt; 20ms p99
            </div>
            <div className="spec-item">
              <strong>Reliability:</strong> 99.99% uptime
            </div>
          </div>
        </div>

        <div className="feature-detailed">
          <div className="feature-header">
            <div className="feature-icon-large">🧠</div>
            <div>
              <h3>AI-Powered Intelligence</h3>
              <span className="feature-tag">AI/ML</span>
            </div>
          </div>
          <p>
            Leverage advanced machine learning models to extract insights from behavioral data. 
            Our AI analyzes patterns, predicts actions, and provides actionable recommendations.
          </p>
          <ul className="custom-list">
            <li><strong>Sentiment Analysis:</strong> Understand user emotions and market psychology</li>
            <li><strong>Anomaly Detection:</strong> Identify unusual patterns and potential risks</li>
            <li><strong>Predictive Scoring:</strong> Forecast user actions with 95%+ accuracy</li>
            <li><strong>Behavioral Clustering:</strong> Group users by similar behavior patterns</li>
          </ul>
        </div>

        <div className="feature-detailed">
          <div className="feature-header">
            <div className="feature-icon-large">🔒</div>
            <div>
              <h3>Enterprise Security</h3>
              <span className="feature-tag">Security</span>
            </div>
          </div>
          <p>
            Military-grade security protecting your sensitive financial and behavioral data. 
            Compliant with GDPR, SOC 2, and industry standards.
          </p>
          <div className="security-features">
            <div className="security-item">✓ End-to-end encryption (AES-256)</div>
            <div className="security-item">✓ Zero-knowledge architecture</div>
            <div className="security-item">✓ Multi-factor authentication</div>
            <div className="security-item">✓ Role-based access control</div>
            <div className="security-item">✓ Audit logging & compliance</div>
            <div className="security-item">✓ DDoS protection</div>
          </div>
        </div>

        <div className="feature-detailed">
          <div className="feature-header">
            <div className="feature-icon-large">🧪</div>
            <div>
              <h3>FiMMO Sandbox</h3>
              <span className="feature-tag">Development</span>
            </div>
          </div>
          <p>
            Test and develop in a risk-free environment that perfectly replicates production. 
            No rate limits, mock data generation, and instant environment reset.
          </p>
          <a href="#sandbox" className="feature-link">Explore Sandbox →</a>
        </div>
      </section>

      <section id="advanced-capabilities">
        <h2>Advanced Capabilities</h2>
        
        <div className="capabilities-grid">
          <div className="capability-card">
            <h3>🔄 Stream Processing</h3>
            <p>Process data streams in real-time with Apache Kafka and Apache Flink integration.</p>
          </div>
          
          <div className="capability-card">
            <h3>📈 Custom Metrics</h3>
            <p>Define and track custom behavioral metrics specific to your business needs.</p>
          </div>
          
          <div className="capability-card">
            <h3>🎯 Segmentation</h3>
            <p>Create dynamic user segments based on behavioral patterns and attributes.</p>
          </div>
          
          <div className="capability-card">
            <h3>⚡ Edge Computing</h3>
            <p>Deploy models at the edge for ultra-low latency in critical applications.</p>
          </div>
          
          <div className="capability-card">
            <h3>🔗 Webhooks</h3>
            <p>Real-time notifications via webhooks for critical behavioral events.</p>
          </div>
          
          <div className="capability-card">
            <h3>📊 Data Export</h3>
            <p>Export data to your data warehouse (Snowflake, BigQuery, Redshift).</p>
          </div>
        </div>
      </section>

      <section id="use-cases">
        <h3>Use Cases</h3>
        
        <div className="use-case">
          <h4>Financial Trading Platforms</h4>
          <p>
            Track trader behavior to identify patterns, optimize UX, and predict churn. 
            Analyze trade execution patterns to detect potential fraud or market manipulation.
          </p>
          <div className="use-case-tags">
            <span className="tag">Risk Detection</span>
            <span className="tag">UX Optimization</span>
            <span className="tag">Fraud Prevention</span>
          </div>
        </div>

        <div className="use-case">
          <h4>Wealth Management</h4>
          <p>
            Understand client investment preferences and risk tolerance through behavioral analysis. 
            Provide personalized portfolio recommendations based on historical interactions.
          </p>
          <div className="use-case-tags">
            <span className="tag">Personalization</span>
            <span className="tag">Risk Assessment</span>
            <span className="tag">Client Insights</span>
          </div>
        </div>

        <div className="use-case">
          <h4>FinTech Applications</h4>
          <p>
            Optimize user onboarding, reduce drop-off rates, and increase engagement. 
            Use behavioral data to improve product features and user experience.
          </p>
          <div className="use-case-tags">
            <span className="tag">Conversion Optimization</span>
            <span className="tag">Product Analytics</span>
            <span className="tag">User Retention</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreFeatures;