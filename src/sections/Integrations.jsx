import React from "react";
import "../styles/Section.css";

const Integrations = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge badge-green">Ecosystem</span>
        <h1>Integrations & Partnerships</h1>
        <p className="lead">
          Connect Acepyr with your favorite tools and platforms. Build powerful workflows 
          with our extensive integration ecosystem.
        </p>
      </header>

      <section id="available-integrations">
        <h2>Available Integrations</h2>

        <div className="integration-category">
          <h3>📊 Analytics & BI</h3>
          <div className="integration-grid">
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Google Analytics" />
              <h4>Google Analytics</h4>
              <p>Stream behavioral events to GA4</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Mixpanel" />
              <h4>Mixpanel</h4>
              <p>Product analytics integration</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Amplitude" />
              <h4>Amplitude</h4>
              <p>User behavior analytics</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Tableau" />
              <h4>Tableau</h4>
              <p>Business intelligence dashboards</p>
              <span className="status-badge status-beta">Beta</span>
            </div>
          </div>
        </div>

        <div className="integration-category">
          <h3>💾 Data Warehouses</h3>
          <div className="integration-grid">
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Snowflake" />
              <h4>Snowflake</h4>
              <p>Cloud data warehouse sync</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="BigQuery" />
              <h4>Google BigQuery</h4>
              <p>Data export and analysis</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Redshift" />
              <h4>Amazon Redshift</h4>
              <p>AWS data warehouse integration</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Databricks" />
              <h4>Databricks</h4>
              <p>Lakehouse platform sync</p>
              <span className="status-badge status-coming">Coming</span>
            </div>
          </div>
        </div>

        <div className="integration-category">
          <h3>🔔 Communication & Alerts</h3>
          <div className="integration-grid">
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Slack" />
              <h4>Slack</h4>
              <p>Real-time alerts and notifications</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Discord" />
              <h4>Discord</h4>
              <p>Community alerts integration</p>
              <span className="status-badge status-beta">Beta</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="PagerDuty" />
              <h4>PagerDuty</h4>
              <p>Incident management</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Email" />
              <h4>Email (SMTP)</h4>
              <p>Custom email notifications</p>
              <span className="status-badge status-live">Live</span>
            </div>
          </div>
        </div>

        <div className="integration-category">
          <h3>🤖 AI & ML Platforms</h3>
          <div className="integration-grid">
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="OpenAI" />
              <h4>OpenAI</h4>
              <p>GPT-powered insights generation</p>
              <span className="status-badge status-beta">Beta</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="TensorFlow" />
              <h4>TensorFlow</h4>
              <p>Custom ML model integration</p>
              <span className="status-badge status-live">Live</span>
            </div>
            <div className="integration-card">
              <img src="https://via.placeholder.com/60" alt="Hugging Face" />
              <h4>Hugging Face</h4>
              <p>NLP model deployment</p>
              <span className="status-badge status-coming">Coming</span>
            </div>
          </div>
        </div>
      </section>

      <section id="integration-guides">
        <h2>Integration Guides</h2>

        <div className="guide-item">
          <h3>Quick Start: Snowflake Integration</h3>
          <p>Export your behavioral data to Snowflake in 3 simple steps:</p>
          <div className="code-block">
            <pre>{`// 1. Configure connection
const snowflake = await client.integrations.connect('snowflake', {
  account: 'your-account',
  warehouse: 'COMPUTE_WH',
  database: 'ACEPYR_DATA',
  schema: 'BEHAVIORAL'
});

// 2. Set up data sync
await snowflake.sync.configure({
  frequency: 'hourly',
  tables: ['events', 'users', 'sessions'],
  compression: true
});

// 3. Start syncing
await snowflake.sync.start();`}</pre>
          </div>
        </div>

        <div className="guide-item">
          <h3>Webhook Configuration</h3>
          <p>Receive real-time notifications for behavioral events:</p>
          <div className="code-block">
            <pre>{`// Create webhook endpoint
const webhook = await client.webhooks.create({
  url: 'https://your-domain.com/acepyr-webhook',
  events: [
    'behavioral.tracked',
    'intelligence.anomaly_detected',
    'user.high_risk_score'
  ],
  secret: 'your_webhook_secret'
});

// Verify webhook signature
const isValid = client.webhooks.verify(
  payload,
  signature,
  webhook.secret
);`}</pre>
          </div>
        </div>

        <div className="guide-item">
          <h3>Slack Notifications</h3>
          <p>Get instant alerts in your Slack workspace:</p>
          <div className="code-block">
            <pre>{`// Connect Slack
await client.integrations.connect('slack', {
  webhook_url: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK',
  channel: '#acepyr-alerts',
  username: 'Acepyr Bot'
});

// Configure alert rules
await client.alerts.create({
  name: 'High Risk Detection',
  condition: 'risk_score > 0.8',
  action: {
    type: 'slack',
    message: 'High risk user detected: {{user_id}}'
  }
});`}</pre>
          </div>
        </div>
      </section>

      <section id="custom-integrations">
        <h3>Custom Integrations</h3>
        <p>
          Build your own integrations using our flexible API and webhook system. 
          Our platform supports standard protocols and formats.
        </p>

        <div className="custom-integration-features">
          <div className="feature-box">
            <h4>🔌 RESTful API</h4>
            <p>Standard HTTP/HTTPS endpoints with JSON payloads</p>
          </div>
          <div className="feature-box">
            <h4>🔄 Webhooks</h4>
            <p>Real-time event notifications via HTTP POST</p>
          </div>
          <div className="feature-box">
            <h4>📡 WebSockets</h4>
            <p>Bidirectional streaming for real-time data</p>
          </div>
          <div className="feature-box">
            <h4>🗂️ GraphQL</h4>
            <p>Flexible data querying with GraphQL API</p>
          </div>
        </div>

        <div className="cta-box">
          <h4>Need a Custom Integration?</h4>
          <p>Our team can help build integrations tailored to your specific needs.</p>
          <button className="btn-primary">Contact Enterprise Sales</button>
        </div>
      </section>

      <div className="partnership-section">
        <h2>Technology Partners</h2>
        <p>Trusted by leading companies and platforms:</p>
        <div className="partner-logos">
          <div className="partner-logo">AWS Partner</div>
          <div className="partner-logo">Google Cloud Partner</div>
          <div className="partner-logo">Microsoft Azure</div>
          <div className="partner-logo">Snowflake Partner</div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;