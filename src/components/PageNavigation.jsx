import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/PageNavigation.css";

const PageNavigation = ({ sections, activeId, onSelect }) => {
  // Tìm vị trí của trang hiện tại trong mảng dữ liệu
  const currentIndex = sections.findIndex((s) => s.id === activeId);
  
  const prevPage = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextPage = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div className="page-nav-container">
      <div className="nav-wrapper">
        {/* Nút trang trước */}
        {prevPage ? (
          <button className="nav-btn prev" onClick={() => onSelect(prevPage.id)}>
            <div className="nav-icon"><ChevronLeft size={20} /></div>
            <div className="nav-text">
              <span className="nav-label">Previous</span>
              <span className="nav-title">{prevPage.title}</span>
            </div>
          </button>
        ) : <div className="nav-placeholder" />}

        {/* Nút trang tiếp theo */}
        {nextPage ? (
          <button className="nav-btn next" onClick={() => onSelect(nextPage.id)}>
            <div className="nav-text">
              <span className="nav-label">Next</span>
              <span className="nav-title">{nextPage.title}</span>
            </div>
            <div className="nav-icon"><ChevronRight size={20} /></div>
          </button>
        ) : <div className="nav-placeholder" />}
      </div>
    </div>
  );
};

export default PageNavigation;