import { getProductByIdFromDB } from '@/service/product.service';
import React from 'react';

const ProductsDetails =async ({params:{id}}) => {
    const product = await getSingleProduct(id);
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    );
};

export default ProductsDetails;