import React from "react";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import Card from "../../organisms/Card/Card";
import "./Products.scss";
import useCategories from "../../../utils/useCategories";
import useFetchProducts from "../../../utils/useFetchProducts";
import useProductsHistory from "../../../utils/useProductsHistory";
import Navbar from "../../organisms/Navbar/Navbar";
import Helmet from "react-helmet";

export default function Products() {
  const { handleProduct } = useProductsHistory();
  const { filteredCategory } = useCategories();
  const { filteredProduct } = useFetchProducts();
  const browserWidth = useMediaQuery("(max-width: 480px)");

  return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="You can view different offers on the prducts and different categories of product." />
            <title>Products</title>
    </Helmet>
    <Navbar isAuth={true} />
    <main className="productContainer">
      
      {browserWidth ? (
        <Dropdown
          items={[...filteredCategory, { id: "", name: "All Products" }]}
          handleProduct={handleProduct}
          filteredProduct={filteredProduct}
        />
      ) : (
        <Sidebar
          filteredCategory={filteredCategory}
          handleProduct={handleProduct}
        />
      )}
      <main className="productContainer__card">
        {filteredProduct.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageUrl={product.imageURL}
            name={product.name}
            price={product.price}
            stock={product.stock}
            text={product.description}
          />
        ))}
      </main>
    </main>
    </>
  );
}
