export function calcSubPrice (product) {

    return +product.count * +product.item.price
} 


export function calcTotalPrice (product) {
    let totalPrice = 0;
    product.forEach((item) => {
        totalPrice +=  +item.subPrice
    })
    return totalPrice
}