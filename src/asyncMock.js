const products = [
    {
        id: 1,
        name: 'Ryzen 5 5600x',
        brand: 'AMD',
        price: 300,
        img: 'https://s3-sa-east-1.amazonaws.com/saasargentina/icfpPWN8Oo3ZXwsAHuxO/imagen',
        category: 'Procesadores',
        stock: 42
    },
    {
        id: 2,
        name: 'RTX 3050',
        brand: 'Asus',
        price: 700,
        img: 'https://dlcdnwebimgs.asus.com/gain/fae5d6a8-2717-49fa-9492-eb329b9b9e11/w328',
        category: 'Tarjetas Graficas',
        stock: 12
    },
    {
        id: 3,
        name: 'Mother B550m-k',
        brand: 'Asus',
        price: 180,
        img: 'https://www.venex.com.ar/products_images/1602010489_p_setting_fff_1_90_end_600.jpg',
        category: 'Motherboards',
        stock: 65
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products);
        }, 3000);
    });
};
