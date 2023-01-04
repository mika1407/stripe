// Coffee: price_1MMBnbGHd4aursoLyT7S0QHV
// Sunglasses: price_1MMBpYGHd4aursoLR1tID4OB
// Camera: price_1MMBqqGHd4aursoLC7gDwuuK

const productsArray = [
    {
        id: "price_1MMBnbGHd4aursoLyT7S0QHV",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1MMBpYGHd4aursoLR1tID4OB",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MMBqqGHd4aursoLC7gDwuuK",
        title: "Camera",
        price: 49.99
    },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined
    }

    return productData;
}


export {productsArray, getProductData};