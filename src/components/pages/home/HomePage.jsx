
import React from "react";
import Helmet from "react-helmet";
import useProducts from "../../../utils/useProducts"
import Carousel from '../../organisms/Carousel/Carousel'
import Section from "../../organisms/HomeBody/Section"
import Navbar from "../../organisms/Navbar/Navbar"
import "./HomePage";

export default function Home() {
  const { filteredCategory, handleProduct } = useProducts();

  return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="You can view different offers on the prducts and different categories of product." />
            <title>Home</title>
    </Helmet>
    <Navbar/>
    <main className="home-container">
      <Carousel />
      {filteredCategory.map((category, index) => (
        <Section
          key={index}
          id={category.id}
          url={category.imageUrl}
          heading={category.name}
          text={category.description}
          button={category.key}
          order={category.order}
          handleProduct={handleProduct}
        />
      ))}
    </main>
    </>
  );
}


