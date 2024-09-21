import React from "react";
import CategorySlider from "../components/categoriesComps/CategorySlider";
import ItemCard from "../components/itemComp/ItemCard";
import products from "../products";
import Link from "next/link";

function page() {
    
  const categories = [
    { id: 1, name: "Bag", imageUrl: "/categoryimages/bag.jpeg" },
    { id: 2, name: "Toys", imageUrl: "/categoryimages/toys.png" },
    { id: 3, name: "Sneakers", imageUrl: "/categoryimages/sneakers.png" },
    { id: 4, name: "Phones", imageUrl: "/categoryimages/phones.png" },
    {
      id: 5,
      name: "Smart Watches",
      imageUrl: "/categoryimages/smartwatches.png",
    },
    { id: 6, name: "Tablets", imageUrl: "/categoryimages/tablets.png" },
    { id: 7, name: "Phones", imageUrl: "/categoryimages/phones.png" }
  ];

  

  return (
    <div className="py-8 px-60">
      <h1 className="text-3xl font-bold text-center mb-8">Our Categories</h1>
      {/* Pass the categories and items per page to the CategorySlider */}
      <CategorySlider categories={categories} itemsPerPage={6} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-28">
        {products.map((item) => (
          <Link href={`/${item.id}`}>
          <ItemCard
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            isCompanyProduct={item.isCompanyProduct}
          />
          </Link>
        ))}
      </div>{" "}
    </div>
  );
}

export default page;
