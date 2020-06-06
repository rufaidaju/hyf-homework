class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency){
        const apiKey = 'd81e4d29433f56cf29d4e576';
        fetch(`https://prime.exchangerate-api.com/v5/${apiKey}/latest/DKK`)
        .then(response => response.json())
        .then(response => {
            let convertedPrice = response.conversion_rates[currency] * this.price ;
            console.log('The price :',this.price ,'converted to:',convertedPrice,'the currency',currency);
            return convertedPrice 
        });
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
                            shoppingCartInfo = shoppingCartInfo + `<li>${product.name} </br>
                            ${product.price}DKK ${product.convertToCurrency('USD')} USD </li>`
                            })
        shoppingCartInfo = shoppingCartInfo + `<li><em>Total price </br><u> ${this.getTotal()}</u></em></li>`
        myShoppingCart.innerHTML =shoppingCartInfo ;
    }

    getUser() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response => response.json()))
        .then(response => {
         const user = document.querySelector('.user-name');
          this.userName = response.username ;
          this.userEmail = response.email ;
          this.userPhone = response.phone ;
          user.innerHTML =`Hello ${this.userName}!`;
          console.log('user name =',this.userName,'email:',this.userEmail)

        }).catch( err => console.log(err));
    }
}

const shoppingCart = new ShoppingCart();

const flatscreen = new Product('flat-screen', 5000);
shoppingCart.addProduct(flatscreen);
console.log(flatscreen.convertToCurrency('USD'));

const mobile = new Product('Mobile LG', 1000);
shoppingCart.addProduct(mobile);

const bed = new Product('bed', 400);
shoppingCart.addProduct(bed);
// shoppingCart.removeProduct(mobile);

console.log('shoppingCart: ',shoppingCart, 'Total price :',shoppingCart.getTotal());
shoppingCart.renderProducts();
console.log(shoppingCart.searchProduct('bed'));
