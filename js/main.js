const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'
//push to GIT HUB
class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
            });
    }

    _fetchProducts(){
        // this.goods = [
        //     {id: 1, title: 'Notebook', price: 2000, img: '../img/laptop.jpg'},
        //     {id: 2, title: 'Mouse', price: 20, img: '../img/mouse.jpg'},
        //     {id: 3, title: 'Keyboard', price: 200, img: '../img/keyboard.jpg'},
        //     {id: 4, title: 'Gamepad', price: 50, img: '../img/gamepad.jpg'},
        // ];
        return fetch (`${API}catalogData.json`)
            .then(result => result.json())
            .catch(err => console.log(err));
    }

    getSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}

class ProductItem{
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item ml-4" style="display:inline-block;">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}₽</p>
                <button class="btn-success btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

class ShoppingCart {
	constructor(container='.products-basket'){
		this.container = container;
        this.goods = [];
        this._clickBasket();
        this._getBasketItem()
			.then(data => {
				this.goods = [...data.contents];
				this.render();
			});
	}
	
	_getBasketItem() {
		return fetch(`${API}getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
	};

    _clickBasket() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        })
    }

	render() {
		const cart = document.querySelector(this.container);
        for(let product of this.goods){
            console.log(product)
            const item = new ShoppingCartItem(product);
            cart.insertAdjacentHTML("beforeend", item.render());
        }
	}
}

class ShoppingCartItem {
	constructor(product){
		this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
		this.quantity = product.quantity;
	}

	render() {
		return    `<div class="cart-item ml-4" style="display:inline-block;">                
                <h3>${this.title}</h3>
                <p>${this.price}₽</p>
                <p>Quantity: ${this.quantity}</p>
                <button class="btn-success btn">Добавить</button>
                <button class="btn-danger btn">Удалить</button>
            </div>`
	}
}

let cart = new ShoppingCart();
