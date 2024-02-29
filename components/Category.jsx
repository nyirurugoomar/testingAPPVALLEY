import React from "react";
import Image from "next/image";
import categories from "../data/Categories.json";

function Category() {
  return (
    <div>
      <div className="grid grid-cols-5 md:grid-row-5 gap-8 mt-10 mb-10 px-4 md:px-20 justify-center md:flex md:flex-wrap">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="category-item justify-center text-center"
          >
            <Image
              src={category.url}
              alt={category.name}
              width={62}
              height={62}
            />
            <h1 className="md:text-[13px] mt-2 font-thin">{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
