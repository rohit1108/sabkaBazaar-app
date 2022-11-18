import React from "react";
import Button from "../../atoms/PlpButton/Button";
import "./Sidebar.scss";
import { useState } from "react";

export default function Sidebar({ filteredCategory, handleProduct }) {
  let [count ,setCount]= useState(1);
  function displayCategoryProducts(category){
    setCount(count=>count+1);
    if(count%2 == 0){
      console.log(count);
      handleProduct(false)
    }else{
      console.log(count);
    handleProduct(category.id)
    }
  }
  return (
    <aside className="sidebar">
      {filteredCategory.map((category) => (
        <Button
          onClick={() => 
            displayCategoryProducts(category)}
          key={category.id}
          className={"sidebar__button"}
        >
          {category.name}
        </Button>
      ))}
    </aside>
  );
}
