import React from "react";

const RightTOC = ({ headings }) => {
  // Kiểm tra nếu không có headings thì không render
  if (!headings || headings.length === 0) return null;

  return (
    <aside className="right-toc">
      <p className="toc-title">On this page</p>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={`toc-item level-${heading.level}`}>
            <a href={`#${heading.id}`}>{heading.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RightTOC;