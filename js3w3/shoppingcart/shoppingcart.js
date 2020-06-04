class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(new Product(product.name,product.price));
    }

    removeProduct(product) {
        let indexToDelete = this.products.findIndex(productItem => productItem.name === product.name);
        if (indexToDelete != -1){
            this.products.splice(indexToDelete,1)
        }else{
            alert(`There is no ${product.name} product to delete`);
        }
    }

    searchProduct(productName) {
        // Implement functionality here
    }

    getTotal() {
        let totalPrice = 0;
        this.products.map(product =>{
            totalPrice = totalPrice + product.price ;

        })
        return totalPrice
    }

    renderProducts() {
        // Implement functionality here
    }

    getUser() {
        // Implement functionality here
    }
}

const shoppingCart = new ShoppingCart();

const flatscreen = new Product('flat-screen', 5000);
shoppingCart.addProduct(flatscreen);

const mobile = new Product('Mobile LG', 1000);
shoppingCart.addProduct(mobile);

const bed = new Product('bed', 400);
shoppingCart.addProduct(bed);

console.log('shoppingCart: ',shoppingCart, 'Total price :',shoppingCart.getTotal());
// console.log(flatscreen,bed,mobile)