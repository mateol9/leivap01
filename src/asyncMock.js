const products = [
    {
        id: '1',
        name: 'Ryzen 5 5600x',
        brand: 'AMD',
        price: 300,
        img: 'https://s3-sa-east-1.amazonaws.com/saasargentina/icfpPWN8Oo3ZXwsAHuxO/imagen',
        category: 'procesadores',
        stock: 42
    },
    {
        id: '2',
        name: 'RTX 3050',
        brand: 'Asus',
        price: 700,
        img: 'https://dlcdnwebimgs.asus.com/gain/fae5d6a8-2717-49fa-9492-eb329b9b9e11/w328',
        category: 'graficas',
        stock: 12
    },
    {
        id: '3',
        name: 'Mother B550m-k',
        brand: 'Asus',
        price: 180,
        img: 'https://www.venex.com.ar/products_images/1602010489_p_setting_fff_1_90_end_600.jpg',
        category: 'motherboards',
        stock: 65
    },
    {
        id: '4',
        name: 'Mother B550 GamingX V2',
        brand: 'Gigabyte',
        price: 190,
        img: 'https://www.venex.com.ar/products_images/1645202040_xxcvxvxcv.png',
        category: 'motherboards',
        stock: 44
    },
    {
        id: '5',
        name: 'Ryzen 5 5600G',
        brand: 'AMD',
        price: 280,
        img: 'https://http2.mlstatic.com/D_NQ_NP_906389-MLA50355579179_062022-O.webp',
        category: 'procesadores',
        stock: 22
    },
    {
        id: '6',
        name: 'Ryzen 3 4100',
        brand: 'AMD',
        price: 200,
        img: 'https://http2.mlstatic.com/D_NQ_NP_642444-MLA50528590284_062022-W.webp',
        category: 'procesadores',
        stock: 18
    },
    {
        id: '7',
        name: 'Mouse G403 Prodigy',
        brand: 'Logitech',
        price: 25,
        img: 'https://http2.mlstatic.com/D_NQ_NP_661563-MLA43273941952_082020-V.webp',
        category: 'perifericos',
        stock: 94
    },
    {
        id: '8',
        name: 'Teclado Mecanico G815 GL Tactile',
        brand: 'Logitech',
        price: 50,
        img: 'https://http2.mlstatic.com/D_NQ_NP_992088-MLA43367876810_092020-V.webp',
        category: 'perifericos',
        stock: 72
    },
    {
        id: '9',
        name: 'RX 6500XT',
        brand: 'Asus',
        price: 400,
        img: 'https://http2.mlstatic.com/D_NQ_NP_880498-MLA49222947474_022022-W.webp',
        category: 'graficas',
        stock: 9
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products);
        }, 500);
    });
};

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}
