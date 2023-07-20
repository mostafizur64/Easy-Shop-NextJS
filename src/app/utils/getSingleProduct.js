
import { cache } from react;
import { getProductByIdFromDB } from '@/service/product.service';
const getSingleProduct = cache(getProductByIdFromDB);

export default getSingleProduct;