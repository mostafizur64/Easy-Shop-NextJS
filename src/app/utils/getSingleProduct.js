
import { getProductByIdFromDB } from "@/service/product.service";
import { cache } from "react";


const getSingleProduct = cache(getProductByIdFromDB);

export default getSingleProduct;
