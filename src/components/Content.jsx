import React from "react";

const Content = ({ section }) => {
  if (!section) return <div className="no-content">Select a section</div>;

  return (
    <div className="content-wrapper">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
        {section.title}
      </h1>
      <div className="content-body" style={{ color: '#ccc', lineHeight: '1.6' }}>
        {section.content}
      </div>
    </div>
  );
};

export default Content;