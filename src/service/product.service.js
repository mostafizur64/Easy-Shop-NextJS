import 'server-only';
import DbConnect from './DbConnect';
import { ObjectId } from 'mongodb';
export const getProductsFromDB = async (categoryId) => {
    const db = await DbConnect();

    const productsCollections = await db.collection('products')
    const query = {};
    if (categoryId) {
        query.categoryId = categoryId;
    }
    return productsCollections.find(query).toArray();


}
export const getProductByIdFromDB = async (id) => {
    const db = await DbConnect();

    const productsCollections = await db.collection('products')
    const query = {
        _id: new ObjectId(id)
    };
    return productsCollections.findOne(query);


}
export const getProductsByIdsFromDb = async (ids = []) => {
    const db = await DbConnect();
    const productsCollection = db.collection("products");
    const idsWithObjectId = ids.map((id) => new ObjectId(id));
    const query = {
      _id: { $in: idsWithObjectId },
    };
    return productsCollection.find(query).toArray();
  };
  