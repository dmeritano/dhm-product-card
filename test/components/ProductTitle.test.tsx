import * as React from 'react';
import renderer from "react-test-renderer"
import { ProductTitle, ProductCard } from "../../src/components"
import { product1 } from '../data/products';

product1


describe("ProductTitle", () => {
    test("Should show the component with customized title", () => {

        const wrapper = renderer.create(
            <ProductTitle title='Custome Product'/>
        )

        expect ( wrapper.toJSON()).toMatchSnapshot()
        //console.log(wrapper.toJSON())
    })

    test("Should show the component with the product name", () => {

        const wrapper = renderer.create(
            
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
            
        )
        expect ( wrapper.toJSON()).toMatchSnapshot()
    })

})