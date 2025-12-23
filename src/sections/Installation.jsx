import React from "react";
import "../styles/Section.css";

const Installation = () => {
  return (
    <div className="docs-content">
        <p>Coming Soon ...</p>
      {/* <header className="content-header">
        <span className="badge badge-blue">Get Started</span>
        <h1>Installation & Setup</h1>
        <p className="lead">
          Complete guide to installing and configuring Acepyr SDK across different platforms and environments.
        </p>
      </header>

      <section id="system-requirements">
        <h2>System Requirements</h2>
        <div className="requirements-table">
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Minimum</th>
                <th>Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Node.js</td>
                <td>16.x</td>
                <td>18.x or later</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>512 MB</td>
                <td>2 GB</td>
              </tr>
              <tr>
                <td>Disk Space</td>
                <td>100 MB</td>
                <td>500 MB</td>
              </tr>
              <tr>
                <td>Network</td>
                <td>1 Mbps</td>
                <td>10 Mbps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="installation-steps">
        <h2>Installation Steps</h2>
        
        <div className="installation-method">
          <h3>Using npm</h3>
          <div className="code-block">
            <pre>{`# Install the SDK
npm install @acepyr/sdk

# Install TypeScript types (optional)
npm install --save-dev @types/acepyr`}</pre>
          </div>
        </div>

        <div className="installation-method">
          <h3>Using yarn</h3>
          <div className="code-block">
            <pre>{`# Install the SDK
yarn add @acepyr/sdk

# Install TypeScript types (optional)
yarn add -D @types/acepyr`}</pre>
          </div>
        </div>

        <div className="installation-method">
          <h3>Using CDN (Browser)</h3>
          <div className="code-block">
            <pre>{`<!-- Add to your HTML -->
<script src="https://cdn.acepyr.com/sdk/v2/acepyr.min.js"></script>
<script>
  const client = new Acepyr.Client({
    apiKey: 'your_api_key'
  });
</script>`}</pre>
          </div>
        </div>

        <h3>Configuration</h3>
        <p>Create a configuration file in your project root:</p>
        <div className="code-block">
          <pre>{`// acepyr.config.js
module.exports = {
  apiKey: process.env.ACEPYR_API_KEY,
  environment: 'sandbox', // 'sandbox' or 'production'
  options: {
    timeout: 5000,
    retries: 3,
    logging: true,
    debug: false
  },
  endpoints: {
    behavioral: 'https://api.acepyr.com/v2/behavioral',
    intelligence: 'https://api.acepyr.com/v2/intelligence',
    sandbox: 'https://sandbox.acepyr.com/v2'
  }
};`}</pre>
        </div>

        <h3>Environment Variables</h3>
        <p>Set up your environment variables:</p>
        <div className="code-block">
          <pre>{`# .env
ACEPYR_API_KEY=your_api_key_here
ACEPYR_ENV=sandbox
ACEPYR_DEBUG=false`}</pre>
        </div>
      </section>

      <section id="troubleshooting">
        <h3>Troubleshooting</h3>
        
        <div className="troubleshooting-item">
          <h4>❌ Error: API Key Invalid</h4>
          <p><strong>Solution:</strong> Verify your API key in the dashboard and ensure it's correctly set in your environment variables.</p>
        </div>

        <div className="troubleshooting-item">
          <h4>❌ Error: Connection Timeout</h4>
          <p><strong>Solution:</strong> Check your network connection and firewall settings. Ensure ports 443 and 8443 are open.</p>
        </div>

        <div className="troubleshooting-item">
          <h4>❌ Error: Module Not Found</h4>
          <p><strong>Solution:</strong> Clear your package cache and reinstall:</p>
          <div className="code-block">
            <pre>{`npm cache clean --force
rm -rf node_modules package-lock.json
npm install`}</pre>
          </div>
        </div>

        <div className="troubleshooting-item">
          <h4>❌ Error: Rate Limit Exceeded</h4>
          <p><strong>Solution:</strong> You're in sandbox mode which has unlimited requests. If using production, upgrade your plan or implement request throttling.</p>
        </div>
      </section>

      <div className="support-box">
        <h3>Need Help?</h3>
        <p>If you're still experiencing issues:</p>
        <ul>
          <li>Check our <a href="#troubleshooting">troubleshooting guide</a></li>
          <li>Visit our <a href="#community">community forum</a></li>
          <li>Contact <a href="mailto:support@acepyr.com">support@acepyr.com</a></li>
        </ul>
      </div> */}
    </div>
  );
};

export default Installation;
