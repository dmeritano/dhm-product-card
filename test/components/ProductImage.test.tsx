import * as React from 'react';
import renderer from "react-test-renderer"
import { ProductImage, ProductCard } from "../../src/components"
import { product2 } from '../data/products';


describe("ProductImage", () => {
    test("Should show the component with custom image", () => {

        const wrapper = renderer.create(
            <ProductImage img="../data/my-product-custom-image.png"/>
        )

        expect ( wrapper.toJSON()).toMatchSnapshot()
    })

    
    test("Should show the component with product image", () => {

        const wrapper = renderer.create(
            
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
            
        )
        expect ( wrapper.toJSON()).toMatchSnapshot()
    })
    

})