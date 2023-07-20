
import { cache } from react;
import 'server-only'
import { getProductsFromDB } from '@/service/product.service';
const getProducts = cache(getProductsFromDBFromDB);

export default getCategories;