import React, { useState, useEffect } from "react";
import { Search, Moon, Sun } from "lucide-react";
import { searchSections } from "../data/sectionsData";
import "../styles/Header.css";

// ===== SUB-COMPONENTS =====

const Logo = () => (
  <div className="logo-section">
    <img 
      src="https://framerusercontent.com/images/Z1KoPu1SsDcyVhvDMDJrBs7Dl7Y.svg?width=318&height=275" 
      alt="Acepyr Logo" 
      className="logo-img" 
    />
    <div className="brand-group">
      <span className="brand-main">Acepyr</span>
      <span className="brand-sep">|</span>
      <span className="brand-docs">DOCS</span>
    </div>
  </div>
);

const SearchBar = ({ onSearch, onFocus, onBlur }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      onBlur?.();
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        document.querySelector('.search-input')?.focus();
      }
      if (e.key === 'Escape' && isFocused) {
        document.querySelector('.search-input')?.blur();
        setQuery("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocused]);

  return (
    <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
      <Search size={14} className="search-icon" />
      <input 
        type="text" 
        placeholder="Search documentation..." 
        className="search-input"
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Search documentation"
      />
      <span className="search-kbd">⌘K</span>
    </div>
  );
};

const SearchResults = ({ results, onClose }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="search-results">
      <div className="search-results-header">
        <span>Search Results ({results.length})</span>
      </div>
      <div className="search-results-list">
        {results.map(section => (
          <a
            key={section.id}
            href={`#${section.slug}`}
            className="search-result-item"
            onClick={onClose}
          >
            <div className="search-result-title">{section.title}</div>
            <div className="search-result-description">{section.meta.description}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

const Navigation = ({ links }) => (
  <nav className="nav-links" role="navigation">
    {links.map((link) => (
      <a 
        key={link.id}
        href={link.href} 
        className="nav-link"
        aria-label={link.label}
      >
        {link.label}
      </a>
    ))}
  </nav>
);

const ThemeToggle = ({ theme, onToggle }) => (
  <button 
    className="theme-btn" 
    onClick={onToggle}
    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    title="Toggle theme"
  >
    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
  </button>
);

// ===== MAIN HEADER COMPONENT =====

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Navigation links configuration
  const navLinks = [
    { id: 'status', href: '#status', label: 'Status' },
    { id: 'blog', href: '#blog', label: 'Blog' },
    { id: 'community', href: '#community', label: 'Community' },
    { id: 'network', href: '#network', label: 'Networth By Acepyr' }
  ];

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSearch = (query) => {
    if (query.trim().length > 0) {
      const results = searchSections(query);
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <header className="header-container" role="banner">
      {/* LEFT SECTION: Logo & Brand */}
      <div className="header-left">
        <Logo />
      </div>

      {/* CENTER SECTION: Search Bar */}
      <div className="header-center">
        <div className="search-container">
          <SearchBar 
            onSearch={handleSearch}
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
          />
          {showSearchResults && searchResults.length > 0 && (
            <SearchResults 
              results={searchResults}
              onClose={() => setShowSearchResults(false)}
            />
          )}
        </div>
      </div>

      {/* RIGHT SECTION: Navigation & Actions */}
      <div className="header-right">
        <Navigation links={navLinks} />
        <ThemeToggle theme={theme} onToggle={handleThemeToggle} />
      </div>
    </header>
  );
};

export default Header;