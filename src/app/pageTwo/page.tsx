"use client";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import product from "../component/Products.json"
import Link from "next/link";

const PriceSection = ["10", "50", "100"];
const CategorySection = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];


export default function page() {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  const [pageActive, setPageActive] = useState(false);

  const pageOneProduct = product.slice(10, 20);

  const selectedPriceNumber = parseFloat(selectedPrice);

  // Filter data
  const filteredData = pageOneProduct.filter(
    (entry) =>
      (selectedPrice === "" || entry.price < selectedPriceNumber) &&
      (selectedCategory === "" || entry.category === selectedCategory)
     
  );

  const handlePriceSelect = (topic: string) => {
    if (topic === "10") {
      setSelectedPrice(topic);
    } else if (topic === "50") {
      setSelectedPrice(topic);
    } else if (topic === "100") {
      setSelectedPrice(topic);
    } else {
      setSelectedPrice(topic);
    }
  };

  const handleCategorySelect = (topic: string) => {
    setSelectedCategory(topic);
    console.log(selectedCategory);
  };



  return ( 
    <main className="my-5 max-w-5xl mx-auto bg-[#FFFFFF]">
      <h1 className="filter-heading mb-10">Filter Page-Page 2</h1>
      <section className="filter-container flex justify-between">
        {/* slection by price */}
        <div className="filter-item">
          <label>Select Price:</label>
          <select
            onChange={(e) => handlePriceSelect(e.target.value)}
            value={selectedPrice}
            className=""
          >
            <option value="">All</option>
            {PriceSection.map((topic, index) => {
              return (
                <option key={index} value={topic}>
                  under &#x20B9;{topic}
                </option>
              );
            })}
          </select>
        </div>


        {/* slection by Category */}
        <div className="filter-item">
          <label>Select Category:</label>
          <select
            onChange={(e) => handleCategorySelect(e.target.value)}
            value={selectedCategory}
            className=""
          >
            <option value="">All</option>
            {CategorySection.map((topic, index) => {
              return (
                <option key={index} value={topic}>
                  {topic}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <h1 className="filter-heading mt-10">Filter Results</h1>
      <section>
        {filteredData.length === 0 ? (
          <p className="filter-heading mt-10">No products found</p>
        ) : (
          <ul className="">
            {filteredData.map((item, index) => (
              <li
                key={index}
                className="my-5 flex gap-5 justify-center border border-[#f5f5f5] shadow-sm"
              >
                <img src={item.image} className="w-36 h-40 bg-slate-500" />

                <div className="max-w-xl">
                  <h2 className="product-heading-big">{item.title}</h2>
                  <p className="product-para">{item.description}</p>
                  <Rating
                    defaultValue={item.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  <h2 className="product-price">&#x20B9;{item.price}</h2>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="my-5 flex gap-2 justify-center">
        <Link className="text-2xl" href="pageTwo">
          &laquo;
        </Link>
        <Link href="/" className="page-btn page-btn-hover">
          1
        </Link>
        <Link href="pageTwo" className={`page-btn ${pageActive ? '':'page-btn-active'}`}>
          2
        </Link>
        <Link className="text-2xl" href="/">
          &raquo;
        </Link>
      </section>
    </main>
  );
}
