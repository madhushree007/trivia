import React from "react";
import categories from "../categories";

export default function CategoriesSelector({ categoryChoose, setCategory }) {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select
        value={categoryChoose}
        onChange={e => setCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option
            key={index}
            value={category.id}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        ))}
      </select>
    </div>
  );
}
