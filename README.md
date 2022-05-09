# DHM-Product-Card

This is a test package for deployment in NPM - REACT JS

### David Meritano

## Usage example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "dhm-product-card"
```

```
const product = {
  id:"1",
  title:"Coffee Mug - Card",
  //img: "./images/coffee-mug.png"
}
```

```
    <>
      <ProductCard
        product={product}
        initialValues={{ 
          count: 5, 
          //maxCount: 10 
        }}
      >
        {({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
```
