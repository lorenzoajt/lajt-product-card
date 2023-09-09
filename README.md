# lajt-product-card
This is a test to deploy packages to npm

### Lorenzo Torres

## Example
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'lajt-product-card';
```

```
<ProductCard
    key={product.id}
    product={product}
    initialValues={{
        count: 4,
        // maxCount: 10
    }}                      
>
    { 
        ({reset, count, increaseBy, isMaxCountReached, maxCount}) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />

        </>
        
        )
    }
</ProductCard>
```