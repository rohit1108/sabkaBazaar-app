import Products from "../server/products/index.get.json";
import { useState, useEffect } from "react";
import { useLocation, useMatch } from "react-router-dom";
import axios from "axios";

export default function useFetchProducts() {
  const [filteredProduct, setFilteredProduct] = useState(Products); // display products 
  const match = useMatch("/products/:id");
 
  const location = useLocation();
  useEffect(() => { // matching the id and fetching the products with that category
    axios.get('http://localhost:5000/products') 
      .then(response => {
        if (!match) {
          setFilteredProduct(Products);
          console.log(match);
        } else {
          setFilteredProduct(
            Products.filter((product) => 
              product.category === match.params.id
            )
            
          );
          console.log(match.params.id);
          
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [location, match]);

  return {
    filteredProduct // the products of those cateegory
  }
}