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
       let serachResult= this.products.filter(product => product.name === productName);
       return serachResult
    } 

    getTotal() {
        let totalPrice = 0;
        this.products.forEach(product =>{
            totalPrice = totalPrice + product.price 
        })
        return totalPrice
    }

    renderProducts() {
        const myShoppingCart = document.querySelector('#shopping-cart');
           let shoppingCartInfo =''
           this.products.forEach(product => {
            shoppingCartInfo = shoppingCartInfo + `<li>${product.name} </br> ${product.price}</li>`
        })
        shoppingCartInfo = shoppingCartInfo + `<li><em>Total price </br><u> ${this.getTotal()}</u></em></li>`

        myShoppingCart.innerHTML =shoppingCartInfo ;
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
shoppingCart.renderProducts();
console.log(shoppingCart.searchProduct('bed'));