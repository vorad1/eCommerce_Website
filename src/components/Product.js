import React, { useContext } from "react";
import { ProductsContext } from "../global/ProductsContext";

export const Product = () => {

    const { products } = useContext(ProductsContext);
    console.log(products);

    return
    <div>
        Product
    </div>;

};
