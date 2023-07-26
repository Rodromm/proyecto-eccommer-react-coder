








 const products = [
    {
       id: 'celular',
       name: 'celular',
       price: 100,
       category: 'celular',
       img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',     
       stock: 20, 
       description:'descripcion del telefono'
    },
    {
        id: '2',
        name: 'tablet',
        price: 300,
        category: 'tablet',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',     
        stock: 5, 
        description:'descripcion del telefono'
     },
     {
        id: '3',
        name: 'notebook',
        price: 600,
        category: 'notebook',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',     
        stock: 10, 
        description:'descripcion del telefono'
     },
]



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (ProductCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === ProductCategory))
        }, 500)
    })
}
