import React, { useState } from "react";
import { sections } from "./data/sectionsData";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightTOC from "./components/RightTOC";
import Footer from "./components/Footer";
import './App.css';
import PageNavigation from "./components/PageNavigation";

function App() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const activeSection = sections.find(s => s.id === activeId);
  const ContentComponent = activeSection?.component;

  return (
    <div className="main-layout">
      <Header />
      <div className="scroll-container">
        {/* Container chính bọc nội dung, dùng flex-grow để đẩy footer */}
        <div className="app-content-wrapper">
          <div className="app-container">
            <Sidebar 
              sections={sections} 
              activeSection={activeId} 
              onSelect={setActiveId} 
            />
            <main className="content-area">
              {ContentComponent ? <ContentComponent /> : <p>Loading...</p>}
              <PageNavigation 
                sections={sections} 
                activeId={activeId} 
                onSelect={setActiveId} 
              />
            </main>
            <RightTOC headings={activeSection?.headings || []} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;