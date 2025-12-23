import React from "react";
import { getNavigationStructure } from "../data/sectionsData"; // Import hàm cấu trúc có sẵn
import "../styles/Sidebar.css";

const Sidebar = ({ activeSection, onSelect }) => {
  // Sử dụng hàm helper có sẵn để lấy cấu trúc dữ liệu chuẩn
  const navStructure = getNavigationStructure();

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        {navStructure.map((item) => (
          // Sử dụng item.category.id làm key duy nhất
          <div key={item.category.id} className="sidebar-group">
            <h3 className="sidebar-group-label" style={{ color: item.category.color }}>
              {item.category.label}
            </h3>
            <ul className="sidebar-list">
              {item.sections.map((sec) => (
                <li
                  key={sec.id} // sec.id lấy từ sectionsData.js là duy nhất
                  className={`sidebar-item ${activeSection === sec.id ? "is-active" : ""}`}
                  onClick={() => onSelect(sec.id)}
                >
                  <span className="item-title">{sec.title}</span>
                  {sec.readTime && <span className="read-time">{sec.readTime}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;