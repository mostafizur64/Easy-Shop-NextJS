import { getCategoryFromDB } from '@/service/category.service';
import { cache } from 'react';
import 'server-only'

const getCategories = cache(() => {
    return getCategoryFromDB();
});

export default getCategories;