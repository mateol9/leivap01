export const adaptedProducts = (doc) => {
  const data = doc.data();

  const productAdapted = {
    id: doc.id,
    name: data.name,
    brand: data.brand,
    price: data.price,
    img: data.img,
    category: data.category,
    stock: data.stock,
  }

  return productAdapted;
}
