import React from "react";
import Button from "../../atoms/FormButton/Button";
import Image from "../../Atoms/Image/Image";
import "./Section.scss";

export default function Section({
    imageUrl,
    name,
    description,
    button,
    order,
    id,
    handleProduct,
}) {
    return (

        <>
  <section className="container">
            {order % 2 === 0 ? (
                <>
                <div className="container">
            <div>
            <img className="container__categoryImage" src={imageUrl} alt={description}/>
            </div>
        <div className="container__content">  
            <div><h3>{name}</h3></div>
            <div>{description}</div>
            <Button className="container__content__btn">{`Explore ${name}`}</Button>
        </div>
    </div>
    
                </>
            ) : (
                <>
                   <div className="container">
                   <div className="container__content">  
            <div><h3>{name}</h3></div>
            <div>{description}</div>
            <Button className="container__content__btn">{`Explore ${name}`}</Button>
                 </div>
                 <div>
              <img className="container__categoryImage" src={imageUrl} alt={description}/>
                </div>
                   </div>
                </>
            )}
        </section>
        </>
    )
}
