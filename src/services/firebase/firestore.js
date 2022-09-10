import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore';
import { adaptedProducts } from '../../adapters/productsAdapter';
import { db } from './index';

export const getProducts = async (categoryId) => {
  const collectionFiltered = !categoryId
    ? collection(db, 'products')
    : query(collection(db, 'products'), where('category', '==', categoryId));

  try {
    const response = await getDocs(collectionFiltered);
    const productsAdapted = response.docs.map(doc => {
      return adaptedProducts(doc);
    });
    return productsAdapted;
  } catch (error) {
    return error;
  }
}

export const getProductDetail = async (productId) => {
  try {
    const response = await getDoc(doc(db, 'products', productId));
    return adaptedProducts(response);
  } catch (error) {
    return error;
  }
}