import React from "react";
import "../styles/Footer.css";
import xIcon from "../assets/social/twitter.png";
import discordIcon from "../assets/social/discord.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <img src="https://framerusercontent.com/images/Z1KoPu1SsDcyVhvDMDJrBs7Dl7Y.svg" alt="Logo" />
            <span>Acepyr | DOCS</span>
          </div>
          <div className="footer-divider-v"></div>
          <p className="powered-by">Powered by Acepyr</p>
        </div>

        <nav className="footer-nav">
          <a href="#networth">Networth By Acepyr</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          
          <div className="footer-social">
          {/* 2. Sử dụng biến đã import vào thuộc tính src */}
          <a href="https://x.com/acepyr_" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={xIcon} alt="X (Twitter)" className="social-img" />
          </a>
          
          <a href="https://discord.com/invite/M6cWMgXUry" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={discordIcon} alt="Discord" className="social-img" />
          </a>
        </div>
        </nav>
      </div>
      
      <div className="footer-legal-bar">
        <p>Democratizing Financial Knowledge.</p>
      </div>
    </footer>
  );
};

export default Footer;