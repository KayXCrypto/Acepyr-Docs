import React from "react";
import "../styles/Section.css";

const APIReference = () => {
  return (
    <div className="docs-content">
      <header className="content-header">
        <span className="badge badge-purple">Architecture</span>
        <h1>API Reference</h1>
        <p className="lead">
          Complete API documentation with examples, request/response formats, 
          and best practices for integrating with Acepyr.
        </p>
      </header>

      <section id="authentication">
        <h2>Authentication</h2>
        <p>
          All API requests require authentication using an API key. Include your API key 
          in the <code>Authorization</code> header of each request.
        </p>

        <div className="code-block">
          <pre>{`// Request headers
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}</pre>
        </div>

        <div className="info-box">
          <strong>🔐 Security Best Practices:</strong>
          <ul>
            <li>Never expose API keys in client-side code</li>
            <li>Use environment variables to store keys</li>
            <li>Rotate keys regularly (every 90 days recommended)</li>
            <li>Use different keys for sandbox and production</li>
          </ul>
        </div>
      </section>

      <section id="endpoints">
        <h2>API Endpoints</h2>

        <div className="endpoint-section">
          <div className="endpoint-header">
            <span className="method method-post">POST</span>
            <code>/v2/behavioral/track</code>
          </div>
          <p>Track a behavioral event.</p>
          
          <h4>Request Body</h4>
          <div className="code-block">
            <pre>{`{
  "event_id": "evt_abc123",
  "type": "user_action",
  "user_id": "usr_456",
  "action": "portfolio_view",
  "metadata": {
    "page": "dashboard",
    "section": "holdings",
    "timestamp": 1735689600000
  },
  "context": {
    "ip": "192.168.1.1",
    "user_agent": "Mozilla/5.0...",
    "session_id": "sess_789"
  }
}`}</pre>
          </div>

          <h4>Response</h4>
          <div className="code-block">
            <pre>{`{
  "success": true,
  "event_id": "evt_abc123",
  "tracked_at": "2025-01-01T00:00:00Z",
  "intelligence_score": 0.92
}`}</pre>
          </div>

          <h4>Response Codes</h4>
          <table className="response-codes">
            <tbody>
              <tr>
                <td><code>200</code></td>
                <td>Event tracked successfully</td>
              </tr>
              <tr>
                <td><code>400</code></td>
                <td>Invalid request body</td>
              </tr>
              <tr>
                <td><code>401</code></td>
                <td>Unauthorized - invalid API key</td>
              </tr>
              <tr>
                <td><code>429</code></td>
                <td>Rate limit exceeded</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="endpoint-section">
          <div className="endpoint-header">
            <span className="method method-get">GET</span>
            <code>/v2/behavioral/query</code>
          </div>
          <p>Query behavioral events with filters.</p>
          
          <h4>Query Parameters</h4>
          <div className="code-block">
            <pre>{`GET /v2/behavioral/query?
  user_id=usr_456&
  type=user_action&
  from=2025-01-01&
  to=2025-01-31&
  limit=100&
  offset=0`}</pre>
          </div>

          <h4>Response</h4>
          <div className="code-block">
            <pre>{`{
  "data": [
    {
      "event_id": "evt_abc123",
      "type": "user_action",
      "action": "portfolio_view",
      "timestamp": "2025-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 1250,
    "limit": 100,
    "offset": 0,
    "has_more": true
  }
}`}</pre>
          </div>
        </div>

        <div className="endpoint-section">
          <div className="endpoint-header">
            <span className="method method-post">POST</span>
            <code>/v2/intelligence/analyze</code>
          </div>
          <p>Get AI-powered insights from behavioral data.</p>
          
          <h4>Request Body</h4>
          <div className="code-block">
            <pre>{`{
  "user_id": "usr_456",
  "metrics": ["sentiment", "risk_score", "engagement"],
  "timeframe": "30d"
}`}</pre>
          </div>

          <h4>Response</h4>
          <div className="code-block">
            <pre>{`{
  "user_id": "usr_456",
  "analysis": {
    "sentiment": {
      "score": 0.78,
      "trend": "positive",
      "confidence": 0.95
    },
    "risk_score": {
      "score": 0.23,
      "level": "low",
      "factors": ["stable_behavior", "consistent_patterns"]
    },
    "engagement": {
      "score": 0.85,
      "sessions": 45,
      "avg_duration": "12m 30s"
    }
  },
  "generated_at": "2025-01-15T10:30:00Z"
}`}</pre>
          </div>
        </div>

        <div className="endpoint-section">
          <div className="endpoint-header">
            <span className="method method-delete">DELETE</span>
            <code>/v2/behavioral/user/:user_id</code>
          </div>
          <p>Delete all behavioral data for a user (GDPR compliance).</p>
          
          <h4>Response</h4>
          <div className="code-block">
            <pre>{`{
  "success": true,
  "user_id": "usr_456",
  "events_deleted": 1250,
  "deleted_at": "2025-01-15T10:30:00Z"
}`}</pre>
          </div>
        </div>
      </section>

      <section id="rate-limits">
        <h3>Rate Limits</h3>
        <p>
          Rate limits vary by plan and environment. Sandbox environment has no rate limits.
        </p>

        <table className="rate-limits-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Requests/Second</th>
              <th>Requests/Day</th>
              <th>Burst Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sandbox</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Starter</td>
              <td>100</td>
              <td>1M</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Professional</td>
              <td>1,000</td>
              <td>10M</td>
              <td>2,000</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>10,000+</td>
              <td>100M+</td>
              <td>Custom</td>
            </tr>
          </tbody>
        </table>

        <div className="code-block">
          <pre>{`// Rate limit headers in response
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 995
X-RateLimit-Reset: 1735689600`}</pre>
        </div>
      </section>

      <div className="sdk-section">
        <h2>Official SDKs</h2>
        <div className="sdk-grid">
          <div className="sdk-card">
            <h3>JavaScript / Node.js</h3>
            <code>npm install @acepyr/sdk</code>
          </div>
          <div className="sdk-card">
            <h3>Python</h3>
            <code>pip install acepyr</code>
          </div>
          <div className="sdk-card">
            <h3>Go</h3>
            <code>go get github.com/acepyr/go-sdk</code>
          </div>
          <div className="sdk-card">
            <h3>Ruby</h3>
            <code>gem install acepyr</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIReference;