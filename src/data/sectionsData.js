import Introduction from "../sections/Introduction";
import QuickStart from "../sections/QuickStart";
import Installation from "../sections/Installation";
import VisionStrategy from "../sections/VisionStrategy";
import CoreFeatures from "../sections/CoreFeature";
import Integrations from "../sections/Integrations";
import SystemArchitecture from "../sections/SystemArchitecture";
import APIReference from "../sections/APIReference";
import FiMMOSandbox from "../sections/FiMMOSandbox";
// import TestingGuide from "../sections/TestingGuide";
import BehavioralData from "../sections/BehavioralData";

// ============================================
// CATEGORIES - Nhóm chính
// ============================================
export const categories = [
  {
    id: "get-started",
    label: "Get Started",
    icon: "Rocket",
    description: "Everything you need to begin with Acepyr",
    order: 1,
    color: "#3b82f6" // blue
  },
  {
    id: "ecosystem",
    label: "Acepyr Ecosystem",
    icon: "Globe",
    description: "Explore the Acepyr platform features",
    order: 2,
    color: "#10b981" // green
  },
  {
    id: "architecture",
    label: "System Architecture",
    icon: "Layers",
    description: "Technical architecture and implementation",
    order: 3,
    color: "#8b5cf6" // purple
  },
  {
    id: "sandbox",
    label: "Sandbox & Testing",
    icon: "TestTube",
    description: "Development and testing environment",
    order: 4,
    color: "#f59e0b" // amber
  },
  {
    id: "intelligence",
    label: "Intelligence & Analytics",
    icon: "Brain",
    description: "Data intelligence and behavioral analysis",
    order: 5,
    color: "#ec4899" // pink
  }
];

// ============================================
// SECTIONS - Chi tiết từng phần
// ============================================
export const sections = [
  // ===== GET STARTED CATEGORY (3 sections) =====
  {
    id: "introduction",
    categoryId: "get-started",
    title: "Introduction to Acepyr",
    slug: "introduction",
    order: 1,
    component: Introduction,
    icon: "BookOpen",
    meta: {
      description: "Learn about Acepyr's mission and core values",
      keywords: ["introduction", "overview", "welcome"]
    },
    headings: [
      { id: "vision-mission", title: "Vision & Mission", level: 2 },
      { id: "why-choose", title: "Why Choose Acepyr?", level: 2 },
      { id: "key-benefits", title: "Key Benefits", level: 3 }
    ]
  },
  {
    id: "quick-start",
    categoryId: "get-started",
    title: "Quick Start Guide",
    slug: "quick-start",
    order: 2,
    component: QuickStart,
    icon: "Zap",
    meta: {
      description: "Get up and running in 5 minutes",
      keywords: ["quick start", "setup", "tutorial"]
    },
    headings: [
      { id: "prerequisites", title: "Prerequisites", level: 2 },
      { id: "first-steps", title: "First Steps", level: 2 },
      { id: "basic-usage", title: "Basic Usage", level: 3 }
    ]
  },
  {
    id: "installation",
    categoryId: "get-started",
    title: "Installation & Setup",
    slug: "installation",
    order: 3,
    component: Installation,
    icon: "Download",
    meta: {
      description: "Complete installation guide for all platforms",
      keywords: ["installation", "setup", "configuration"]
    },
    headings: [
      { id: "system-requirements", title: "System Requirements", level: 2 },
      { id: "installation-steps", title: "Installation Steps", level: 2 },
      { id: "troubleshooting", title: "Troubleshooting", level: 3 }
    ]
  },

  // ===== ECOSYSTEM CATEGORY (3 sections) =====
  {
    id: "vision-strategy",
    categoryId: "ecosystem",
    title: "Vision & Strategy",
    slug: "vision-strategy",
    order: 1,
    component: VisionStrategy,
    icon: "Target",
    meta: {
      description: "Acepyr's vision and strategic roadmap",
      keywords: ["vision", "strategy", "roadmap"]
    },
    headings: [
      { id: "core-vision", title: "Core Vision", level: 2 },
      { id: "strategic-roadmap", title: "Strategic Roadmap", level: 2 },
      { id: "future-plans", title: "Future Plans", level: 3 }
    ]
  },
  {
    id: "core-features",
    categoryId: "ecosystem",
    title: "Core Features",
    slug: "core-features",
    order: 2,
    component: CoreFeatures,
    icon: "Star",
    meta: {
      description: "Explore Acepyr's powerful features",
      keywords: ["features", "capabilities", "functionality"]
    },
    headings: [
      { id: "key-features", title: "Key Features", level: 2 },
      { id: "advanced-capabilities", title: "Advanced Capabilities", level: 2 },
      { id: "use-cases", title: "Use Cases", level: 3 }
    ]
  },
  {
    id: "integrations",
    categoryId: "ecosystem",
    title: "Integrations & Partnerships",
    slug: "integrations",
    order: 3,
    component: Integrations,
    icon: "Plug",
    meta: {
      description: "Connect Acepyr with your favorite tools",
      keywords: ["integrations", "API", "partnerships"]
    },
    headings: [
      { id: "available-integrations", title: "Available Integrations", level: 2 },
      { id: "integration-guides", title: "Integration Guides", level: 2 },
      { id: "custom-integrations", title: "Custom Integrations", level: 3 }
    ]
  },

  // ===== ARCHITECTURE CATEGORY (3 sections) =====
  {
    id: "system-architecture",
    categoryId: "architecture",
    title: "System Architecture",
    slug: "architecture",
    order: 1,
    component: SystemArchitecture,
    icon: "Layout",
    meta: {
      description: "Technical architecture and design patterns",
      keywords: ["architecture", "system design", "patterns"]
    },
    headings: [
      { id: "architecture-overview", title: "Architecture Overview", level: 2 },
      { id: "design-patterns", title: "Design Patterns", level: 2 },
      { id: "service-communication", title: "Service Communication", level: 3 }
    ]
  },
  {
    id: "api-reference",
    categoryId: "architecture",
    title: "API Reference",
    slug: "api-reference",
    order: 2,
    component: APIReference,
    icon: "Code",
    meta: {
      description: "Complete API documentation and examples",
      keywords: ["API", "endpoints", "reference"]
    },
    headings: [
      { id: "authentication", title: "Authentication", level: 2 },
      { id: "endpoints", title: "API Endpoints", level: 2 },
      { id: "rate-limits", title: "Rate Limits", level: 3 }
    ]
  },


  // ===== SANDBOX CATEGORY (2 sections) =====
  {
    id: "sandbox-env",
    categoryId: "sandbox",
    title: "FiMMO Sandbox",
    slug: "sandbox",
    order: 1,
    component: FiMMOSandbox,
    icon: "Box",
    meta: {
      description: "Testing environment and sandbox features",
      keywords: ["sandbox", "testing", "environment"]
    },
    headings: [
      { id: "sandbox-overview", title: "Sandbox Overview", level: 2 },
      { id: "testing-environment", title: "Testing Environment", level: 2 },
      { id: "data-security", title: "Data Security", level: 3 }
    ]
  },

  // ===== INTELLIGENCE CATEGORY (3 sections) =====
  {
    id: "behavioral-data",
    categoryId: "intelligence",
    title: "Behavioral Data",
    slug: "behavioral-data",
    order: 1,
    component: BehavioralData,
    icon: "Activity",
    meta: {
      description: "User behavior analysis and data intelligence",
      keywords: ["behavioral data", "analytics", "intelligence"]
    },
    headings: [
      { id: "data-collection", title: "Data Collection", level: 2 },
      { id: "data-structure", title: "Data Structure", level: 2 },
      { id: "behavior-analysis", title: "Behavior Analysis", level: 3 }
    ]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all sections belonging to a specific category
 * @param {string} categoryId - Category ID
 * @returns {Array} Array of sections sorted by order
 */
export const getSectionsByCategory = (categoryId) => {
  return sections
    .filter(section => section.categoryId === categoryId)
    .sort((a, b) => a.order - b.order);
};

/**
 * Get a single section by ID
 * @param {string} sectionId - Section ID
 * @returns {Object|null} Section object or null
 */
export const getSectionById = (sectionId) => {
  return sections.find(section => section.id === sectionId) || null;
};

/**
 * Get a single section by slug
 * @param {string} slug - Section slug
 * @returns {Object|null} Section object or null
 */
export const getSectionBySlug = (slug) => {
  return sections.find(section => section.slug === slug) || null;
};

/**
 * Get all categories sorted by order
 * @returns {Array} Array of categories
 */
export const getAllCategories = () => {
  return categories.sort((a, b) => a.order - b.order);
};

/**
 * Get category with its sections
 * @param {string} categoryId - Category ID
 * @returns {Object} Category with sections array
 */
export const getCategoryWithSections = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return null;

  return {
    ...category,
    sections: getSectionsByCategory(categoryId),
    sectionCount: getSectionsByCategory(categoryId).length
  };
};

/**
 * Get all categories with their sections
 * @returns {Array} Array of categories with sections
 */
export const getAllCategoriesWithSections = () => {
  return getAllCategories().map(category => ({
    ...category,
    sections: getSectionsByCategory(category.id),
    sectionCount: getSectionsByCategory(category.id).length
  }));
};

/**
 * Search sections by keyword
 * @param {string} keyword - Search keyword
 * @returns {Array} Matching sections
 */
export const searchSections = (keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return sections.filter(section => 
    section.title.toLowerCase().includes(lowerKeyword) ||
    section.meta.description.toLowerCase().includes(lowerKeyword) ||
    section.meta.keywords.some(k => k.toLowerCase().includes(lowerKeyword))
  );
};

/**
 * Get navigation structure for sidebar
 * @returns {Array} Nested navigation structure
 */
export const getNavigationStructure = () => {
  return getAllCategories().map(category => ({
    category: {
      id: category.id,
      label: category.label,
      icon: category.icon,
      color: category.color
    },
    sections: getSectionsByCategory(category.id).map(section => ({
      id: section.id,
      title: section.title,
      slug: section.slug,
      icon: section.icon,
      readTime: section.meta.readTime
    }))
  }));
};
