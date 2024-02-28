import React from "react";
import Image from "next/image";
import categories from "../data/Categories.json";

function Category() {
  return (
    <div>
      <div className="flex grid-cols-5 lg:grid-cols-10  mt-10 px-20 justify-center flex-wrap  md:overflow-x-auto gap-10">
        {categories.map((category, index) => (
          <div key={category.id} className="category-item justify-center ">
            <Image
              src={category.url}
              alt={category.name}
              width={62}
              height={62}
            />
            <h1 className="md:text-[13px]   mt-2 font-thin">{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
